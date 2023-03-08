import { FC } from "react"
// import { useDispatch, useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { archiveIdea } from "../../features/saveIdea/saveIdeaSlice"
import Card from "../Card/Card"
import "./Ideas.css"

interface Idea {
  id: number
  title: string
  description: string
}

interface Props {
  ideas: Array<Idea>
  deleteIdea: (id:number) => void
}

const Ideas: FC<Props> = ({ ideas, deleteIdea }) => {
  const dispatch = useDispatch()

  const IdeasList = ideas.map(idea => {
    const {id, title, description} = idea

    const toArchive = () => {
      dispatch(archiveIdea(idea))
      deleteIdea(id)
    }

    return (
        <Card 
          id={id}
          title={title}
          description={description}
          key={id}
          deleteIdea={deleteIdea}
          toArchive={toArchive}
        />
    )
  })
  
  return (
    <div className="ideas-container">
      {IdeasList}
    </div>
  )
}

export default Ideas