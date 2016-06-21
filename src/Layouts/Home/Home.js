import React from 'react'
import * as todoList from '../../components/todoList'
import * as weather from '../../components/weather'
import * as news from '../../components/news'
import styles from './Home.scss'

export const HomeLayout = () => (
  <div className={styles.container} >
    <div className={styles.todo} >
      <news.NewsComponent />
    </div>
    <div className={styles.widget}>
      <weather.WeatherComponent />
      <todoList.TodoListComponent />
    </div>
  </div>
)
