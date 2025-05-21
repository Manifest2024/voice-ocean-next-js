const ElearningTabContent = () => {
  return (
    <div className="w-full bg-white p-[15px] border-2 border-cardbg border-t-0 lg:flex gap-5">
      <img
        loading="lazy"
        src="https://voiceoceanllp.com/img/Voice%20Ocean%20e-Learning.jpg"
        className="h-[300px] w-[300px]"
      />
      <div>
        <p className="lg:text-4xl mt-3 lg:mt-0 mb-5 text-2xl">eLearning</p>
        <p className="text-grayTxt text-base lg:text-lg text-justify">
          Need a perfect narrator for effectively conveying the goals and
          objectives of your elearning module?
        </p>
        <p className="text-grayTxt text-base lg:text-lg text-justify mt-4">
          Look no further. Since all voices may not be suitable for elearning
          projects, we have developed a team of high quality voice actors who
          specialize in elearning voice delivery. Our elearning voice talents
          have, over the years, developed those buttery smooth narrations to
          hold the attention of the target audience for long periods. No project
          is beyond us; be it with industry specific technical terms or with any
          other kind of sophisticated terminology.
        </p>
        <p className="text-grayTxt text-base lg:text-lg text-justify mt-4">
          For elearning narration we have voices that will engage audience
          throughout the course. Our natural sounding, smooth and conversational
          yet consistent voices make elearning a memorable experience for
          learners as they bring the ideas and goals out of the module.
        </p>
      </div>
    </div>
  );
};

export default ElearningTabContent;
