'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, FreeMode, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import SwiperCore from 'swiper';

import './swiper.css';
interface Props {
  images: string[];
  name: string;
}

export default function ProductImage({ images, name }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <div>
      <Swiper
        className="relative"
        loop={images.length > 1 ? true : false}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{
          type: 'fraction',
          enabled: true,
        }}
        modules={[Pagination, Keyboard, FreeMode, Thumbs]}
        keyboard={true}
      >
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
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper mt-3"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative !pt-[14%]">
            <div
              style={{ backgroundImage: `url(${img})` }}
              className="w-full h-full absolute top-0 bg-no-repeat bg-center bg-cover"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
