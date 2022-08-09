import { createContext, useRef, useState } from 'react'

const ScrollContext = createContext()

export const ScrollProvider = ({ children }) => {
  const [skillsRef, projectsRef, contactRef] = useRef(null)

  const [lie, setLie] = useState(false)

  return <ScrollContext.Provider value={lie}>{children}</ScrollContext.Provider>
}

export default ScrollContext
