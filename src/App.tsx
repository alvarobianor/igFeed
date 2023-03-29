import { Header } from "./components/Header/Header"
import { Post } from "./components/Post/Post"
import './global.css'
export function App() {

  return (
    <>
      <Header />
      <Post author="Álvaro Lindo" content="Um cara mt lindo" />
      <Post author="Petter Griffing" content="Lorem Ipsum Dollor" />
    </>
  )
}
