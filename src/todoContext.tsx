import React, { useState } from "react"
import {Todos,ContextType} from "./Todo.types"

export const TodoContext = React.createContext<ContextType | null>(null)

export const TodoProvider: React.FC = ({children})=>{
  const [todos, setTodos] = useState<Todos[]>([{
    id: 1,
    title: "ss",
    description: "ss",
    isCompleted:false
  }])

  return <TodoContext.Provider value={{todos,setTodos}}>
    {children}
  </TodoContext.Provider>
}

