import { RequestStatus } from './RequestStatus';
import UserResponse from './UserResponse';

export default interface FriendshipResponse {
  id: number;
  requester: UserResponse;
  receiver: UserResponse;
  status: RequestStatus;
}
