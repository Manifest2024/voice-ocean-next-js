import BransSlider from "@/components/BransSlider";
import LanguagesList from "@/components/LanguagesList";
import ServicesLinks from "@/components/ServicesLinks";
// import { useTopScroll } from "@/hooks/useTopScroll";

const IvrService = () => {
  // useTopScroll();
  return (
    <div className="w-screen">
      <div className="bg-company-overview h-[350px] flex justify-center items-center">
        <div className="mt-24 lg:mt-10 flex items-center flex-col ">
          <div className="flex justify-between gap-5">
            <p className="text-xs lg:text-base text-primary">HOME</p>
            <p className="text-xs lg:text-base text-primary">OUR SERVICE</p>
            <p className="text-xs lg:text-base text-primary">IVR VOICE OVER</p>
          </div>
          <p className="text-[32px] text-white pb-5 border-b-4 border-primary text-center w-min min-w-[250px]">
            IVR Voice Over
          </p>
        </div>
      </div>
      <div className="w-full flex items-center flex-col">
        <div className="w-full max-w-[1140px] mt-5">
          <p className="text-3xl lg:text-4xl text-center">
            Our Services{" "}
            <span className="bg-[#F04323] px-1 text-white font-bold">
              success
            </span>
          </p>
          <hr className="w-1/2 mx-auto my-8" />
          <div className="lg:flex gap-20 p-5 lg:p-0">
            <div className="lg:w-[500px] lg:h-[500px] p-2 border">
              <img
                loading="lazy"
                src="https://voiceoceanllp.com/img/help.jpeg"
                className="w-full h-full"
              />
            </div>
            <div className="flex-1">
              <p className="text-2xl lg:text-4xl mb-4 mt-5 font-medium">
                IVR (Interactive Voice Response)
              </p>
              <hr />

              <p className="text-justify lg:text-lg text-grayTxt mt-4 left-6">
                An Interactive Voice Response (IVR) is an impersonal message
                that is heard by a caller. While it is practically impossible
                for companies to answer each and every caller with specific or
                general requirements, an IVR plays a crucial role in satisfying
                the callers’ needs and queries. At Maruti Multilingual we have a
                team of specialized voice talents who give those seemingly
                impersonal responses a personalized touch. They give the
                automated response a pleasant and friendly touch with clear
                enunciation in either formal or casual tones. Additionally, our
                team is capable of recording large text to speech (TTS) corpora
                for speech synthesis and speech recognition projects.
              </p>
              <p className="text-justify lg:text-lg text-grayTxt mt-4 left-6">
                With multiple updates in IVR jobs coming from time to time, the
                voices should be available and consistent over the years and so
                we can recommend you our select voice talents that will be
                available for your recording for years.
              </p>
            </div>
          </div>
          <hr className="w-2/3 mx-auto mt-14" />

          <ServicesLinks />
          {/* <div className="flex mt-10 justify-between mb-10">
    <div>
      <div className="h-[262px] w-[262px] border border-primary">
        <img loading="lazy" 
          className="h-full w-full"
          src="https://voiceoceanllp.com/img/Voice%20Ocean%20e-Learning.jpg"
        />
      </div>
      <p className="text-center text-2xl text-primary mt-2">
        eLearning
      </p>
    </div>
  </div> */}
        </div>
        <div className="bg-primary w-screen py-[50px] flex justify-center">
          <div className="max-w-[1140px] flex flex-col  gap-10 lg:gap-0 lg:flex-row justify-around text-white w-full">
            <div className="text-center">
              <p className="text-5xl font-bold">25000+</p>
              <p className="text-lg">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">15</p>
              <p className="text-lg">Years in Business</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">352</p>
              <p className="text-lg">Cups of Coffee</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">178</p>
              <p className="text-lg">High Score</p>
            </div>
          </div>
        </div>

        <div className="w-screen flex justify-center py-10">
          <div className="max-w-[1140px] w-full home-slider mt-4 mb-10 overflow-hidden">
            <BransSlider />

            <LanguagesList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IvrService;
