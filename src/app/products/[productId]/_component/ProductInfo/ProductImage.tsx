import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination } from 'swiper/modules';
import './swiper.css';

interface Props {
  images: string[];
  name: string;
}

export default function ProductImage({ images, name }: Props) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<div style="background-image: url(${images[index]})" class="${className} pt-[15%] w-[15%] opacity-60 cursor-pointer bg-no-repeat bg-center bg-cover"></div>`;
    },
  };
  return (
    <div>
      <Swiper loop={true} slidesPerView={1} pagination={pagination} modules={[Pagination, Keyboard]} keyboard={true}>
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative w-full pt-[103%]">
            <Image
              fill
              priority
              sizes="(max-width: 480px) 480px, 600px"
              src={img}
              alt={`${name} 상품 이미지`}
              style={{ objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
