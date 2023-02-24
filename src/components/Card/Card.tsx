import { FC } from "react"
import "./Card.css"

interface Props {
  id: number
  title: string
  description: string
  deleteIdea: (id: number) => void
}

const Card: FC<Props> = ({id, title, description, deleteIdea}) => {

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      {/* <button>Archive</button> */}
      <button onClick={() => deleteIdea(id)}>Delete</button>
    </div>
  )
}

export default Card