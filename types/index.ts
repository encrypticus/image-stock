import { MediaType, ImageType, Colors, Lang, Orientation, Order } from 'types/enums';

type VideoMeta = {
  url: string; //"https://player.vimeo.com/external/135736646.hd.mp4?s=ed02d71c92dd0df7d1110045e6eb65a6&profile_id=119"
  width: number; //1920
  height: number; //1080
  size: number; // 6754983
};

type Videos = {
  large: VideoMeta;
  medium: VideoMeta;
  small: VideoMeta;
  tiny: VideoMeta;
};

export type Hit = {
  id: number; //4692
  pageURL: string; //"https://pixabay.com/en/blossom-bloom-flower-195893/"
  type: string; //"photo" | "film"
  tags: string; //"blossom, bloom, flower"
  previewURL?: string; //"https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg"
  previewWidth?: number; //150
  previewHeight?: number; //84
  webformatURL?: string; //"https://pixabay.com/get/35bbf209e13e39d2_640.jpg
  webformatWidth?: number; //640
  webformatHeight?: number; //360
  largeImageURL?: string; //"https://pixabay.com/get/ed6a99fd0a76647_1280.jpg"
  fullHDURL?: string; //"https://pixabay.com/get/ed6a9369fd0a76647_1920.jpg"
  imageURL?: string; //"https://pixabay.com/get/ed6a9364a9fd0a76647.jpg"
  vectorURL?: string; //???
  imageWidth?: number; //4000
  imageHeight?: number; //2250
  imageSize?: number; //4731420
  views: number; //7671
  downloads: number; //5503
  likes: number; //5
  comments: number; //5
  user_id: number; //4237
  user: string; // John
  userImageURL: string; //"https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg"
  // videos
  videos?: Videos;
  picture_id?: string; //"529927645"
  duration?: number; //12
};

export type MediaData = {
  data: {
    total: string;
    totalHits: string;
    hits: Hit[];
  };
  currentPage: number;
  maxPage: number;
  options: Options;
  mediaType?: MediaType;
};

type Options = {
  safesearch: boolean;
  editors_choice: boolean;
  per_page: number;
  colors: Colors[] | string;
  image_type: ImageType;
  lang: Lang;
  orientation: Orientation;
  min_width: number;
  min_height: number;
  order: Order;
};

export interface IMediaDataState {
  mediaData: {
    total: string;
    totalHits: string;
    hits: Hit[];
  };
  options: Options;
  query: string;
  mediaType: MediaType;
}

export type MenuItemProps = {
  anchorElt: null | HTMLElement;
  open: boolean;
  onClose: () => void;
};
