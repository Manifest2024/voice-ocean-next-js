export interface Project {
  project_id: string;
  seo_title: string;
  project_date: string;
  project_description: string;
}

export interface Actor {
  id: string;
  name: string;
  gender: string;
  address: string | null;
  profile_photo: string | null;
  artist_category: string;
  languages: string;
  voice_samples: VoiceSample[];
}

export interface VoiceSample {
  sample: string;
  language: string;
  category: string;
}
export interface ArtistProfile {
  id: string;
  name: string;
  address: string | null;
  profile_photo: string | null;
  gender: string;
  accents: string;
  roles: string;
  styles: string;
  microphone: string;
  services_offered: string;
  availability_days: string;
  availability_time: string;
  title: string;
  description: string;
  languages: string;
  category: string;
}
export interface Language {
  id: string;
  language: string;
  artist_id: string;
  title: string | null;
}

export interface VoiceSample {
  id: string;
  language: string;
  artist_id: string;
  sample: string;
  category: string;
  title: string;
  artist_name: string | null;
}

export interface ArtistProfileResponse {
  artist: ArtistProfile;
  languages: Language[];
  voiceSamples: VoiceSample[];
}

export interface LanguagesAndCategoryResponse {
  languages: string[];
  categories: string[];
}

export interface Testimonial {
  testimonial_id: string;
  seo_title: string;
  testimonial_name: string;
  location: string;
  testimonial_description: string;
}

export interface Client {
  client_id: string;
  seo_title: string;
  client_logo: string;
}
