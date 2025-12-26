import { apiClient } from '@/lib/api-client'
import {
  TodosResponse,
  CreateTodoRequest,
  Todo,
  UpdateTodoRequest,
} from '@/types/api'

export const getTodos = async (
  limit = 10,
  skip = 0,
): Promise<TodosResponse> => {
  return apiClient.get<TodosResponse>(`/todos?limit=${limit}&skip=${skip}`)
}

export const createTodo = async (data: CreateTodoRequest): Promise<Todo> => {
  return apiClient.post<Todo>('/todos/add', data)
}

export const updateTodo = async (
  id: number,
  data: UpdateTodoRequest,
): Promise<Todo> => {
  return apiClient.put<Todo>(`/todos/${id}`, data)
}

export const deleteTodo = async (id: number): Promise<Todo> => {
  return apiClient.delete<Todo>(`/todos/${id}`)
}
