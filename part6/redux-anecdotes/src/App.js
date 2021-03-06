import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { anecdotesInitialize } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(anecdotesInitialize())
  }, [dispatch])

  return (
    <div>
      <h2>Notification</h2>
      <Notification />
      <h2>Filter</h2>
      <Filter />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App
