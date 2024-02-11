'use client';

import { responsive } from '@/data/responsive';
import { useCallback, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: 'top' | 'center' | 'bottom';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, position = 'center' }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery({ maxWidth: responsive.tablet });

  const closeModal = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current) {
        if (!modalRef.current.contains(event.target as Node)) {
          onClose();
        }
      }
    },
    [onClose],
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
          <div
            ref={modalRef}
            className={`absolute ${position === 'bottom' ? 'bottom-0' : ''} ${
              position === 'top' ? 'top-0' : ''
            } left-0 right-0`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
