export interface Rundown {
  id: number;
  created_at: string;
  wedding_id: number;
  event_name: string;
  event_date: string;
  event_time_start: string;
  event_time_end: string;
  pin_point: string;
  address: string;
}

export interface Meta {
  title: string;
  imageUrl: string;
  description: string;
}
export interface Wedding {
  id: number;
  created_at: string;
  fullname_man: string;
  fullname_women: string;
  nickname_man: string;
  nickname_women: string;
  father_name_man: string;
  father_name_women: string;
  mother_name_man: string;
  mother_name_women: string;
  man_relatives: Array<string>;
  women_relatives: Array<string>;
  bride_main_banner: string;
  avatar_men: string;
  avatar_women: string;
  slug: string;
  theme: string;
  rundowns: Array<Rundown>;
  photos: Array<string>;
  meta: Meta;
  audio_url: string;
}

export interface WeddData {
  weddData: Wedding;
}