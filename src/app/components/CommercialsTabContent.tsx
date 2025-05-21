"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const CommercialsTabContent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="w-full bg-white p-[15px] border-2 border-cardbg border-t-0 lg:flex gap-5">
      <Image
        loading="lazy"
        src="https://voiceoceanllp.com/img/Voice%20Ocean%20Commercials%20&%20Spots.jpg"
        className="h-[300px] w-[300px]"
        alt="Voice Ocean Commercial Voice Over"
        width={300}
        height={300}
      />
      <div>
        <p className="text-2xl mt-3 lg:mt-0 lg:text-4xl mb-5">Commercials</p>
        <p className="text-grayTxt lg:text-lg text-justify">
          Commercial voice over actors must have broadcast experience for
          voicing commercials for TV, radio and internet. They have to be good
          both at narration and character voicing. Our catchy ‘sales pitch’
          voices can help you selling your brands and products more effectively.
          Based on your brief, we can cast and audition announcers, narrators or
          characters who will fit your requirement precisely. Making a long
          lasting impact on audience out of that 30, 60 seconds is the task of
          only those voice actors who are prepared for and know their job well.
        </p>
        <p className="text-grayTxt lg:text-lg text-justify mt-4">
          We can allow you to direct the voice actors through remote monitoring
          tools like ISDN, Skype or WhatsApp messengers so that you get the
          right delivery you wish. So use our voices and drive your brands.
        </p>
      </div>
    </div>
  );
};

export default CommercialsTabContent;
