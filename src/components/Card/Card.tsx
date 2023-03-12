import { FC } from "react"
import "./Card.css"

interface Props {
  id: number
  title: string
  description: string
  deleteIdea: (id: number) => void
  toArchive?: (id: number) => void
  toRestore?: (id: number) => void
}

const Card: FC<Props> = ({id, title, description, deleteIdea, toArchive, toRestore }) => {

  return (
    <div className="card" key={id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => toArchive?.(id)}>Archive</button>
      <button onClick={() => toRestore?.(id)}>Restore</button>
      <button onClick={() => deleteIdea(id)}>Delete</button>
    </div>
  )
}

export default Card