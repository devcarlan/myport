import { createContext, useRef, useReducer } from 'react'

const ScrollContext = createContext()

export const ScrollProvider = ({ children }) => {
  const initState = {
    skillsRef: useRef(null),
    projectsRef: useRef(null),
    contactRef: useRef(null),
  }

  const [state, dispatch] = useReducer(scrollReducer, initState)

  return <ScrollContext.Provider value={{}}>{children}</ScrollContext.Provider>
}
