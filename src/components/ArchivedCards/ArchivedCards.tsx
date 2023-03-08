import { FC } from "react"
import { useSelector, useDispatch } from "react-redux"
import { restoreIdea } from "../../features/saveIdea/saveIdeaSlice"
import Card from "../Card/Card"
import "./ArchivedCards.css"

interface Idea {
  id: number
  title: string
  description: string
}

interface Props {
  addIdea: (id:number) => void
  deleteIdea: (id:number) => void
}

const ArchivedCards:FC<Props> = ({ addIdea, deleteIdea }) => {
  const dispatch = useDispatch()
  const archivedIdeas = useSelector((state: any) => state.ideas.archivedIdeas)

  const ArchivedIdeasList = archivedIdeas.map((idea:Idea) => {
    const {id, title, description} = idea
    
    const toArchive = () => {
      dispatch(restoreIdea(idea))
      addIdea(id)
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
    <div className="archived-ideas-container">
      {ArchivedIdeasList}
    </div>
  )
}

export default ArchivedCards