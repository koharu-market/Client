/* eslint-disable @next/next/no-img-element */
'use client';

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
    return () => myFiles.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [myFiles]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setMyFiles((prevFiles) => {
      // 이미 선택된 파일과 새로운 파일을 합침
      const allFiles = prevFiles.concat(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      // 최대 허용 파일 갯수를 초과하는 경우 초과한 파일들을 제거
      const truncatedFiles = allFiles.slice(0, 5);

      // 중복 파일 제거
      const uniqueFiles = truncatedFiles.filter(
        (file, index, self) =>
          index === self.findIndex((f) => f.name === file.name)
      );

      return uniqueFiles;
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const removeFile = (file: FileWithPreview) => () => {
    const newFiles = myFiles.filter((f) => f !== file);
    setMyFiles(newFiles);
  };

  const files = myFiles.map((file) => (
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
  const cameraIcons = Array.from(
    { length: remainingCameraIcons },
    (_, index) => (
      <li key={`camera-${index}`}>
        <AiOutlineCamera className="w-32 h-[72px] text-slate-300" />
      </li>
    )
  );

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
