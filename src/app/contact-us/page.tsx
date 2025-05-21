"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
// import { toast } from "@/hooks/use-toast";
import { callAPI } from "@/lib/api";
import { FC, useState } from "react";
import { FaSkype } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { IoMail } from "react-icons/io5";

const ContactUs: FC = () => {
  const { toast } = useToast();
  const partnerOffices = [
    {
      title: "MALAYSIA",
      address:
        "Aras 5 Kompleks Bersepadu KKMM, Off Jalan Lintas - Kepayan, 88200 Kota Kinabalu, Sabah, Malaysia",
    },
    {
      title: "MEXICO",
      address:
        "Juan de Cardenas 382, Fracc. Tangamanga San Luis Potosí, S.L.P. 78269",
    },
    {
      title: "KAZAKHSTAN",
      address: "62/91 Zhumaliyeva street, Almaty 050026, Kazakhstan",
    },
    {
      title: "JORDAN",
      address:
        "Airport Street, near Jordan Knights Academy, Salama Bin Hateb Street - Building No. 3 Amman – Jordan",
    },
    {
      title: "KENYA",
      address: "12 Mirema Drive, Roysambu 40801-00100 Nairobi, Kenya",
    },
  ];
  const [serviceType, setServiceType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const postFormHandler = () => {
    callAPI("/artist/contact/us", {
      method: "POST",
      data: {
        name,
        email,
        phone_number: phone,
        service_type: serviceType,
        subject,
        message,
      },
    }).then(() => {
      toast({
        title: "Success",
        description: "Your message has been sent successfully",

        variant: "success",
      });
    });
  };
  const showToast = () => {
    toast({
      title: "Success",
      description: "Your message has been sent successfully",
      variant: "success",
    });
  };
  return (
    <div className="w-screen">
      <div className="bg-company-overview h-[350px] flex justify-center items-center">
        <div className="mt-24 lg:mt-10">
          <div className="flex justify-center gap-5" onClick={showToast}>
            <p className="text-base text-primary">HOME</p>
            <p className="text-base text-primary">CONTACT US</p>
          </div>
          <p className="text-[32px] text-white pb-5 border-b-4 border-primary text-center">
            Contact Us
          </p>
        </div>
      </div>
      <div className="w-full p-5 flex items-center flex-col">
        <div className="w-full max-w-[1140px] mt-5 flex flex-col lg:flex-row gap-10">
          {/* FORM SECTION */}
          <div className="flex-1">
            <p className="text-4xl">
              <span className="font-bold">Contact</span> Us
            </p>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
              <div>
                <Label htmlFor="name" className="lg:text-lg text-grayTxt">
                  Your name
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" focus-visible:ring-0 mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email" className="lg:text-lg text-grayTxt">
                  Your email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" focus-visible:ring-0 mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="lg:text-lg text-grayTxt">
                  Your Phone
                </Label>
                <Input
                  type="number"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className=" focus-visible:ring-0 mt-1"
                />
              </div>
              <div>
                <Label htmlFor="" className="lg:text-lg text-grayTxt">
                  Service Type
                </Label>
                <Select
                  value={serviceType}
                  onValueChange={(e) => setServiceType(e)}
                >
                  <SelectTrigger className="w-full focus-visible:ring-0 mt-1">
                    <SelectValue placeholder="Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Service</SelectLabel>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                      <SelectItem value="any other">Any Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-full mt-5">
              <Label htmlFor="subject" className="lg:text-lg text-grayTxt">
                Subject
              </Label>
              <Input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className=" focus-visible:ring-0 mt-1"
              />
            </div>
            <div className="w-full mt-5">
              <Label htmlFor="message" className="lg:text-lg text-grayTxt">
                Your Message
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className=" focus-visible:ring-0 mt-1"
              />
            </div>
            <div className="w-full flex justify-end mt-5">
              <Button className="bg-primary" onClick={postFormHandler}>
                Send Message
              </Button>
            </div>
          </div>
          {/* OUR OFFICE SECTION */}
          <div className="flex-1">
            <p className="text-2xl text-primary">
              Our <span className="font-semibold "> Office</span>
            </p>
            <div className="mt-10 w-full">
              <div className="flex gap-4 w-full">
                <div className="flex-1 min-w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <FaLocationDot className="text-base text-white" />
                </div>
                <p className="text-grayTxt text-lg">
                  <span className="font-bold text-lg"> Address:</span> Survey
                  No. 274/1 & Others, Sky-i Songbirds, Tower No. 8, Flat No.
                  106, Bhugaon (Pune, Maharashtra, India) 412115.
                </p>
              </div>

              <div className="flex gap-4 w-full mt-4">
                <div className="flex-1 min-w-7 max-w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <FaPhone className="text-base text-white" />
                </div>
                <p className="text-primary text-lg">
                  <span className="font-bold text-lg text-grayTxt">
                    {" "}
                    Phone:{" "}
                  </span>
                  +91 9850 638 414
                </p>
              </div>
              <div className="flex gap-4 w-full mt-4">
                <div className="flex-1 min-w-7 max-w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <FaSkype className="text-base text-white" />
                </div>
                <p className="text-primary text-lg">
                  <span className="font-bold text-lg text-grayTxt">
                    {" "}
                    Skype:{" "}
                  </span>
                  transrus21
                </p>
              </div>
              <div className="flex gap-4 w-full mt-4">
                <div className="flex-1 min-w-7 max-w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <IoMail className="text-base text-white" />
                </div>
                <p className="text-primary text-lg">
                  <span className="font-bold text-lg text-grayTxt">
                    {" "}
                    Email:{" "}
                  </span>
                  projects@voiceoceanllp.com
                </p>
              </div>
              <div className="flex gap-4 w-full mt-4">
                <div className="flex-1 min-w-7 max-w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <IoMail className="text-base text-white" />
                </div>
                <p className="text-primary text-lg">
                  <span className="font-bold text-lg text-grayTxt">
                    {" "}
                    Email:{" "}
                  </span>
                  voiceoceanllp@gmail.com
                </p>
              </div>
            </div>

            <hr className="w-1/2 mx-auto my-5" />

            <p className="text-2xl text-primary">Business Hours</p>
            <div className="mt-5 flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <FiClock size={16} />
                <p className="text-grayTxt">Monday - Friday - 9am to 5pm</p>
              </div>
              <div className="flex gap-2 items-center">
                <FiClock size={16} />
                <p className="text-grayTxt">Saturday - 9am to 2pm</p>
              </div>
              <div className="flex gap-2 items-center">
                <FiClock size={16} />
                <p className="text-grayTxt">Sunday - Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1140px] w-full">
          <hr className="my-5 w-full" />
          <p className="text-center text-2xl py-3 text-primary">
            Our <span className="font-bold ">Partner Offices</span>
          </p>
          <hr className="mt-5" />
          <div className="w-full   grid lg:grid-cols-3 grid-cols-1 gap-3 mb-5 mt-5">
            {partnerOffices.map((office) => {
              return (
                <div key={office.title}>
                  <p className="text-lg font-bold text-primary">
                    {office.title}
                  </p>
                  <div className="mt-5 flex gap-4">
                    <div className="flex-1 min-w-7 max-w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                      <FaLocationDot className="text-base text-white" />
                    </div>
                    <p className="text-lg text-grayTxt">{office.address}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
