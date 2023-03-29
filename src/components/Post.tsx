type Props = {
  author?: string;
  content?: string;

}
export function Post({ author, content }: Props) {
  return (
    <>
      <strong>{author}</strong>
      <p>{content}</p>
    </>
  )
}
