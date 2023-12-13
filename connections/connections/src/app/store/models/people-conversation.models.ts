import { ErrorFailed } from 'src/app/core/models/core.models';

export interface PeopleConversationState {
  peopleConversation: CompanionsItem[];
  loading: boolean;
  error: ErrorFailed | null;
}
export interface PeopleConversationsList {
  Count: number;
  Items: CompanionsItem[];
}

export interface CompanionsItem {
  id: { S: string };
  companionID: { S: string };
}

export interface CompanionId {
  companion: string;
}

export interface ConversationID {
  conversationID: string;
}
