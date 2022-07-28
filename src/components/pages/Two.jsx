import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/slices/counter'
import styles from './style.module.css'
function Two() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(increment())
  }, [])
  

  return (
    <div className={styles.container}>Two</div>
  )
}

export default Two