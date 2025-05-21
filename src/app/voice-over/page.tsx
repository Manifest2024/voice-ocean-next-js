import BransSlider from "@/components/BransSlider";
import LanguagesList from "@/components/LanguagesList";

const page = () => {
  return (
    <div className="w-screen overflow-hidden lg:overflow-scroll">
      <div className="bg-company-overview h-[350px] flex justify-center items-center">
        <div className="mt-24 lg:mt-10">
          <div className="flex justify-between gap-5">
            <p className="text-base text-primary">HOME</p>
            <p className="text-base text-primary">VOICE OVER</p>
          </div>
          <p className="text-[32px] text-white pb-5 border-b-4 border-primary text-center">
            Voice Over
          </p>
        </div>
      </div>
      <div className="w-full flex items-center flex-col">
        <div className="p-5 lg:p-0 w-full max-w-[1140px] mt-5 mb-10">
          <p className="text-2xl lg:text-4xl text-center">
            Voice Over{" "}
            <span className="bg-[#F04323] px-1 text-white font-bold">
              success
            </span>
          </p>
          <p className="text-justify text-base lg:text-lg text-grayTxt mt-4">
            Voice over is not just about recording a script with a voice talent.
            At Voice Ocean LLP accents, dialects and linguistic diversities are
            considered as the important factors in the selection of a voice.
            Whether it is gulf Arabic, Tunisian Arabic, Modern Standard Arabic
            or Khaliji accent Arabic; White Hmong or Green Hmong; Outer or Inner
            Mongolian; North Vietnamese or South Vietnamese, Gheg Albanian or
            Tosk Albanian; Dutch or Flemish; whether it is Kenyan Swahili,
            Tanzanian Swahili or Congolese Swahili, geography plays an important
            role in shaping up voice nuances. Hence, it’s very crucial that the
            voices you are using represent the right audience you plan to
            target. We certainly have our role to play here. As you scroll down
            our roster or voice talents, you will see a broad range of voices
            categorized based on various accents and linguistic diversities. We
            have painstakingly created a comprehensive bank of voice over actors
            and talents ranging from announcers, storytellers and narrators to
            character voices that are capable of delivering high quality
            recordings that can be understood and appreciated by the target
            audience quite easily.
          </p>
          <p className=" lg:text-lg text-grayTxt mt-4 text-justify">
            We specialize in professional voice overs in South Asian, Southeast
            Asian, Central Asian, Middle East, East, West & South African
            languages. This includes some of the hard languages such as Hindi,
            Bangla, Sinhala, Burmese, Nepali, Thai, Bahasa, Malay, Tagalog, Lao,
            Khmer, Vietnamese, Dzongkha, Cantonese, Taiwanese, Mongolian, S’gaw
            Karen, Tok Pisin, Dari, Pashto, Hazaragi, Kurdish Sorani & Kurmanji,
            Albanian, Armenian, Azeri, Kazakh, Georgian, Uzbek, Tajik, Turkmen,
            Tatar, Afrikaans, African French, Chichewa, Amharic, Oromo, Somali,
            Tigrinya, Lingala, Zulu and many more.
          </p>
        </div>
        <div className="bg-primary w-screen py-[50px] flex justify-center overflow-x-hidden">
          <div className="max-w-[1140px] flex-col gap-5 lg:flex-row flex justify-around text-white w-full">
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

        <div className="w-screen flex justify-center py-10 overflow-hidden">
          <div className="max-w-[1140px] w-full home-slider mt-4 mb-10 ">
            <BransSlider />

            <LanguagesList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
