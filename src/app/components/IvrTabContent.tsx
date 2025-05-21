const IvrTabContent = () => {
  return (
    <div className="w-full bg-white p-[15px] border-2 border-cardbg border-t-0 lg:flex gap-5">
      <img
        loading="lazy"
        src="https://voiceoceanllp.com/img/Voice%20Ocean%20IVR.jpg"
        className="h-[300px] w-[300px]"
      />
      <div>
        <p className="text-2xl mt-3 lg:mt-0 lg:text-4xl mb-5">
          IVR (Interactive Voice Response)
        </p>
        <p className="text-grayTxt lg:text-lg text-justify">
          An Interactive Voice Response (IVR) is an impersonal message that is
          heard by a caller. While it is practically impossible for companies to
          answer each and every caller with specific or general requirements, an
          IVR plays a crucial role in satisfying the callers’ needs and queries.
          At Voice Ocean we have a team of specialized voice talents who give
          those seemingly impersonal responses a personalized touch. They give
          the automated response a pleasant and friendly touch with clear
          enunciation in either formal or casual tones. Additionally, our team
          is capable of recording large text to speech (TTS) corpora for speech
          synthesis and speech recognition projects.
        </p>
        <p className="text-grayTxt lg:text-lg text-justify mt-4">
          With multiple updates in IVR jobs coming from time to time, the voices
          should be available and consistent over the years and so we can
          recommend you our select voice talents that will be available for your
          recording for years.
        </p>
      </div>
    </div>
  );
};

export default IvrTabContent;
