export type JokeType = {
  id: string
  categories?: string[]
  value: string
  created_at: string
  icon_url: string
}

export type InitialStateType = {
  categories?: string[]
  joke?: JokeType
  searchResults?: JokeType[]
  loading: boolean
}


export const categoriesReducer = (state: string[] | undefined, action: any) => {
  switch (action.type) {
    case 'ADD_CATEGORIES':
      return action.payload

    default:
      return state
  }
}

export const searchReducer = (state: JokeType[] | undefined, action: any) => {
  switch (action.type) {
    case 'SEARCH':
      return action.payload

    default:
      return state
  }
}

export const jokeReducer = (state: JokeType | undefined, action: any) => {
  switch (action.type) {
    case 'SET_JOKE':
      return action.payload

    default:
      return state
  }
}

export const loadingReducer = (state: boolean, action: any) => {
  switch (action.type) {
    case 'LOADING':
      return action.payload

    default:
      return state
  }
}
