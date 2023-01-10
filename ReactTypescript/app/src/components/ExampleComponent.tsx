import React from 'react'
import { Test } from '../App'
import { useExampleHook } from '../hooks/useExampleHook'

const ExampleComponent = ({name = "hase", age}: Test) => {
  
  const [data, setData] = useExampleHook()
  console.log(data)
  setData(12)
  console.log(data)
  return <div>test</div>
}

export default ExampleComponent
