import { FC, useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Header from "../Header/Header"
import Form from "../Form/Form"
import Ideas from "../Ideas/Ideas"
import ArchivedCards from "../ArchivedCards/ArchivedCards"
import "./App.css"

interface Idea {
  id: number
  title: string
  description: string
}

const App: FC = () => {
  const [ideas, setIdeas] = useState<Array<Idea>>([])
  const location = useLocation()

  useEffect(() => {
    setIdeas([
      {id: 1, title: "Learn TypeScript", description: "It's good for you"},
      {id: 2, title: "Keep Learning", description: "It's also good for you"},
      {id: 3, title: "Take POMs", description: "Yup - also good for you"}
    ])
  }, [])

  const addIdea = (newIdea: Idea): void =>  {
    setIdeas([...ideas, newIdea])
  }

  const deleteIdea = (id: number): void => {
    const updatedList = ideas.filter(idea => idea.id !== id)
    setIdeas(updatedList)
  }

  return (
    <main>
      <Header location={location.pathname}/>
      <Routes>
        <Route path="/" element={
          <>
            <Form
              addIdea={addIdea}
              ideasLength={ideas.length}
            />
            <Ideas
              ideas={ideas}
              deleteIdea={deleteIdea}
              location={location.pathname}
            />
          </>
        } />
        <Route path="/archive"
        element={
          <ArchivedCards
            addIdea={addIdea}
            deleteIdea={deleteIdea}
            location={location.pathname}
            />
          }
        />
      </Routes>
    </main>
  )
}

export default App