import { Todo } from '@/types/api'
import { TodoItem } from './todo-item'
import { List } from '@/components/ui/list'

type TodoListProps = {
  todos: Todo[]
  isLoading: boolean
  onToggle: (id: number, completed: boolean) => void
  onEdit: (todo: Todo) => void
  onDelete: (id: number) => void
}

export const TodoList = ({
  todos,
  isLoading,
  onToggle,
  onEdit,
  onDelete,
}: TodoListProps) => {
  return (
    <List
      isLoading={isLoading}
      isEmpty={todos.length === 0}
      emptyTitle="All caught up!"
      emptyDescription="Create your first todo to get started"
      loadingText="Loading your tasks..."
    >
      {todos.map((todo, index) => (
        <div key={todo.id} style={{ animationDelay: `${index * 50}ms` }}>
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      ))}
    </List>
  )
}
