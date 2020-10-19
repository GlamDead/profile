/* eslint-disable no-undef */
import { useState, useEffect } from "react"

const useLocalStorageValue = () => {
  const [values, setValues] = useState({})

  useEffect(() => {
    const storage = localStorage.getItem("values")
    setValues(JSON.parse(storage) || {})
  }, [])

  const setStorage = (value) => {
    setValues(value)
    localStorage.setItem("values", JSON.stringify(value))
  }

  return [values, setStorage]
}

export default useLocalStorageValue
