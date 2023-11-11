import axios from "axios"

const initialValue = {
    todos: [],
    editprops: {
        id: 0,
        value: ""
    },
    isLoading: false,
    user: {
        id: 0,
        TokenStatus: false
    }
}

function todoReducer(state = initialValue, action) {
    switch (action.type) {
        case "START_FETCHING":
            return {
                ...state,
                isLoading: true
            }
        case "SUCCESS_GET_TODO":
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case "GET_TODO":
            let editValue = {
                id: action.payload.id,
                value: action.payload.value
            }
            return {
                ...state,
                editprops: editValue
            }
        // case "ADD_TODO":
        //     let newTodos = {
        //         id: Date.now(),
        //         value: action.payload.value,
        //         finish: action.payload.finish
        //     }

        //     return {
        //         ...state,
        //         todos: [...state.todos, newTodos],
        //     }

        // case "DELETE_TODO":
        //     let deleteTodos = state.todos.filter((todos) => todos.id !== action.payload)
        //     return {
        //         ...state,
        //         todos: deleteTodos,

        //     }

        // case "SWITCH_TODO":
        //     let finishTodos = state.todos.map((item) => {
        //         if (item.id === action.payload) {
        //             if (item.finish === true)
        //                 return { ...item, finish: false };
        //             return { ...item, finish: true };
        //         }
        //         return item
        //     })
        //     return {
        //         ...state,
        //         todos: finishTodos,
        //     }



        // case "EDIT_TODO":
        //     let editTodos = state.todos.map((item) => {
        //         if (item.id === action.payload.id) {
        //             return { ...item, value: action.payload.value };
        //         }
        //         return item
        //     })
        //     return {
        //         todos: editTodos,
        //         editprops: {
        //             id: 0,
        //             value: ""
        //         }
        //     }

        default:
            return state
    }
}
function startFetching() {
    return {
        type: "START_FETCHING"
    }
}
function successGetTodo(data) {
    return {
        type: "SUCCESS_GET_TODO",
        payload: data
    }
}
export function getAllTodo() {
    return async function (dispatch) {
        dispatch(startFetching())
        const token = localStorage.getItem("token")
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };
        const { data } = await axios.get(`http://localhost:3000/todos/`, { headers })
        dispatch(successGetTodo(data.todos))
    }
}
export function toggleTodo(id) {
    return async function (dispatch) {
        dispatch(startFetching())
        const token = localStorage.getItem("token")
        console.log(id)
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };
        await axios.patch(`http://localhost:3000/todos/${id}/toggle`, {}, { headers })
        dispatch(getAllTodo())
    }
}
export function addTodo(data) {
    return async function (dispatch) {
        console.log(data)
        dispatch(startFetching())
        const token = localStorage.getItem("token")
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };
        await axios.post(`http://localhost:3000/todos/`, { data }, { headers })

        dispatch(getAllTodo())
    }
}
export function getEditTodo(props) {
    return {
        type: "GET_TODO",
        payload: props
    }
}
export function editTodo(data) {
    return async function (dispatch) {
        dispatch(startFetching())
        const token = localStorage.getItem("token")
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };
        await axios.patch(`http://localhost:3000/todos/${data.id}`, { data }, { headers })

        dispatch(getAllTodo())
    }
}
export function deleteTodo(id) {
    return async function (dispatch) {
        dispatch(startFetching())
        const token = localStorage.getItem("token")
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };
        await axios.delete(`http://localhost:3000/todos/${id}`, { headers })

        dispatch(getAllTodo())
    }
}
export function filterTodo(id) {
    return {
        type: "FILTER_TODO",
        payload: id
    }
}

export default todoReducer