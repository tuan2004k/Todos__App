import { Plus, AlertCircle } from 'lucide-react'
import { TodoList, TodoForm } from '@/components/todos'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { SimpleConfirmationDialog } from '@/components/ui/dialog/simple-confirmation-dialog'
import { Head } from '@/components/seo'
import { useTodos } from '@/hooks/use-todos'
import { colors } from '@/config/colors'

const TodosPage = () => {
  const {
    todos,
    isLoading,
    error,
    isFormOpen,
    editingTodo,
    isSubmitting,
    deletingId,
    loadTodos,
    handleCreateTodo,
    handleUpdateTodo,
    handleToggleTodo,
    handleDeleteTodo,
    handleEdit,
    handleCloseForm,
    openCreateForm,
    setDeletingTodoId,
  } = useTodos()

  return (
    <>
      <Head title="Todo List" description="Manage your todos" />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">My Todos</h1>
                <p className="text-gray-500 mt-2 text-sm">
                  {todos.length} {todos.length === 1 ? 'task' : 'tasks'} •{' '}
                  {todos.filter((t) => t.completed).length} completed
                </p>
              </div>
              <Button
                onClick={openCreateForm}
                className="gap-2 text-white shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: colors.brand.primary }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    colors.brand.primaryHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = colors.brand.primary)
                }
              >
                <Plus className="w-5 h-5" />
                Add Todo
              </Button>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-800 font-medium">Error loading todos</p>
                <p className="text-red-700 text-sm mt-1">{error}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={loadTodos}
                  className="mt-2"
                >
                  Try Again
                </Button>
              </div>
            </div>
          )}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <TodoList
              todos={todos}
              isLoading={isLoading}
              onToggle={handleToggleTodo}
              onEdit={handleEdit}
              onDelete={setDeletingTodoId}
            />
          </div>
        </div>

        <Dialog
          open={isFormOpen}
          onOpenChange={(open) => !open && handleCloseForm()}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingTodo ? 'Edit Todo' : 'Create New Todo'}
              </DialogTitle>
            </DialogHeader>
            <TodoForm
              todo={editingTodo}
              onSubmit={editingTodo ? handleUpdateTodo : handleCreateTodo}
              onCancel={handleCloseForm}
              isSubmitting={isSubmitting}
            />
          </DialogContent>
        </Dialog>

        <SimpleConfirmationDialog
          open={!!deletingId}
          onClose={() => setDeletingTodoId(null)}
          onConfirm={handleDeleteTodo}
          title="Delete Todo"
          description="Are you sure you want to delete this todo? This action cannot be undone."
          confirmText="Delete"
          isDangerous
        />
      </div>
    </>
  )
}

export default TodosPage
