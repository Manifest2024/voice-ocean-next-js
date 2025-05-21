import BransSlider from "@/components/BransSlider";
import LanguagesList from "@/components/LanguagesList";
import { FC, ReactNode } from "react";

interface PersonDetailsCardProps {
  img: string;
  name: string;
  children: ReactNode;
}
const PersonDetailsCard: FC<PersonDetailsCardProps> = ({
  img,
  children,
  name,
}) => {
  return (
    <div className="flex gap-5 mt-5 flex-col lg:flex-row">
      <div className="border p-2 h-min">
        <img
          loading="lazy"
          className="h-[280px] w-full lg:w-[360px]"
          src={img}
        />
      </div>
      <div className="flex-1">
        <p className="text-2xl lg:text-4xl">{name}</p>
        <hr className="mt-2 lg:mt-5 mb-5" />
        {children}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="w-screen overflow-hidden">
      <div className="bg-company-overview h-[350px] flex justify-center items-center">
        <div className="mt-24 lg:mt-10">
          <div className="flex justify-between gap-5">
            <p className="text-base text-primary">HOME</p>
            <p className="text-base text-primary">ABOUT US</p>
          </div>
          <p className="text-[32px] text-white pb-5 border-b-4 border-primary text-center">
            About Us
          </p>
        </div>
      </div>
      <div className="w-full flex items-center flex-col">
        <div className="w-full max-w-[1140px] mt-5 p-5 lg:p-0">
          <p className="text-2xl lg:text-4xl text-center">
            About the Compaany{" "}
            <span className="bg-[#F04323] px-1 text-white font-bold">
              success
            </span>
          </p>
          <p className="text-center lg:text-lg text-grayTxt mt-4">
            Voice Ocean LLP was formerly known as Maruti Multilingual which was
            established in 2009 and was mainly catering to multilingual
            translation requirements. Soon after the company was formed, we have
            had an opportunity to work on a long-term large elearning project of
            a global oil company for providing translations and voice over in
            multiple languages. This project actually introduced us to voice
            over. One of our partners who is a sound engineer was already doing
            small voice over projects in Indian languages. This new project
            required voice over in several Asian & European languages and so we
            had to expand our portfolio to cover this new avenue which has come
            of age and is a billion dollar industry now. Over the years, we kept
            on growing our network of voice talents, voice artists and actors
            and recording studios around the world.
          </p>
          <p className=" lg:text-lg text-grayTxt mt-4 text-center">
            Today, after a decade of existence, we have gained a very robust
            experience in voice over service and we have grown our network to
            cover over 170 dialects and accents in about 150 countries having
            3,500 plus voice talents on roster and collaboration with about 130
            studios around the globe. We are number one voice over agency in
            terms of having large number of resources in languages like Hindi
            and other Indian languages, Urdu, Bangla, Sinhalese, Nepali,
            Burmese, Thai, Bahasa, Malay, Tagalog, Khmer, Lao, Vietnamese,
            Mongolian, Albanian, Armenian, Georgian, Azeri, Kazakh, Tajik,
            Turkmen, Kyrgyz (Kirgiz), Uzbek, Arabic from various countries,
            Dari, Pashto, Hazaragi, Kurdish Sorani, Kurdish Kurmanji, Farsi,
            Amharic, Oromo, Tigrinya, Swahili, Somali, Hausa, Yoruba, Zulu and
            others.
          </p>
          <hr className="w-1/2 mx-auto mt-5" />
          <div className="mt-10">
            <PersonDetailsCard
              img="https://voiceoceanllp.com/img/team/maruti-shinde.jpg"
              name="Maruti Shinde"
            >
              <p className="lg:text-lg text-grayTxt">
                Maruti Shinde, a trained language expert with years of
                experience in translation and localization, embarked on a new
                journey of creating a hub to provide various linguistic services
                for diverse requirements. After a distinguished career as a
                Language Lead with US based Lionbridge Technologies, he
                established Maruti Multilingual in Pune, India in 2009. Today,
                after a decade of existence, he plays a crucial role as the
                fulcrum of the company with an extremely experienced and
                committed team of professionals.
              </p>
              <p className="lg:text-lg text-grayTxt mt-4">
                Maruti plays multiple roles in this organization. With hands-on
                experience of working with international teams, being a Proz
                certified translator, and expertise in talent sourcing and
                acquisition, he strives to utilize these skill sets in enriching
                production.
              </p>
              <p className="lg:text-lg text-grayTxt mt-4">
                Every script that comes to his desk is thoroughly checked.
                Client instructions are well understood and sometimes redrafted
                for the translator or the voice talent to understand easily. At
                times, script formatting is made in such a way that it is not
                well comfortable for the talent to read smoothly without a
                hitch. In this case format is changed and redundant parts are
                removed. He always tries to anticipate issues the translator or
                the voice artist is going to have and so he removes those
                bottlenecks before sending them the material. This process
                facilitates on time delivery and considerably reduces chances
                for post delivery corrections and revisions.
              </p>
            </PersonDetailsCard>
            <PersonDetailsCard
              img="https://voiceoceanllp.com/img/team/chintamansingh-rajput.jpg"
              name="Chintamansingh Rajput"
            >
              <p className="lg:text-lg text-grayTxt">
                Chintamansingh Rajput is engaged closely with clients to create
                innovative, effective training film, translation (localization)
                & voice-over projects.
              </p>
              <p className="lg:text-lg text-grayTxt mt-4">
                Good at various media tools and technologies, with credentials
                of managing regional & international translation (localization)
                & voice-over projects effectively for past 10 years.
              </p>
              <p className="lg:text-lg text-grayTxt mt-4">
                Placed up-to-date with constantly evolving technologies in audio
                video, translation, voice-over, animation & HTML 5 video
                support.
              </p>
            </PersonDetailsCard>
            <PersonDetailsCard
              img="https://voiceoceanllp.com/img/team/mahesh-govali.jpg"
              name="Chintamansingh Rajput"
            >
              <p className="lg:text-lg text-grayTxt">
                Mahesh has a vast experience in sound engineering. Has worked on
                location sound for a number of television serials, and also
                worked as a mixing engineer for various albums and regional
                films.
              </p>
              <p className="lg:text-lg text-grayTxt mt-4">
                For the last 8 years he has been in charge of voice over
                projects. He plays a major role in defining the quality of voice
                over projects executed in this organization. He also takes care
                of completing bulk voice over projects in minimum turn-around
                time and at optimum quality standards.
              </p>
            </PersonDetailsCard>
            <PersonDetailsCard
              img="https://voiceoceanllp.com/img/team/ShankarSutar.jpg"
              name="Chintamansingh Rajput"
            >
              <p className="lg:text-lg text-grayTxt">
                Shankar is working with us since 2013 as a Project Manager on
                voice over projects and has a vast experience of handling
                multilingual voice over for international clients successfully.
                Shankar knows all the processes that are executed during the
                course of voice over and is well aware of the problem areas and
                has great expertise for solving different issues as he has
                knowledge of sound editing and developed an ear for languages
                over the years.
              </p>
            </PersonDetailsCard>
          </div>
          <hr className="w-1/2 mx-auto mt-10 mb-10" />
        </div>
        <div className="bg-primary w-screen py-[50px] flex justify-center">
          <div className="max-w-[1140px] flex justify-around text-white w-full flex-col lg:flex-row gap-y-5">
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
          <div className="max-w-[1140px] w-full home-slider mt-4 mb-10">
            <BransSlider />

            <LanguagesList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
