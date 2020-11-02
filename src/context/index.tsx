import React, { createContext, useReducer } from 'react'
import {
  categoriesReducer,
  searchReducer,
  jokeReducer,
  loadingReducer,
  InitialStateType,
} from '../reducers'

const initialState = {
  categories: [],
  searchResults: [],
  loading: false,
  joke: undefined,
}

export const AppContext = createContext<{
  state: InitialStateType
  dispatch: any
}>({
  state: initialState,
  dispatch: () => null
})

export const mainReducer = (
  { categories, joke, searchResults, loading }: InitialStateType,
  action: any
) => ({
  categories: categoriesReducer(categories, action),
  joke: jokeReducer(joke, action),
  searchResults: searchReducer(searchResults, action),
  loading: loadingReducer(loading, action),
})


export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
