export interface Item {
  kind?: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

interface Snippet {
  publishedAt: string;
  channelId?: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId?: string;
  liveBroadcastContent?: string;
  defaultLanguage?: string;
  localized?: Localized;
  defaultAudioLanguage?: string;
}

interface Thumbnails {
  default: ThumbnailsItem;
  medium?: ThumbnailsItem;
  high: ThumbnailsItem;
  standard?: ThumbnailsItem;
  maxres?: ThumbnailsItem;
}

interface ThumbnailsItem {
  url: string;
  width: number;
  height: number;
}

interface Localized {
  title: string;
  description: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface VideoItem {
  kind: string;
  etag: string;
  id: ID;
  snippet: VideoSnippet;
}

interface ID {
  kind: string;
  videoId: string;
}

interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: VideoThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface VideoThumbnails {
  default: ThumbnailsItem;
  medium: ThumbnailsItem;
  high: ThumbnailsItem;
}
