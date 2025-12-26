export type Meta = {
  page: number
  totalPages: number
  total: number
  limit: number
}

export type Todo = {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export type TodosResponse = {
  todos: Todo[]
  total: number
  skip: number
  limit: number
}

export type CreateTodoRequest = {
  todo: string
  completed: boolean
  userId: number
}

export type UpdateTodoRequest = {
  todo?: string
  completed?: boolean
}
