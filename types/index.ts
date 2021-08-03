export interface IMediaDataState {
  mediaData: {
    total: String;
    totalHits: String;
    hits: any[];
  };
  options: {
    safesearch: boolean;
    editors_choice: boolean;
    per_page: Number;
  };
  query: String;
  mediaType: 'image' | 'video';
}
