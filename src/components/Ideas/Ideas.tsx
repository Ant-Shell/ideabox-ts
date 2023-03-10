import { FC } from "react"
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
  location: string
}

const Ideas: FC<Props> = ({ ideas, deleteIdea, location }) => {
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
          location={location}
        />
    )
  })

  const setStyling = (list:JSX.Element[], style1: string, style2: string):string => {
    return list.length ? style1 : style2
  }

  return (
    <div className={setStyling(IdeasList, "ideas-container", "user-notify")}>
      {IdeasList.length ? 
      IdeasList :
      <p>Please add some ideas</p>}
    </div>
  )
}

export default Ideas