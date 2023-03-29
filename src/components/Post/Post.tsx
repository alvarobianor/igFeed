import styles from './Post.module.css'

type Props = {
  author?: string;
  content?: string;

}
export function Post({ author, content }: Props) {
  return (
    <div className={styles.post}>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>
  )
}
