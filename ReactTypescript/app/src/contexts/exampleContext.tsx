import { useState, useMemo, useContext, createContext } from 'react'

type ContextProps = {
  data: any
  setData: (value: any) => any
}

// Context
export const ExampleContext = createContext<ContextProps>({
  data: '',
  setData: () => {},
})

// Provider
export const dataProvider = ({ children }: PropsTypes) => {
  const [data, setData] = useState()

  const values = useMemo(
    () => ({
      data,
      setData,
    }),
    [data]
  )

  return (
    <ExampleContext.Provider value={values}>
      {children}
    </ExampleContext.Provider>
  )
}

// Consumer
export function useExampleContext() {
  const context = useContext(ExampleContext)
  if (!context) {
    console.error(
      'Error in context'
    )
  }
  return context
}
