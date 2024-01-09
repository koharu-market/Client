/* eslint-disable @next/next/no-img-element */
'use client';

import { axiosInstance } from '@/lib/axios';
import { UploadFileInfo } from '@/types/Uploads';
import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiOutlineClose, AiOutlineCamera } from 'react-icons/ai';

interface FileWithPreview extends File {
  preview: string;
  path?: string;
}

export default function FileUpload() {
  const [myFiles, setMyFiles] = useState<FileWithPreview[]>([]);

  // 메모리 누수를 방지
  useEffect(() => {
    return () => myFiles.forEach(file => URL.revokeObjectURL(file.preview));
  }, [myFiles]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      const formData = new FormData();

      acceptedFiles.forEach(file => {
        formData.append('files', file);
      });

      // Upload files and get server response
      const response = await handleUpload(formData);

      if (response) {
        setMyFiles(prevFiles => {
          // Combine the server-provided paths with the existing files
          const updatedFiles = prevFiles.concat(
            response.map((files: UploadFileInfo) => ({
              preview: `${process.env.NEXT_PUBLIC_API_URI}/uploads/${files.filename}`,
              path: files.path,
            })),
          );

          // Limit the number of files
          const truncatedFiles = updatedFiles.slice(0, 5);

          // Remove duplicates
          const uniqueFiles = truncatedFiles.filter(
            (file, index, self) => index === self.findIndex(f => f.path === file.path),
          );

          return uniqueFiles;
        });
      }
    } catch (error) {
      console.error('Error handling drop:', error);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const removeFile = (file: FileWithPreview) => () => {
    const newFiles = myFiles.filter(f => f !== file);
    setMyFiles(newFiles);
  };

  const files = myFiles.map(file => (
    <li key={file.path} className="relative">
      <img
        src={file.preview}
        className="w-32 h-[72px]"
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
        alt="상품 이미지"
      />
      <button
        className="absolute right-1 top-1 rounded-full w-6 h-6 bg-white opacity-70 border flex justify-center items-center border-black"
        onClick={removeFile(file)}
      >
        <AiOutlineClose />
      </button>
    </li>
  ));

  const remainingCameraIcons = Math.max(5 - myFiles.length, 0);
  const cameraIcons = Array.from({ length: remainingCameraIcons }, (_, index) => (
    <li key={`camera-${index}`}>
      <AiOutlineCamera className="w-32 h-[72px] text-slate-300" />
    </li>
  ));

  const handleUpload = async (formData: FormData) => {
    try {
      const response = await axiosInstance.post('/uploads/multiple', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        console.log('File upload successful');
        return response.data;
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }

    return null;
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div>이미지</div>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <span className="text-[#1A6DFF] cursor-pointer">Image 추가</span>
        </div>
      </div>
      <div className="mt-10">
        <ul className="flex gap-4">
          {files} {cameraIcons}
        </ul>
      </div>
    </div>
  );
}
