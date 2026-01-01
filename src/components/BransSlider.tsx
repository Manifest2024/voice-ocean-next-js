"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Client } from "@/types";
import { fetchAllClients } from "@/services/home";

 
const BransSlider = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const loadClients = async () => {
      try {
        const data = await fetchAllClients();
        setClients(data);
      } catch (error) {
        console.error("Failed to fetch clients:", error);
      }
    };
    loadClients();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <Slider {...settings}>
        {clients.map((brand, index) => (
          <div key={index} className="flex justify-center items-center p-2">
            <img
              src={brand.client_logo}
              alt={`Client ${index}`}
              className="max-h-[100px] max-w-[150px] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BransSlider;
