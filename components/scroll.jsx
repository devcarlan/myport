import { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
export const Scroll = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className='sticky flex justify-end bottom-2 right-2 mr-2 hover:cursor-pointer'>
      <BsFillArrowUpCircleFill
        size={50}
        onClick={scrollToTop}
        className={visible ? 'opacity-100' : 'opacity-0'}
      />
    </div>
  )
}
