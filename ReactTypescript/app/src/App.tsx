import React, { Children } from 'react'
import logo from './logo.svg'
import './App.css'
import ExampleComponent from './components/ExampleComponent'

export type Test = {
  name?: string
  age: number
}

function App() {

  const test: Test = {
    name: 'hase',
    age: 29,
  }

  return <div className="App">
    <ExampleComponent {...test}></ExampleComponent>
  </div>
}

export default App
