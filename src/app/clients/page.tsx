import LanguagesList from "@/components/LanguagesList";

const OurClients = () => {
  return (
    <div className="w-screen">
      <div className="bg-company-overview h-[350px] flex justify-center items-center">
        <div className="mt-24 lg:mt-10">
          <div className="flex justify-center gap-5">
            <p className="text-base text-primary">HOME</p>
            <p className="text-base text-primary">CLIENTS</p>
          </div>
          <p className="text-[32px] text-white pb-5 border-b-4 border-primary text-center">
            Our Clients
          </p>
        </div>
      </div>
      <div className="w-full p-5 flex items-center flex-col">
        <div className="w-full max-w-[1140px] mt-5">
          <p className="text-4xl text-center">
            Our Services{" "}
            <span className="bg-[#F04323] px-1 text-white font-bold">
              success
            </span>
          </p>
          <p className="mt-5 text-center text-lg text-grayTxt">
            Over the last decade that we have been in existence, we have an
            impressive list of industries that we have had the privilege of
            working with. We have served several clients from varied backgrounds
            such as information technology, manufacturing, film industry, health
            & wellness, hospitality, hotels, travel & tourism, governmental &
            quasi-governmental organizations, NGO’s and non-profit
            organizations, heavy engineering industries, educational
            institutions etc. to name just a few. With an unending and
            inexhaustible zeal to move forward, we have continued our march
            forward in providing our services and expertise to a large spectrum
            of clients.
          </p>

          <hr className="my-10" />
          <div className="grid w-full h-full grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {new Array(10).fill("_").map((_, i) => {
              return (
                <div className=" border rounded" key={i}>
                  <img
                    loading="lazy"
                    src="https://voiceoceanllp.com/img/Client%20List/B%20Lingo%20Communications.png"
                  />
                </div>
              );
            })}
          </div>
          <hr className="" />
          <div className="mb-10">
            <LanguagesList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
