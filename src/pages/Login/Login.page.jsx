import React from 'react'
import styles from './login.module.css'

const Game = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Login Page</h1>
        <div className={styles.text}>
          This is the page where the user signs in to the account.
        </div>
      </div>
    </>
  )
}

export default Game
