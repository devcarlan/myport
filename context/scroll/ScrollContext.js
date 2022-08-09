import React, { useRef, useState } from 'react'

const ScrollContext = React.createContext()

export const ScrollProvider = ({ children }) => {
  const skillsRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()

  const refs = {
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  }

  return (
    <ScrollContext.Provider value={{ ...refs }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollContext
