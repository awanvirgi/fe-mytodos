import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo,editTodo } from "../redux/reducers/todo-reducers"

function Formtodo() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("")
    const { editprops } = useSelector((state) => state.todo)
    useEffect(() => {
        setInput(editprops.value)
    }, [editprops])

    const handleInput = (event) => {
        event.preventDefault()
        let regex = /[%$^@]/;
        if (!input || regex.test(input)) return alert("Mohon isi form dengan benar")
        if (editprops.value === "") {
            let newTodo = {
                task: input,
                status: false
            }
            dispatch(addTodo(newTodo))
        } else {
            let EditTodo = {
                id: editprops.id,
                task: input
            }
            dispatch(editTodo(EditTodo))
        }
        setInput("")
    }
    return (
        <div className="mb-10">
            <form className="flex gap-5 items-end">
                <input className="bg-transparent border-b-4 border-blue-400 outline-none text-white h-min grow pb-1 sm:text-lg"
                    placeholder="Masukan Kegiatan"
                    type="text"
                    value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="bg-blue-400 rounded px-1 py-4 font-bold text-white" onClick={handleInput}>{editprops.value ? "Edit Todo" : "Tambah +"} </button>
            </form>
        </div>
    )
}
export default Formtodo