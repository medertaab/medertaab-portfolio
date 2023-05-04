import React, { useEffect, useState } from 'react'
import styles from '../../styles/hero/SubHeader.module.scss'

export default function SubHeader() {
  const [titleId, setTitleId] = useState(0)
  const titles = ["Illustrator", "Copywriter", "Translator", "Internet resident"]
  
  useEffect(() => {
    setInterval(() => {
      setTitleId((prev) => {
        if (prev === titles.length - 1) {
          setTitleId(0)
        } else {
          setTitleId(prev + 1)
        }
      })
    }, 1000)
  }, [])
  
  return (
    <div className={styles.subHeader}>
      <h2>WEB DEVELOPER</h2>
      <span>&</span><div>Illustrator</div>
    </div>
  )
}
