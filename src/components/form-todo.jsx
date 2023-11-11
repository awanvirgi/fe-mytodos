function Formtodo() {
    return (
        <div className="mb-10">
            <form className="flex gap-5 items-end">
                <input className="bg-transparent border-b-4 border-blue-400 outline-none text-white h-min grow pb-1 sm:text-lg"
                    placeholder="Masukan Kegiatan"
                    type="text"
                    value="" />
                <button className="bg-blue-400 rounded px-1 py-4 font-bold text-white">Tambah +</button>
            </form>
        </div>
    )
}
export default Formtodo