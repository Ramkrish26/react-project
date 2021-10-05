export const CREATE_TODO = 'CREATE_TODO'
export const createTodo = text => (
    {
        type: CREATE_TODO,
        paylod: { text }
    }
)

export const REMOVE_TODO = 'REMOVE_TODO'
export const removeTodo = text => (
    {
        type: REMOVE_TODO,
        paylod: { text }
    }
)