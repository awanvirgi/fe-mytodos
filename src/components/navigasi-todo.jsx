import { useState } from "react"
import { useDispatch } from "react-redux"
import { getActiveTodo, getAllTodo, getDoneTodo } from "../redux/reducers/todo-reducers"

function NavigasiLink() {
    const dispatch = useDispatch()
    const [list, setList] = useState("semua")
    return (
        <ul className="flex divide-x border-x border-blue-400 border-t w-min">
            <li className={`font-bold border-blue-400 flex p-2 ${(list === "semua") ? "text-blue-400" : "opacity-40"}`}
                onClick={(e) => {
                    e.preventDefault()
                    setList("semua")
                    dispatch(getAllTodo())
                }}>
                Semua
            </li>
            <li className={`font-bold border-blue-400 flex p-2 ${(list === "done")?"text-blue-400" : "opacity-40"}`}
                onClick={(e) => {
                    e.preventDefault()
                    setList("done")
                    dispatch(getActiveTodo())
                }}>
                Berjalan
            </li>
            <li className={`font-bold border-blue-400 flex p-2 ${(list === "active")?"text-blue-400" : "opacity-40"}`}
                onClick={(e) => {
                    e.preventDefault()
                    setList("active")
                    dispatch(getDoneTodo())
                }}>
                Selesai
            </li>
        </ul>
    )
}
export default NavigasiLink