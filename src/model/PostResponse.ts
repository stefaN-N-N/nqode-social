export default interface PostResponse {
  id: number;
  content: string;
  fileId: number | null;
  createdAt: string;
  user: string;
}
