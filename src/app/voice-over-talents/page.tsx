"use client";
import UserCard from "@/components/cards/UserCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import {
  ArtistsRequest,
  fetchArtists,
  fetchLanguagesAndCategories,
} from "@/services/home";
import { Actor, LanguagesAndCategoryResponse } from "@/types";
import { SelectValue } from "@radix-ui/react-select";
import { AxiosError } from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const VoiceOverTalents = () => {
  const [langAndCategories, setLangAndCategories] =
    useState<LanguagesAndCategoryResponse>();

  const searchParams = useSearchParams();
  const queryLanguage = searchParams.get("language") || "";
  const queryCategory = searchParams.get("category") || "";
  const queryGender = searchParams.get("gender") || "";

  const [language, setLanguage] = useState<string>(queryLanguage);
  const [gender, setGender] = useState<string>(queryGender);
  const [category, setCategory] = useState<string>(queryCategory);
  const [artists, setArtists] = useState<Actor[]>([]);

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
  const getArtistsData = (filters: ArtistsRequest) => {
    // const filters: ArtistsRequest = {
    //   category,
    //   gender,
    //   language,
    // };
    fetchArtists(filters)
      .then((data) => {
        setArtists(data);
        console.log(data);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getArtistsData({
      category: queryCategory,
      gender: queryGender,
      language: queryLanguage,
    });
  }, [queryCategory, queryLanguage, queryGender]);
  return (
    <div>
      {/* <img loading="lazy" 
        src="https://plus.unsplash.com/premium_photo-1681412205470-77848a519359?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
        className=""
      /> */}
      <div className="bg-company-overview w-screen h-[500px] md:h-[550px] bg-center"></div>
      <div className="w-screen justify-center flex max-h-max">
        {/* FILTER USERS */}
        <div className="w-[1170px] -mt-10">
          <div className=" w-full bg-white p-[15px] border-2 border-cardbg border-t-0 rounded-md">
            <p className="text-center mb-6 text-3xl">Search Voice Talent</p>

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
                      <SelectContent>
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
                <div className="flex flex-col">
                  <Button
                    className="bg-primary mt-5 md:mt-0 hover:bg-primary"
                    size="sm"
                    onClick={() =>
                      getArtistsData({ category, language, gender })
                    }
                  >
                    Search Voices
                  </Button>
                </div>
              </div>
            </div>
            {category || language || gender ? (
              <Button
                className=" mt-5 md:mt-5"
                size="sm"
                variant="outline"
                onClick={() => {
                  setCategory("");
                  setGender("");
                  setLanguage("");
                  getArtistsData({ category: "", language: "", gender: "" });
                }}
              >
                Clear Filters
              </Button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {/* USERS LIST */}
      <div className="my-10 px-3 lg:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {artists.map((artist) => {
          return <UserCard key={artist.id} details={artist} />;
        })}
      </div>
    </div>
  );
};

export default VoiceOverTalents;
