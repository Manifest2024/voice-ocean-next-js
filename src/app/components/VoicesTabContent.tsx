"use client";
import { Button } from "@/components/ui/button";
import { fetchLanguagesAndCategories } from "@/services/home";
import { LanguagesAndCategoryResponse } from "@/types";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const VoicesTabContent = () => {
  const router = useRouter();
  const [langAndCategories, setLangAndCategories] =
    useState<LanguagesAndCategoryResponse>();
  const [gender, setGender] = useState<string>("");

  const [language, setLanguage] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    fetchLanguagesAndCategories()
      .then((data) => {
        setLangAndCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => abortController.abort();
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="w-full bg-white p-[15px] border-2 border-cardbg border-t-0">
      <p className="text-center mb-6 text-3xl">
        Multilingual voice overs & more
      </p>

      <div className="w-full rounded-lg border-t-[3px] border-t-primary md:h-[148px] border-2 flex items-center py-5 md:py-0">
        <div className="justify-end md:flex md:flex-row flex-1 gap-16 items-end px-12">
          <div className="flex-col gap-2  flex flex-1 md:gap-10 md:flex-row">
            <div className="flex flex-col flex-1">
              <p>Select Language</p>
              <Select
                value={language}
                onValueChange={(e) => {
                  setLanguage(e);
                }}
              >
                <SelectTrigger className="">
                  <SelectValue placeholder=" Language" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    <SelectLabel>Language</SelectLabel>
                    {[...(langAndCategories?.languages ?? [])]
                            .sort((a, b) => a.localeCompare(b))
                            .map((lang) => (
                              <SelectItem value={lang} key={lang}>
                                {lang}
                              </SelectItem>
                          ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col flex-1">
              <p>Select Category</p>
              <Select
                value={category}
                onValueChange={(e) => {
                  setCategory(e);
                }}
              >
                <SelectTrigger className="">
                  <SelectValue placeholder=" Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    {langAndCategories?.categories.map((category) => {
                      return (
                        <SelectItem value={category} key={category}>
                          {category}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col flex-1">
              <p>Select Gender</p>
              <Select
                value={gender}
                onValueChange={(e) => {
                  setGender(e);
                }}
              >
                <SelectTrigger className="">
                  <SelectValue placeholder=" Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                    {/* {langAndCategories?.categories.map((category) => {
                            return ( */}
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                    {/* );
                          })} */}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            className="bg-primary mt-5 md:mt-0"
            size="sm"
            onClick={() => {
              if (language || category) {
                router.push(
                  "/voice-over-talents?language=" +
                    language +
                    "&category=" +
                    category +
                    "&gender=" +
                    gender,
                );
              }
            }}
          >
            Search Voices
          </Button>
        </div>
      </div>
      <p className="text-center font-bold text-lg lg:font-normal lg:text-2xl my-4">
        Voice Talents in over 170+ Languages & Accents!
      </p>
    </div>
  );
};

export default VoicesTabContent;
