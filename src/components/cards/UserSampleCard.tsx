import { cn } from "@/lib/utils";
import { ArtistProfile, VoiceSample } from "@/types";
import { FC } from "react";
interface UserCardProps {
  isSlider?: boolean;
  details?: VoiceSample;
  artistDetails?: ArtistProfile;
}

const UserSampleCard: FC<UserCardProps> = ({
  isSlider,

  details,
  artistDetails,
}) => {
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
          src={
            artistDetails?.profile_photo
              ? artistDetails.profile_photo
              : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
          }
          alt=""
          className={cn(
            "lg:rounded-full rounded-md w-full h-[80px] lg:w-[65px] lg:h-[65px]",
            isSlider ? "w-[65px] h-[65px] rounded-full" : "",
          )}
        />
        <div className="text-sm mt-2 lg:mt-0 text-center lg:text-left">
          <p className="text-primary">{details?.artist_name}</p>
          {/* <p className="truncate w-full text-xs">{details?.id}</p> */}
          <p>{details?.category}</p>
        </div>
      </div>
      <div className="flex text-xs lg:text-base text-primary font-medium gap-1 flex-wrap lg:gap-2 mt-3">
        <p>{artistDetails?.gender}</p>
        <p>|</p>
        <p> {details?.language}</p>
        <p>|</p>
        <p>{details?.category}</p>
      </div>
      <audio controls className="w-full mt-3">
        <source
          src={
            details?.sample
              ? details.sample
              : "https://file-examples.com/storage/fe0e2ce82f660c1579f31b4/2017/11/file_example_MP3_700KB.mp3"
          }
          type="audio/ogg"
        />
        <source src="horse.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* <div className="flex justify-center mt-4"> */}

      {/* </div> */}
    </div>
  );
};

export default UserSampleCard;
