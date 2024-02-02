'use client';

import Modal from '@/components/common/Modal';
import SellingOption from '../common/SellingOption';
import { ProductDetail } from '@/types/Product';
import TotalPrice from '../common/TotalPrice';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  product: ProductDetail;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function MobilePurchaseInfo({ isOpen, closeModal, product, count, setCount }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div>
        <SellingOption name={product.name} sale={product.sale} count={count} setCount={setCount} />
      </div>
      <div className="mt-6">
        <TotalPrice sale={product.sale} count={count} />
      </div>
      <div className="mt-4">
        <div className="flex justify-between gap-2">
          <button className="flex-1 bg-gray-200 py-4 rounded-md text-gray-900 font-semibold">장바구니</button>
          <button className="flex-1 bg-gray-900 py-4 rounded-md text-white font-semibold">바로구매</button>
        </div>
      </div>
    </Modal>
  );
}
