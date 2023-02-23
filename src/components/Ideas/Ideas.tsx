import { FC } from "react"
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

const Ideas: FC<Props> = ({ideas, deleteIdea}) => {
  const IdeasList = ideas.map(idea => {
    const {id, title, description} = idea
    
    return (
        <Card 
          id={id}
          title={title}
          description={description}
          key={id}
          deleteIdea={deleteIdea}
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