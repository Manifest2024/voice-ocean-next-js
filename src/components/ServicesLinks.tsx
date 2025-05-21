import Link from "next/link";

const ServicesLinks = () => {
  const linksData = [
    {
      name: "eLearning",
      link: "/learning",
      imgUrl: "https://voiceoceanllp.com/img/notification.jpeg",
    },
    {
      name: "IVR",
      link: "/ivr",
      imgUrl: "https://voiceoceanllp.com/img/help.jpeg",
    },
    {
      name: "Videos",
      link: "/video-voice-over",
      imgUrl:
        "https://voiceoceanllp.com/img/Voice%20Ocean%20Internet%20Videos.jpg",
    },
    {
      name: "Commercials",
      link: "/commercial-voice-over",
      imgUrl: "https://voiceoceanllp.com/img/media.jpeg",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row mt-10 justify-between mb-10 items-center gap-10">
      {linksData.map((service) => {
        return (
          <Link
            key={service.name}
            href={service.link}
            // navigate(service.link);
            // window.scrollTo({
            //   top: 0,
            //   left: 0,
            //   behavior: "smooth",
            // });
          >
            <div className="h-[262px] w-[262px] border-[0.2px] border-primary">
              <img
                loading="lazy"
                className="h-full w-full"
                src={service.imgUrl}
              />
            </div>
            <p className="text-center text-2xl text-primary mt-2">
              {service.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ServicesLinks;
