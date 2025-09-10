import React from 'react'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Home Page</h1>
      <div className={styles.text}>
        This is the page to write out the rules
      </div>
    </div>
  )
}

export default Home
