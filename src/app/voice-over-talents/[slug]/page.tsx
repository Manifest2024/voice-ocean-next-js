"use client";

import { FC, useEffect, useState } from "react";
import { IconType } from "react-icons";
import {
  FaLocationDot,
  FaTags,
  FaPerson,
  FaListCheck,
  FaMicrophoneLines,
  FaRegCalendarCheck,
  FaRegClock,
  FaRegThumbsUp,
} from "react-icons/fa6";
import { IoMaleSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { GrLanguage } from "react-icons/gr";
import UserCard from "@/components/cards/UserCard";
import { useAppDispatch } from "@/store";
import { addArtist } from "@/features/cartSlice";
import { fetchArtistDetails, fetchArtists } from "@/services/home";
import { Actor, ArtistProfileResponse } from "@/types";
import { AxiosError } from "axios";
import { FiArchive } from "react-icons/fi";
import UserSampleCard from "@/components/cards/UserSampleCard";
import { useParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

interface UserDetailCardProps {
  Icon: IconType;
  title: string;
  description: string;
}

const UserDetailCard: FC<UserDetailCardProps> = ({
  Icon,
  title,
  description,
}) => (
  <div className="border p-3">
    <div className="flex items-center gap-2">
      <Icon className="text-primary" />
      <p className="text-sm text-primary">{title}</p>
    </div>
    <div className="mt-1 lg:ml-6">
      <p className="text-grayTxt text-xs">{description}</p>
    </div>
  </div>
);

const UserDetail: FC = () => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const [artistDetails, setArtistDetails] =
    useState<ArtistProfileResponse | null>(null);
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    fetchArtistDetails(`/artists/profile/${slug}`)
      .then(setArtistDetails)
      .catch((err: AxiosError) => console.error(err));
  }, [slug]);

  useEffect(() => {
    if (artistDetails?.artist?.id) {
      fetchArtists({
        category: artistDetails.artist.category,
        gender: artistDetails.artist.gender,
      }).then(setActors);
    }
  }, [artistDetails]);

  return (
    <div className="pt-28">
      <div className="p-5 lg:p-10 flex flex-col-reverse lg:flex-row gap-10">
        <div className="flex-1 max-w-[350px] border gap-3 p-4 hidden lg:flex flex-col h-min">
          <UserDetailCard
            Icon={FaLocationDot}
            title="Voice Ages"
            description="Adult (18-34), Middle Aged (35-50), Senior (50+)"
          />
          <UserDetailCard
            Icon={FaPerson}
            title="Accents"
            description={
              artistDetails?.artist?.accents.split(",").join(", ") || "N/A"
            }
          />
          <UserDetailCard
            Icon={FiArchive}
            title="Roles"
            description={
              artistDetails?.artist?.roles.split(",_").join(", ") || "N/A"
            }
          />
          <UserDetailCard
            Icon={FaListCheck}
            title="Styles"
            description={
              artistDetails?.artist?.styles.split(",").join(", ") || "N/A"
            }
          />
          <UserDetailCard
            Icon={FaMicrophoneLines}
            title="Microphone"
            description={artistDetails?.artist?.microphone || "N/A"}
          />
          <UserDetailCard
            Icon={FaRegThumbsUp}
            title="Services Offered"
            description={artistDetails?.artist?.services_offered || "N/A"}
          />
          <UserDetailCard
            Icon={FaRegCalendarCheck}
            title="Availability (Days)"
            description={artistDetails?.artist?.availability_days || "N/A"}
          />
          <UserDetailCard
            Icon={FaRegClock}
            title="Availability (Time)"
            description={artistDetails?.artist?.availability_time || "N/A"}
          />
        </div>

        <div className="flex-1 mt-10 lg:mt-0">
          <div className="border p-4">
            <div className="w-full lg:flex gap-5">
              <div>
                <div className="lg:w-[235px] lg:h-[235px] p-1 border rounded-full h-min w-60">
                  <img
                    loading="lazy"
                    src={
                      artistDetails?.artist?.profile_photo ||
                      "https://www.voyzapp.com/upload-nct/artist_profile_pic/VS773403/e4f1ce90c3b1abe3b9ee174609678323.png"
                    }
                    className="rounded-full"
                    alt="Profile"
                  />
                </div>
                <div className="flex justify-center w-full mt-4">
                  <Button
                    className="bg-primary hover:bg-primary"
                    onClick={() => {
                      if (artistDetails?.artist) {
                        dispatch(
                          addArtist({
                            bookedArtists: {
                              address: artistDetails.artist.address || "",
                              artist_category:
                                artistDetails.artist.category || "",
                              gender: artistDetails.artist.gender || "",
                              id: artistDetails.artist.id || "",
                              languages: artistDetails.artist.languages || "",
                              name: artistDetails.artist.name || "",
                              profile_photo:
                                artistDetails.artist.profile_photo || "",
                              voice_samples: artistDetails.voiceSamples,
                            },
                          }),
                        );
                        toast({
                          title: "Success",
                          variant: "success",
                          description: "Artist added to your cart",
                        });
                      }
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center mt-5 lg:block">
                {/* <p className="text-base font-medium text-yellow-600"> */}
                {/*   {artistDetails?.artist?.id || "N/A"} */}
                {/* </p> */}
                <p className="text-base font-medium text-primary">
                  {artistDetails?.artist?.name || "N/A"}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <IoMaleSharp size={16} />
                    <p className="font-medium">
                      {artistDetails?.artist?.gender || "N/A"}
                    </p>
                  </div>
                  <div className="h-5 border-l" />
                  <div className="flex items-center gap-1">
                    <FaLocationDot size={16} />
                    <p className="font-medium">Mumbai</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <div className="w-[18px] h-[18px] mt-[2px]">
                    <FaTags size={18} />
                  </div>
                  <div>
                    <p className="text-base font-medium text-purple-800">
                      Categories
                    </p>
                    <div className="flex gap-1 w-full flex-wrap">
                      <p className="text-sm">
                        {artistDetails?.artist?.category
                          .split("_")
                          .join(", ") || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <div className="w-[18px] h-[18px] mt-[2px]">
                    <GrLanguage size={18} />
                  </div>
                  <div>
                    <p className="text-base font-medium text-purple-800">
                      Languages
                    </p>
                    <div className="flex gap-1 w-full flex-wrap mt-1">
                      <p className="text-sm">
                        {artistDetails?.artist?.languages || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-grayTxt text-wrap">
              {artistDetails?.artist?.description ||
                "No description available."}
            </p>
          </div>

          <div className="border p-2 lg:p-4 mt-10">
            <p className="text-lg text-purple-600 font-medium">Sample Voices</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
              {artistDetails?.voiceSamples?.map((sample, i) => (
                <UserSampleCard
                  artistDetails={artistDetails.artist}
                  details={sample}
                  key={i}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 gap-y-4 border p-4 flex flex-col h-min lg:hidden mt-5">
            <UserDetailCard
              Icon={FaLocationDot}
              title="Voice Ages"
              description="Adult (18-34), Middle Aged (35-50), Senior (50+)"
            />
            <UserDetailCard
              Icon={FaPerson}
              title="Accents"
              description={artistDetails?.artist?.accents || "N/A"}
            />
            <UserDetailCard
              Icon={FiArchive}
              title="Roles"
              description={artistDetails?.artist?.roles || "N/A"}
            />
            <UserDetailCard
              Icon={FaListCheck}
              title="Styles"
              description={artistDetails?.artist?.styles || "N/A"}
            />
            <UserDetailCard
              Icon={FaMicrophoneLines}
              title="Microphone"
              description={artistDetails?.artist?.microphone || "N/A"}
            />
            <UserDetailCard
              Icon={FaRegThumbsUp}
              title="Services Offered"
              description={artistDetails?.artist?.services_offered || "N/A"}
            />
            <UserDetailCard
              Icon={FaRegCalendarCheck}
              title="Availability (Days)"
              description={artistDetails?.artist?.availability_days || "N/A"}
            />
            <UserDetailCard
              Icon={FaRegClock}
              title="Availability (Time)"
              description={artistDetails?.artist?.availability_time || "N/A"}
            />
          </div>

          <div className="border p-4 mt-10">
            <p className="text-lg text-purple-600 font-medium">
              You May Also Like
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
              {actors.map((actor) => (
                <UserCard key={actor.id} details={actor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
