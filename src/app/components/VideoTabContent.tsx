const VideoTabContent = () => {
  return (
    <div className="w-full bg-white p-[15px] border-2 border-cardbg border-t-0 lg:flex gap-5">
      <img
        loading="lazy"
        src="https://voiceoceanllp.com/img/Voice%20Ocean%20Internet%20Videos.jpg"
        className="h-[300px] w-[300px]"
      />
      <div>
        <p className="text-2xl mt-3 lg:mt-0 lg:text-4xl mb-5">Videos</p>
        <p className="text-grayTxt lg:text-lg text-justify">
          For an explainer video with great visuals and vivid animations and a
          perfect script, equally important is the voice for the narration
          because each video has its particular mood and character or a
          personality in that sense. Only professional voice actors can perceive
          that personality and bring it to life by lending right tone, pace and
          emotions of happiness, sorrow, solemnity or excitement as required and
          have right impact on viewers to take the desired actions.
        </p>
        <p className="text-grayTxt lg:text-lg text-justify mt-4">
          When it comes to recording lip-sync or phrase-sync, never think of
          using amateur voice talents who are ready to work in half the budget
          of that of an experienced professional voice talent. It will always
          make your job difficult ultimately making you spend more on money and
          time.
        </p>
        <p className="text-grayTxt lg:text-lg text-justify mt-4">
          For elearning narration we have voices that will engage audience
          throughout the course. Our natural sounding, smooth and conversational
          yet consistent voices make elearning a memorable experience for
          learners as they bring the ideas and goals out of the module.
        </p>
      </div>
    </div>
  );
};

export default VideoTabContent;
