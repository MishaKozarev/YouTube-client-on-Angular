import { GroupState } from './models/group.models';
import { ProfileState } from './models/profile.models';

export interface AppState {
  profile: ProfileState;
  group: GroupState;
}
