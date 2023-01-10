import { useCallback } from "react"

interface A {
  data: number
  setData: (val: number) => void
}

export const useExampleHook = (): [number, (val: number) => void] => {
  let data = 0

  const setData = useCallback((val: number) => {
    data = val
  }, [])

  return [data, setData] // alternativly use "as const"
}