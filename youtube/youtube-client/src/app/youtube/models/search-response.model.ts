<<<<<<< HEAD
import { Item, VideoItem } from './search-item.model';

export default interface VideoItems {
  kind: string;
  etag: string;
  items: Item[];
  pageInfo: PageInfo;
}

export interface SearchResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken?: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: VideoItem[];
=======
import { Item } from './search-item.model';

export interface SearchResponse {
  TODO: string;
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
>>>>>>> main
}
interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
