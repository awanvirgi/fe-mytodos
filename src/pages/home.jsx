import Formtodo from "../components/form-todo"
import NavigasiLink from "../components/navigasi-todo"
import TodolistAll from "../components/todolist_all"

function Home() {
    return (
        <div className="">
            <div className="flex flex-col border-4 py-10 border-blue-400 rounded p-4 w-full max-w-[600px]">
                <h1 className="text-2xl font-bold mb-10 text-blue-400 text-center sm:text-3xl">
                    Mau Lakukan Apa Hari ini???
                </h1>
            <Formtodo />
            <NavigasiLink />
            <TodolistAll />
            </div>
        </div>
    )
}

export default Home