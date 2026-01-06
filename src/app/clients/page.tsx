"use client";

import { useEffect, useState } from "react";
import LanguagesList from "@/components/LanguagesList";
import { Client } from "@/types";
import { fetchAllClients } from "@/services/home";

const ADMIN_BASE_URL = process.env.NEXT_PUBLIC_MEDIA_BASE_URL;

const getClientLogo = (logo?: string | null) => {
  if (!logo) return null;
  if (logo.startsWith("http")) return logo;
  return `${ADMIN_BASE_URL}${logo}`;
};

const OurClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadClients = async () => {
      try {
        const data = await fetchAllClients();
        setClients(data || []);
      } catch (err) {
        console.error("Failed to load clients", err);
      } finally {
        setLoading(false);
      }
    };
    loadClients();
  }, []);

  return (
    <div className="w-screen">
      {/* Banner */}
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

      {/* Content */}
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
            quasi-governmental organizations, NGO’s and non-profit organizations,
            heavy engineering industries, educational institutions etc.
          </p>

          <hr className="my-10" />

          {/* Clients Grid */}
          {loading ? (
            <p className="text-center text-gray-500">Loading clients...</p>
          ) : clients.length ? (
            <div className="grid w-full h-full grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {clients.map((client, index) => {
                const logo = getClientLogo(client.client_logo);

                if (!logo) return null;

                return (
                  <div
                    key={client.id ?? index}
                    className="border rounded flex items-center justify-center p-4 bg-white"
                  >
                    <img
                      loading="lazy"
                      src={logo}
                      alt={client.client_name || `Client ${index + 1}`}
                      className="max-h-[100px] max-w-[150px] object-contain"
                    />
                  </div>

                );
              })}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No clients available.
            </p>
          )}

          <hr />

          <div className="mb-10 mt-10">
            <LanguagesList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
