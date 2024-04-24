import PostResponse from './PostResponse';
import UserResponse from './UserResponse';

export default interface CommentResponse {
  id: number;
  content: string;
  author: UserResponse;
  post: PostResponse;
  createdAt: Date;
  hasReplies: boolean;
}
