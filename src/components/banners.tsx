"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Banner } from "@/types/banner.types";
import Image from "next/image";
import Link from "next/link";

type BannersProps = {
  banners: Banner[];
};

export default function Banners({ banners }: BannersProps) {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Pagination, Autoplay],
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        disableOnInteraction: false,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper main-banner">
      <div className="swiper-wrapper">
        {banners.map((banner) => (
          <div key={banner.URL} className="swiper-slide">
            {banner.LINK ? (
              <Link href={banner.LINK}>
                <Image fill src={banner.URL} alt={banner.BAN_SUMRY} />
              </Link>
            ) : (
              <Image fill src={banner.URL} alt={banner.BAN_SUMRY} />
            )}
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-scrollbar"></div>
    </div>
  );
}
