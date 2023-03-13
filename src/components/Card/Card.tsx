import { FC } from "react"
import "./Card.css"

interface Props {
  id: number
  title: string
  description: string
  deleteIdea: (id: number) => void
  toArchive?: (id: number) => void
  toRestore?: (id: number) => void
  deleteArchivedIdea?: (id: number) => void
  location: string
}

const Card: FC<Props> = ({id, title, description, deleteIdea, toArchive,
                          toRestore, deleteArchivedIdea, location }) => {

  const buttonHandler = (location:string, loc:string) => {
    return location === loc ?
     <>
      <button onClick={() => toArchive?.(id)}>Archive</button>
      <button onClick={() => deleteIdea(id)}>Delete</button>
     </> :
     <>
      <button onClick={() => toRestore?.(id)}>Restore</button>
      <button onClick={() => deleteArchivedIdea?.(id)}>Delete</button>
     </>
  }

  return (
    <div className="card" key={id}>
      <h2>{title}</h2>
      <p>{description}</p>
      {buttonHandler(location, '/')}
    </div>
  )
}

export default Card