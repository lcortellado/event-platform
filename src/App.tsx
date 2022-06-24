import { gql, useQuery } from "@apollo/client"
import { Header } from "./components/Header"
import { Lesson } from "./components/Lesson"
import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"
import Event from "./pages/Event"

const GET_LESSONS_QUERY = gql `
query {
  lessons {
    id
    title
  }
}`

interface  Lesson {
  id: string
  title: string
}

function App() {
const {data} = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)

  return (
    <div>
      <Event />
      
    </div>
  //  <ul>
  //    {data?.lessons.map(lesson =>{
  //      return <li key={lesson.id}>{lesson.title}</li>
  //    })}
  //  </ul>
  )
}

export default App
