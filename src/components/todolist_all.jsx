import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodo } from "../redux/reducers/todo-reducers";
import Card from "./card-todo";

function TodolistAll() {
    const dispatch = useDispatch()
    const { todos, isLoading } = useSelector((state) => state.todo)
    useEffect(() => {
        dispatch(getAllTodo())
    }, [])
    return (
        <div className="p-3 flex flex-col gap-2 border-2 border-blue-400 sm:text-lg">
            {!isLoading ? todos ?
                todos.map((item) => (
                    <Card key={item.id} value={item.task} status={item.status} id={item.id} />
                )) : (
                    <div className="text-center">Ayo mulai! Buat to-do list pertamamu dan nikmati setiap langkah menuju produktivitas</div>
                ) :
                <div className="text-center">Loading ...</div>

            }
        </div>
    );
}
export default TodolistAll