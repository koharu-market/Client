'use client';

import Modal from '@/components/ui/Modal';
import SellingOption from '../ui/SellingOption';
import { ProductDetail } from '@/types/Product';
import TotalPrice from '../ui/TotalPrice';

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
      <div className=" w-full bg-white rounded-t-lg shadow-lg p-4 pb-2 absolute bottom-0 left-0 right-0">
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
      </div>
    </Modal>
  );
}
