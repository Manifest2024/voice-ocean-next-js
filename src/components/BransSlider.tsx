"use client";
import { Client } from "@/types";
import { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";

import { fetchAllClients } from "@/services/home";

const BransSlider = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    fetchAllClients()
      .then((data) => {
        console.log(data.length);
        setClients(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const logoSliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    customPaging: function() {
      return (
        <div className="w-[10px] h-[10px] rounded-full bg-gray-600 bg-opacity-30 active-dot"></div>
      );
    },
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: clients.length > 7 ? 5 : clients.length / 2,
          slidesToScroll: clients.length > 7 ? 3 : clients.length / 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // const brandImages = [
  //   "https://voiceoceanllp.com/img/Client%20List/B%20Lingo%20Communications.png",
  //   "https://voiceoceanllp.com/img/Client%20List/BTI%20Studios.jpg",
  //   "https://voiceoceanllp.com/img/Client%20List/chocolate-moose-logo.jpg",

  //   "https://voiceoceanllp.com/img/Client%20List/Lionbridge%20Technologies.png",
  //   "https://voiceoceanllp.com/img/Client%20List/eg+%20worldwide.jpg",
  //   "https://voiceoceanllp.com/img/Client%20List/Hexaware.png",
  //   "https://voiceoceanllp.com/img/Client%20List/Lionbridge%20Technologies.png",
  //   "https://voiceoceanllp.com/img/Client%20List/MBC%20FZ%20LLC.jpg",
  //   "https://voiceoceanllp.com/img/Client%20List/MHD%20Productions%20Limited.png",
  //   "https://voiceoceanllp.com/img/Client%20List/TransPerfect.png",
  //   "https://voiceoceanllp.com/img/Client%20List/Voice%20to%20Me.png",

  //   "https://voiceoceanllp.com/img/Client%20List/Lionbridge%20Technologies.png",
  // ];

  return (
    <Slider {...logoSliderSettings}>
      {clients.map((brand, i) => {
        return (
          <div key={i} className="mb-5 w-screen ">
            <img
              loading="lazy"
              src={brand.client_logo}
              className="mx-auto max-w-[200px]"
            />
          </div>
        );
      })}
    </Slider>
    // </div>
  );
};

export default BransSlider;
