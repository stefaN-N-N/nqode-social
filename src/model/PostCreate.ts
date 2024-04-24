export default interface PostCreate {
  content: string;
  file: File | null;
  authorId: number;
}
