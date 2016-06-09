import React from 'react'
import * as todoList from '../../components/todoList'
import * as weather from '../../components/weather'
import styles from './Home.scss'

export const HomeLayout = () => (
  <div className={styles.container} >
    <div className={styles.todo} >
      <h3 className={styles.title}>Todo app</h3>
      <todoList.TodoListComponent />
    </div>
    <div className={styles.weather}>
      <weather.WeatherComponent />
    </div>
  </div>
)
