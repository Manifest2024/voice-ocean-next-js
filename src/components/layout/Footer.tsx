import { FaFacebookF, FaLinkedinIn, FaSkype, FaTwitter } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const labelTitle = (title: string) => (
    <span className="text-3xl text-white font-medium">{title}</span>
  );
  return (
    <div className="w-screen lg:flex flex-col items-center bg-[#1A1C2B] pt-10">
      <div className="w-full max-w-[1170px] lg:flex gap-5">
        {/* FIRST DIV */}
        <div className="flex-1 mr-5 text-white p-5 lg:p-0">
          <p className="text-2xl text-white font-medium">
            {labelTitle("Our Mission")}
          </p>
          <p className="text-justify mt-2 text-base">
            We strive to offer people and communities seamless language support
            in order that no ideas and thoughts should remain unexpressed due to
            language barriers.
          </p>
          <p className="mt-5">{labelTitle("Contact Us")}</p>
          <p className="flex gap-2 items-center mt-2">
            <span>
              <IoCall size={18} />
            </span>
            +91 9850 638 414
          </p>

          <p className="flex gap-2 items-center mt-6">
            <span>
              <FaSkype size={18} />
            </span>
            transrus21
          </p>
          <p className="flex gap-2 items-center mt-6">
            <span>
              <MdEmail size={18} />
            </span>
            projects@voiceoceanllp.com
          </p>
        </div>
        {/* SECOND DIV */}
        <div className="w-[263px] p-5 lg:p-0">
          {labelTitle("Latest Tweets")}
          <div className="w-full h-[400px] bg-white mt-3 rounded-lg "></div>
        </div>
        {/* THIRD DIV */}
        <div className="w-[263px] p-5 lg:p-0">
          {labelTitle("Facebook Post")}
          <div className="w-full h-[400px] bg-white mt-3 rounded-lg "></div>
        </div>
        {/* FOURTH DIV */}
        <div className="flex-1 ml-5">
          <p className="text-2xl text-white font-medium">Uniqueness</p>
          <ul className="list-disc text-white pl-4 mt-3">
            <li className="text-base">Leading global voice over agency</li>
            <li className="text-base">100+ languages & 2,000+ voices</li>
            <li className="text-base">Proactive human touch</li>
            <li className="text-base">Customized techniques</li>
            <li className="text-base">Ability to manage rare resources</li>
            <li className="text-base">Delivery within hours</li>
            <li className="text-base">Very reasonable prices</li>
            <li className="text-base">
              Responsible, committed, dedicated and trustworthy
            </li>
          </ul>
        </div>
      </div>
      <div className="w-screen bg-[#10121B] py-7 lg:flex justify-center mt-20 p-5 ">
        <div className="w-full max-w-[1170px] lg:flex justify-between text-white">
          <p className="text-sm lg:text-base flex-1">
            © Copyright 2024. All Rights Reserved.
          </p>
          <div className="flex gap-1 justify-center mx-auto flex-1 mt-4 lg:mt-0">
            <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white">
              <FaFacebookF className="text-green-950" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white">
              <FaTwitter className="text-green-950" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white">
              <FaLinkedinIn className="text-green-950" />
            </div>
          </div>
          <p className="text-right flex-1 mt-4 lg:mt-0 text-sm lg:text-base">
            Designed with ❤️ by Manifest Solution
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
