'use client';

import { responsive } from '@/data/responsive';
import { useCallback, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showConfirmModal?: () => void;
  onRequestClose?: boolean;
  showHeader?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  showConfirmModal,
  onRequestClose = true,
  showHeader = false,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery({ maxWidth: responsive.tablet });

  const closeModal = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && onRequestClose) {
        if (!modalRef.current.contains(event.target as Node)) {
          onClose();
        }
      }
    },
    [onClose, onRequestClose],
  );

  useEffect(() => {
    if (!isTablet) {
      onClose();
    }
  }, [isTablet, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      // 컴포넌트가 언마운트되면 body 스타일 원복
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', closeModal);
    } else {
      document.removeEventListener('mousedown', closeModal);
    }

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [isOpen, closeModal]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 w-full h-full overflow-hidden flex items-center justify-center z-50 bg-[rgba(0,0,0,0.5)]">
          <div ref={modalRef} className="relative">
            {showHeader && (
              <button className="absolute right-[10px] top-[10px] text-3xl" onClick={showConfirmModal}>
                <AiOutlineClose />
              </button>
            )}
            {children}
          </div>
        </div>
      )}
    </>
  );
}

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  handleCancel: () => void;
}

export function ConfirmModal({ isOpen, onClose, handleCancel, children }: ConfirmModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current) {
        if (!modalRef.current.contains(event.target as Node)) {
          handleCancel();
        }
      }
    },
    [handleCancel],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', closeModal);
    } else {
      document.removeEventListener('mousedown', closeModal);
    }

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [isOpen, closeModal]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 w-full h-full overflow-hidden flex items-center justify-center z-[60] bg-[rgba(0,0,0,0.5)]">
          <div ref={modalRef} className="w-80 bg-white rounded-md p-10 text-center">
            {children}
            <div className="flex justify-between mt-6 gap-3">
              <Button size="full" onClick={handleCancel}>
                취소
              </Button>
              <Button size="full" color="blue" onClick={onClose}>
                나가기
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
