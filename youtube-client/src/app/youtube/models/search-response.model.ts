import { Item } from './search-item.model';

export interface SearchResponse {
  TODO: string;
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken?: string;
  pageInfo: PageInfo;
  items: Item[];
}
interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface SearchResponseItems {
  kind: string;
  etag: string;
  items: Item[];
}
