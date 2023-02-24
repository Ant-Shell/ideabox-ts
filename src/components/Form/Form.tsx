import { FC, useState } from "react"
import "./Form.css"

interface NewIdea {
  id: number
  title: string
  description: string
}

interface Props {
  addIdea: (newIdea: NewIdea) => void
  ideasLength: number
}

const Form: FC<Props> = ({addIdea, ideasLength}) => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const submitIdea = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    const idVal = ideasLength +1
    const newIdea = {
      id: idVal,
      title: title,
      description: description
    }
    addIdea(newIdea)
    clearInputs()
  }

  const clearInputs = (): void => {
    setTitle('')
    setDescription('')
  }

  return (
    <form>
      <input
        title='title' 
        type='text'
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        title='description'
        type='text'
        placeholder="Description" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={(e) => submitIdea(e)}>Submit</button>
    </form>
  )
}

export default Form