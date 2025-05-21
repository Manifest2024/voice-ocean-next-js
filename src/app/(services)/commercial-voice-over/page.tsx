import BransSlider from "@/components/BransSlider";
import LanguagesList from "@/components/LanguagesList";
import ServicesLinks from "@/components/ServicesLinks";

const CommercialsService = () => {
  return (
    <div className="w-screen">
      <div className="bg-company-overview h-[350px] flex justify-center items-center">
        <div className="mt-24 lg:mt-10 flex items-center flex-col ">
          <div className="flex justify-between gap-5">
            <p className="text-xs lg:text-base text-primary">HOME</p>
            <p className="text-xs lg:text-base text-primary">OUR SERVICE</p>
            <p className="text-xs lg:text-base text-primary">COMMERCIALS</p>
          </div>
          <p className="text-[32px] text-white pb-5 border-b-4 border-primary text-center w-min">
            Commercials
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
          <hr className="w-1/2 mx-auto mt-4 lg:my-8 hidden lg:block" />
          <div className="lg:flex gap-20 p-5 lg:p-0 mt-5 lg:mt-0">
            <div className="lg:w-[500px] lg:h-[500px] p-2 border">
              <img
                loading="lazy"
                src="https://voiceoceanllp.com/img/media.jpeg"
                className="w-full h-full"
              />
            </div>
            <div className="flex-1">
              <p className="text-2xl lg:text-4xl mb-4 mt-5 font-medium">
                Video Voice Over
              </p>
              <hr />

              <p className="text-justify lg:text-lg text-grayTxt mt-4 left-6">
                For an explainer video with great visuals and vivid animations
                and a perfect script, equally important is the voice for the
                narration because each video has its particular mood and
                character or a personality in that sense. Only professional
                voice actors can perceive that personality and bring it to life
                by lending right tone, pace and emotions of happiness, sorrow,
                solemnity or excitement as required and have right impact on
                viewers to take the desired actions.
              </p>
              <p className="text-justify lg:text-lg text-grayTxt mt-4 left-6">
                When it comes to recording lip-sync or phrase-sync, never think
                of using amateur voice talents who are ready to work in half the
                budget of that of an experienced professional voice talent. It
                will always make your job difficult ultimately making you spend
                more on money and time.
              </p>
              <p className="text-justify lg:text-lg text-grayTxt mt-4 left-6">
                Voice over for videos requires much attention to detail right
                from the adaption of the script to the video. Successful
                performance depends on the script being translated well so that
                it matches the duration of the source audio. This can be a
                challenging task in some languages like Arabic, Japanese, Malay,
                Thai, Khmer among other languages which tend to be lengthy when
                translated from English.
              </p>
            </div>
          </div>
          <hr className="w-1/2 mx-auto mt-14" />

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
          <div className="max-w-[1140px] flex flex-col lg:flex-row gap-10 lg:gap-0 justify-around text-white w-full">
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

export default CommercialsService;
