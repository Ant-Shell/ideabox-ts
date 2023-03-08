import { FC } from "react"
import { restoreIdea } from "../../features/saveIdea/saveIdeaSlice"
import "./Card.css"

interface Props {
  id: number
  title: string
  description: string
  deleteIdea: (id: number) => void
  toArchive: (id: number) => void
}

const Card: FC<Props> = ({id, title, description, deleteIdea, toArchive }) => {

  return (
    <div className="card" key={id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => toArchive(id)}>Archive</button>
      <button onClick={() => deleteIdea(id)}>Delete</button>
      <button onClick={() => restoreIdea(id)}>Restore</button>
    </div>
  )
}

export default Card