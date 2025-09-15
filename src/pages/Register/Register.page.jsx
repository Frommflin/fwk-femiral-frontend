import React from 'react'
import styles from './register.module.css'

const Register = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Register Page</h1>
        <div className={styles.text}>
          This is the page where the user creates an account.
        </div>
      </div>
    </>
  )
}

export default Register
