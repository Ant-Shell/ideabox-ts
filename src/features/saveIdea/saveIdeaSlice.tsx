import { createSlice } from '@reduxjs/toolkit'

export interface Idea {
  id: number
  title: string
  description: string
}

export interface IdeaState {
  archivedIdeas: Array<Idea>
}

const initialState: IdeaState = {
  archivedIdeas: [],
}


export const ideaSlice = createSlice({
  name: "archivedIdeas",
  initialState,
  reducers: {
    archiveIdea: (state, action) => {
      // console.log(state.ideas)
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (!state.archivedIdeas.includes(action.payload)) {
        state.archivedIdeas.push(action.payload)
      }
    },
    restoreIdea: (state, action) => {
      state.archivedIdeas = state.archivedIdeas.filter(idea => idea.id !== action.payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
// export const { archiveIdea, deleteIdea } = ideaSlice.actions
export const { archiveIdea, restoreIdea } = ideaSlice.actions


export default ideaSlice.reducer