export default interface PostResponse {
  id: number;
  content: string;
  fileId: number | null;
  createdAt: Date;
  user: string;
}
