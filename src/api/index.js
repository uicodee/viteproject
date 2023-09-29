export const getTodos = () => {
    return fetch('https://dummyjson.com/todos').then(res => res.json())
}

export const updateTodo = (todoId, completed) => {
    fetch(`https://dummyjson.com/todos/${todoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            completed: completed,
        })
    })
        .then(res => res.json())
}

export const newTodo = (todo) => {
    return fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: todo,
            completed: false,
            userId: 5,
        })
    })
        .then(res => res.json())
}