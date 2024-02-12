'use client';

import Modal from '@/components/common/Modal';
import { useState } from 'react';
import StarRating from '../../ui/StarRating';
import { Button } from '@/components/common/Button';
import { axiosInstance } from '@/lib/axios';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  productId: number;
}

export default function CreateReview({ isOpen, closeModal, productId }: Props) {
  const [score, setScore] = useState(0);
  const [content, setContent] = useState('');

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = async () => {
    if (score === 0) return alert('만족도를 선택해주세요.');
    if (content.trim().length <= 10) return alert('내용을 적어주세요!!');
    const response = await axiosInstance.post('/review', {
      content,
      score,
      productId,
    });
    if (response.status === 201) {
      setScore(0);
      setContent('');
      closeModal();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} onRequestClose={false}>
      <div className=" bg-white w-[760px] mx-auto p-10 rounded-md">
        <h2 className="product-h2 text-center mb-5">리뷰 쓰기</h2>
        <div className="mb-5">
          <div className="font-semibold mb-2">별점 평가</div>
          <div className="flex gap-4 items-center">
            <div>만족도</div>
            <StarRating onSetScore={setScore} defaultScore={score} />
          </div>
        </div>
        <div className="mb-5">
          <div className="font-semibold mb-2">사진 첨부 (선택)</div>
        </div>
        <div className="mb-10">
          <div className="font-semibold mb-2">리뷰 작성</div>
          <div className="relative">
            <textarea
              className="w-full p-2 pb-5 border-[#dbdbdb] border rounded-md h-28 resize-none"
              placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다. (최소 10자 이상)"
              value={content}
              onChange={onChangeContent}
            />
            <div className="absolute right-2 bottom-2 text-sm">{content.length}</div>
          </div>
        </div>
        <Button onClick={onSubmit} size="full" color="blue">
          완료
        </Button>
      </div>
    </Modal>
  );
}
