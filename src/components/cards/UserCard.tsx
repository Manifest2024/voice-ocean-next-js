"use client";
import { FC } from "react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/store";
import { removeArtist } from "@/features/cartSlice";
import { cn } from "@/lib/utils";
import { Actor } from "@/types";
import Link from "next/link";
interface UserCardProps {
  isSameUser?: boolean;
  isBooked?: boolean;
  isSlider?: boolean;
  details?: Actor;
}

const UserCard: FC<UserCardProps> = ({
  isSameUser,
  isBooked,
  isSlider,
  details,
}) => {
  const disptch = useAppDispatch();

  function getProfileImage(actor: Actor): string {
    switch (actor.gender.toLowerCase()) {
      case 'male':
        return '/img/user-male.png';
      case 'female':
        return '/img/user-female.png';
      default:
        return '/img/default-avatar.png';
    }
  }

  const profileSrc =
  details?.profile_photo? details?getProfileImage(details): "/default-avatar.png" : details?getProfileImage(details): "/default-avatar.png"; // fallback path

  const rawSample = details?.voice_samples?.[0]?.sample;

const audioSrc = rawSample
  ?.replace("/api/voice_samples", "/voice_samples");


  return (
    <div
      className={cn(
        "border border-primary  hover:shadow-lg p-3 lg:p-5 rounded-md transition-all h-min overflow-hidden",
        isSlider ? "lg:mr-5" : "",
      )}
    >
      <div className={cn("lg:flex gap-3", isSlider ? "flex" : "")}>
        <img
          loading="lazy"
          src={profileSrc}
          alt=""
          className={cn(
            "lg:rounded-full rounded-md w-full h-[120px] lg:w-[65px] lg:h-[65px]",
            isSlider ? "w-[65px] h-[65px] rounded-full" : "",
          )}
        />
        <div className="text-sm mt-2 lg:mt-0 text-center lg:text-left">
          <Link
            href={`/voice-over-talents/${details?.id}`}
            className="text-primary font-medium"
          >
            {details?.name}
          </Link>
          {/* <p className="truncate w-full text-xs">{details?.id}</p> */}
          <p>{details?.voice_samples[0].category}</p>
        </div>
      </div>
      <div className="flex text-xs lg:text-base text-primary font-medium gap-1 flex-wrap lg:gap-2 mt-3">
        <p>{details?.gender}</p>
        {details?.languages ? <p>|</p> : <></>}

        <p>{details?.languages}</p>

        {details?.artist_category ? <p>|</p> : <></>}
        <p className="text-black font-normal text-sm">
          {details?.artist_category.split("_").join(", ")}
        </p>
      </div>
      <audio controls className="w-full mt-3">
        <source
          src={audioSrc} 
          type="audio/mpeg"
        />
        {/* <source src="horse.mp3" type="audio/mpeg" /> */}
        Your browser does not support the audio element.
      </audio>
      {/* <div className="flex justify-center mt-4"> */}
      {!isSameUser && !isBooked ? (
        <Link href={`/voice-over-talents/${details?.id}`}>
          <Button
            className="bg-primary w-full mt-4 hover:bg-primary"
            // onClick={() => navigate("/voice-over-talents/" + details?.id)}
          >
            Book Now
          </Button>
        </Link>
      ) : (
        <></>
      )}

      {isBooked ? (
        <Button
          variant="outline"
          className="w-full mt-2"
          onClick={() => {
            if (details) disptch(removeArtist({ removedArtist: details }));
          }}
        >
          Remove
        </Button>
      ) : (
        <></>
      )}

      {/* </div> */}
    </div>
  );
};

export default UserCard;
