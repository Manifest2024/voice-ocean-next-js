"use client";
import { callAPI } from "@/lib/api";
import {
  Actor,
  ArtistProfileResponse,
  Client,
  LanguagesAndCategoryResponse,
  Project,
  Testimonial,
} from "@/types";
import { AxiosRequestConfig } from "axios";

const getCurrentProjectsEndpoint = "/get/all/current/projects";
const getArtistsEndpoint = "/artists";
const languagesAndCategoriesEndpoint = "/get/languages/and/category";
const getTestimonialsEndpoint = "/get/all/testimonials";
const getClientsEndpoint = "/get/all/client/logos";

export interface ArtistsRequest {
  gender?: string;
  language?: string;
  category?: string;
}

export async function fetchCurrentProjects(
  config?: AxiosRequestConfig,
): Promise<Project[]> {
  const response = await callAPI<Project[]>(getCurrentProjectsEndpoint, {
    ...config,
  });

  return response.data;
}
export async function fetchArtists(
  req?: ArtistsRequest,
  config?: AxiosRequestConfig,
): Promise<Actor[]> {
  const response = await callAPI<Actor[]>(getArtistsEndpoint, {
    params: {
      ...req,
    },
    ...config,
  });

  return response.data;
}
export async function fetchArtistDetails(
  endpoint: string,
  config?: AxiosRequestConfig,
): Promise<ArtistProfileResponse> {
  const response = await callAPI<ArtistProfileResponse>(endpoint, {
    ...config,
  });

  return response.data;
}

export async function fetchLanguagesAndCategories(
  config?: AxiosRequestConfig,
): Promise<LanguagesAndCategoryResponse> {
  const response = await callAPI<LanguagesAndCategoryResponse>(
    languagesAndCategoriesEndpoint,
    {
      ...config,
    },
  );

  return response.data;
}
export async function fetchTestimonials(
  config?: AxiosRequestConfig,
): Promise<Testimonial[]> {
  const response = await callAPI<Testimonial[]>(getTestimonialsEndpoint, {
    ...config,
  });

  return response.data;
}
export async function fetchAllClients(
  config?: AxiosRequestConfig,
): Promise<Client[]> {
  const response = await callAPI<Client[]>(getClientsEndpoint, {
    ...config,
  });

  return response.data;
}
