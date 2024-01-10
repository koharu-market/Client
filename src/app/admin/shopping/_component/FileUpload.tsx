/* eslint-disable @next/next/no-img-element */
'use client';

import { axiosInstance } from '@/lib/axios';
import { UploadFileInfo } from '@/types/Uploads';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiOutlineClose, AiOutlineCamera } from 'react-icons/ai';

export default function FileUpload() {
  const [myFiles, setMyFiles] = useState<UploadFileInfo[]>([]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      const formData = new FormData();

      acceptedFiles.forEach(file => {
        formData.append('files', file);
      });

      const response: UploadFileInfo[] = await handleUpload(formData);

      if (response) {
        setMyFiles(prevFiles => {
          const updatedFiles = prevFiles.concat(
            response.map(files => ({
              path: process.env.NEXT_PUBLIC_API_URI + files.path,
              originalname: files.originalname,
            })),
          );

          const truncatedFiles = updatedFiles.slice(0, 5);

          return truncatedFiles;
        });
      }
    } catch (error) {
      console.error('Error handling drop:', error);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const removeFile = (file: UploadFileInfo) => () => {
    const newFiles = myFiles.filter(f => f !== file);
    setMyFiles(newFiles);
  };

  const files = myFiles.map(file => (
    <li key={file.path} className="relative">
      <img
        src={file.path}
        className="w-32 h-[72px]"
        onLoad={() => {
          URL.revokeObjectURL(file.path);
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
