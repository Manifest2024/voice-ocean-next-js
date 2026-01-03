"use client";

import { cn } from "@/lib/utils";
import { FC, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaMicrophone, FaGraduationCap, FaEye } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { MdLeaderboard } from "react-icons/md";
import VoicesTabContent from "./components//VoicesTabContent";
import Slider, { Settings } from "react-slick";
// import Vimeo from "@u-wave/react-vimeo";

import ElearningTabContent from "./components/ElearningTabContent";
import IvrTabContent from "./components//IvrTabContent";
import VideoTabContent from "./components/VideoTabContent";
import CommercialsTabContent from "./components/CommercialsTabContent";
import LanguagesList from "@/components/LanguagesList";
import BransSlider from "@/components/BransSlider";
import UserCard from "@/components/cards/UserCard";
import { Actor, Project, Testimonial } from "@/types";
import {
  fetchArtists,
  fetchCurrentProjects,
  fetchTestimonials,
} from "@/services/home";
import { AxiosError } from "axios";
import Link from "next/link";

type HomeTabProps = {
  Icon: IconType;
  title: string;
  activeIndex: number;
  currentIndex: number;
  activeHandler: (index: number) => void;
};

const HomeTab: FC<HomeTabProps> = ({
  Icon,
  title,
  activeIndex,
  activeHandler,
  currentIndex,
}) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center h-24 md:h-[44px] text-sm bg-cardbg flex-1 gap-1 border-t-[3px] border-b-2 border-b-gray-200 cursor-pointer ",
        activeIndex === currentIndex
          ? " border-t-primary bg-white border-b-transparent"
          : ""
      )}
      onClick={() => {
        activeHandler(currentIndex);
      }}
    >
      <Icon className="text-primary" />
      <p className="text-primary font-semibold leading-10 md:leading-normal">
        {title}
      </p>
    </div>
  );
};

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentProjects, setCurrentProjects] = useState<Project[]>([]);
  const [actors, setActors] = useState<Actor[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const reqController = new AbortController();
    fetchCurrentProjects({ signal: reqController.signal })
      .then((data) => {
        setCurrentProjects(data);
        console.log(data);
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
      });

    const artistController = new AbortController();
    fetchArtists({}, { signal: artistController.signal })
      .then((data) => {
        setActors(data);
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
      });

    fetchTestimonials()
      .then((data) => {
        setTestimonials(data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      reqController.abort();
      artistController.abort();
    };
  }, []);

  const tabData = [
    {
      title: "Voices",
      index: 0,
      icon: FaMicrophone,
      child: <VoicesTabContent key={0} />,
    },
    {
      title: "eLearning",
      index: 1,
      icon: FaGraduationCap,
      child: <ElearningTabContent key={1} />,
    },
    {
      title: "IVR",
      index: 2,
      icon: FaEye,
      child: <IvrTabContent key={2} />,
    },
    {
      title: "Video",
      index: 3,
      icon: IoVideocam,
      child: <VideoTabContent key={3} />,
    },
    {
      title: "Commercials",
      index: 4,
      icon: MdLeaderboard,
      child: <CommercialsTabContent key={4} />,
    },
  ];
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    customPaging: function () {
      return (
        <div className="w-[10px] h-[10px] rounded-full bg-gray-600 bg-opacity-30 active-dot"></div>
      );
    },
  };
  const userSettings: Settings = {
    dots: true,
    customPaging: function () {
      return (
        <div className="w-[10px] h-[10px] rounded-full bg-gray-600 bg-opacity-30 active-dot"></div>
      );
    },

    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const bannerSliderSettings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    fade: true,
  };

  if (!isMounted) {
    return null;
  }
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Hi */}
      {/* <img loading="lazy" 
            src="vite.svg"
            className="w-screen h-[500px] md:h-[650px] bg-center"
          /> */}
      <div className="w-screen">
        <Slider {...bannerSliderSettings} className="-z-10">
          <div className="w-screen h-[500px] md:h-[650px] relative">
            <video
              autoPlay
              loop
              muted
              className="w-screen h-[500px] md:h-[650px] object-cover absolute left-0 top-0 -z-10"
            >
              <source
                src="/banners/banner_1.mp4"
                type="video/mp4"
                className="w-full"
              />
            </video>
            <div className="absolute lg:w-[1170px] w-full left-5 lg:left-1/2 lg:transform lg:translate-x-[-50%] bottom-20">
              <p className="font-bold text-gray-300 lg:text-2xl tracking-wide">
                We handle 170+ Languages and Accents
              </p>

              <p className="text-gray-300 font-medium lg:text-2xl tracking-wider mt-5">
                Almost all renowned global voice over agencies use our voices.
              </p>
            </div>
          </div>
          <div className="w-screen h-[500px] md:h-[650px] relative">
            <video
              autoPlay
              loop
              muted
              className="w-screen h-[500px] md:h-[650px] object-cover absolute left-0 top-0 -z-10"
            >
              <source
                src="/banners/banner_2.mp4"
                type="video/mp4"
                className="w-full"
              />
            </video>
            <div className="absolute lg:w-[1170px] w-full left-5 lg:left-1/2 lg:transform lg:translate-x-[-50%] bottom-20">
              <p className="font-bold text-gray-300 lg:text-2xl tracking-wide">
                We handle 270+ Languages and Accents
              </p>

              <p className="text-gray-300 font-medium lg:text-2xl tracking-wider mt-5">
                Almost all renowned global voice over agencies use our voices.
              </p>
            </div>
          </div>
        </Slider>
      </div>

      <div className="">
        {/* TABS */}
        <div className="w-screen justify-center flex max-h-max p-5">
          <div className="lg:w-[1170px] ">
            <div className="flex-col md:flex-row flex -mt-[58px]">
              {tabData.map((tab) => {
                return (
                  <HomeTab
                    key={tab.index}
                    currentIndex={tab.index}
                    activeHandler={(index) => setActiveTab(index)}
                    activeIndex={activeTab}
                    Icon={tab.icon}
                    title={tab.title}
                  />
                );
              })}
            </div>
            <div className="bg-white-400">
              {tabData.map((tab) => {
                if (tab.index === activeTab) {
                  return tab.child;
                }
              })}
            </div>
          </div>
        </div>

        <div className="w-screen py-[50px] flex flex-col items-center mt-16 bg-[#f4f5ec] pb-[70px]">
          <p className="text-center text-3xl lg:text-4xl font-extrabold lg:font-bold px-1">
            15 Years of Experience in Voice Over & Translation
          </p>
          <p className="text-2xl lg:text-3xl mt-6">CURRENT PROJECTS</p>
          <div className="max-w-[1140px] w-full home-slider mt-4">
            <Slider {...settings}>
              {currentProjects.map((project, i) => {
                return (
                  <p key={i} className="text-center text-sm lg:text-lg">
                    {project.project_description}
                  </p>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="w-screen flex justify-center bg-company-overview py-14">
          <div className="w-full max-w-[1170px]  p-5 lg:p-0 text-white">
            <p className="text-center  text-2xl lg:text-4xl mb-10">
              Welcome to <span className="font-bold">Voice Ocean</span>
            </p>
            <div className="lg:flex gap-10">
              <div className="flex-[2]">
                <p className="text-lg lg:text-2xl font-bold mb-5">
                  Company Overview
                </p>
                <p className="text-sm lg:text-lg text-justify">
                  Voice Ocean LLP was formerly known as Maruti Multilingual
                  which was established in 2009 and was mainly catering to
                  multilingual translation requirements. Soon after the company
                  was formed, we have had an opportunity to work on a long-term
                  large elearning project of a global oil company for providing
                  translations and voice over in multiple languages. This
                  project actually introduced us to voice over. One of our
                  partners who is a sound engineer was already doing small voice
                  over projects in Indian languages. This new project required
                  voice over in several Asian & European languages and so we had
                  to expand our portfolio to cover this new avenue which has
                  come of age and is a billion dollar industry now. Over the
                  years, we kept on growing our network of voice talents, voice
                  artists and actors and recording studios around the world.
                </p>
                <p className="mt-5 text-justify lg:text-lg text-sm">
                  Today, after a decade of existence, we have gained a very
                  robust experience in voice over service and we have grown our
                  network to cover over 170 dialects and accents in about 150
                  countries having 3,500 plus voice talents on roster and
                  collaboration with about 130 studios around the globe. We are
                  number one voice over agency in terms of having large number
                  of resources in languages like Hindi and other Indian
                  languages, Urdu, Bangla, Sinhalese, Nepali, Burmese, Thai,
                  Bahasa, Malay, Tagalog, Khmer, Lao, Vietnamese, Mongolian,
                  Albanian, Armenian, Georgian, Azeri, Kazakh, Tajik, Turkmen,
                  Kyrgyz (Kirgiz), Uzbek, Arabic from various countries, Dari,
                  Pashto, Hazaragi, Kurdish Sorani, Kurdish Kurmanji, Farsi,
                  Amharic, Oromo, Tigrinya, Swahili, Somali, Hausa, Yoruba, Zulu
                  and others.
                </p>
              </div>
              <div className="flex-1">
                <p className="text-lg lg:text-2xl font-bold mb-5 mt-5 lg:mt-0">
                  Why Us?
                </p>
                <ul className="list-disc ml-10 text-justify lg:text-lg text-sm">
                  <li>
                    An enormous network of dubbing artists, voice actors, voice
                    talents and audio recording studios around the world
                  </li>
                  <li>
                    Team of sound engineers, recordists, translators, language
                    experts and video editors
                  </li>
                  <li>Delivery within hours in unbeatable prices</li>
                  <li>
                    Expertise and best support in South Asian, South East Asian,
                    Central Asian, Middle East and African languages
                  </li>
                  <li>Voice talent casting & custom demos free of cost</li>
                  <li>Session monitoring with remote calling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Video Testimony */}
        {/* <div className="w-screen flex justify-center py-10">
          <div className="max-w-[1170px] w-full flex justify-between">
            {new Array(3).fill("_").map((_, i) => {
              return <VideoTestimony key={i} />;
            })}
          </div>
        </div> */}
        <div className="w-screen flex justify-center py-10">
          <div className="w-full max-w-[1170px]">
            <div className="flex justify-between items-center px-5 lg:px-0">
              <p className="text-lg lg:text-2xl text-primary font-medium">
                Voice Your Commercial
              </p>
              <Link href="/voice-over-talents">
                <p className="text-primary cursor-pointer text-sm lg:text-base">
                  View All
                </p>
              </Link>
            </div>

            <div className="w-full hidden lg:grid grid-cols-4 gap-5 mt-4  pb-10">
              {actors.length ? (
                actors.length > 4 ? (
                  <Slider
                    {...userSettings}
                    className="lg:w-[1170px] w-screen px-5 lg:px-0 user-slider gap-5"
                  >
                    {actors.slice(0, 8).map((actor, i) => {
                      return <UserCard details={actor} isSlider key={i} />;
                    })}
                  </Slider>
                ) : (
                  actors.map((actor) => (
                    <UserCard details={actor} key={actor.id} />
                  ))
                )
              ) : (
                <></>
              )}
            </div>
            <div className="w-full grid grid-cols-4 gap-5 mt-4 lg:hidden pb-10">
              {actors.length ? (
                <Slider
                  {...userSettings}
                  className="lg:w-[1170px] w-screen px-5 lg:px-0 user-slider gap-5"
                >
                  {actors.slice(0, 8).map((actor, i) => {
                    return <UserCard details={actor} isSlider key={i} />;
                  })}
                </Slider>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        {/* Testimonials */}

        <div className="w-screen flex justify-center py-10 bg-[#f4f5ec]">
          <div className="w-full max-w-[1170px]">
            <p className="text-2xl lg:text-4xl text-center text-grayTxt mb-5">
              Testimonials
            </p>
            <div className="max-w-[1140px] w-full home-slider mt-4 mb-10">
              {testimonials.length > 1 ? (
                <Slider {...settings}>
                  {testimonials.map((tsm, i) => {
                    return (
                      <div key={i} className="mb-5 p-5">
                        <p
                          key={i}
                          className="text-center text-grayTxt lg:text-base"
                        >
                          {tsm.testimonial_description}
                        </p>
                        <p className="text-lg font-bold text-center mt-5">
                          {tsm.testimonial_name}
                        </p>
                        <p className=" text-grayTxt text-xs text-center">
                          {tsm.location}
                        </p>
                      </div>
                    );
                  })}
                </Slider>
              ) : testimonials.length ? (
                <div className="mb-5 p-5">
                  <p className="text-center text-grayTxt lg:text-base">
                    {testimonials[0].testimonial_description}
                  </p>
                  <p className="text-lg font-bold text-center mt-5">
                    {testimonials[0].testimonial_name}
                  </p>
                  <p className=" text-grayTxt text-xs text-center">
                    {testimonials[0].location}
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <hr />

        {/* LLP */}
        <div className="w-screen flex justify-center py-10">
          <div className="max-w-[1140px] w-full home-slider mt-4 mb-10">
            <BransSlider />

            <LanguagesList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
