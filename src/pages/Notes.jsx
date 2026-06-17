import { useState, useEffect } from "react"
import { AiFillDelete } from "react-icons/ai"
import { notesAPI } from "../services/notesAPI"
import AlertBox from "../components/AlertBox"
import GenericTable from "../components/GenericTable"

export default function Notes() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [notes, setNotes] = useState([])

    const [dataForm, setDataForm] = useState({
        title: "",
        content: "",
        status: "",
    })

    useEffect(() => {
        loadNotes()
    }, [])

    const loadNotes = async () => {
        try {
            setLoading(true)
            setError("")

            const data = await notesAPI.fetchNotes()
            setNotes(data)
        } catch (err) {
            setError("Gagal memuat catatan")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target

        setDataForm({
            ...dataForm,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            setError("")
            setSuccess("")

            await notesAPI.createNote(dataForm)

            await loadNotes()

            setSuccess("Catatan berhasil ditambahkan!")

            setDataForm({
                title: "",
                content: "",
                status: "",
            })

            setTimeout(() => {
                setSuccess("")
            }, 3000)
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id) => {
        const konfirmasi = window.confirm(
            "Yakin ingin menghapus catatan ini?"
        )

        if (!konfirmasi) return

        try {
            setLoading(true)
            setError("")
            setSuccess("")

            await notesAPI.deleteNote(id)

            await loadNotes()

            setSuccess("Catatan berhasil dihapus!")

            setTimeout(() => {
                setSuccess("")
            }, 3000)
        } catch (err) {
            setError(
                `Terjadi kesalahan saat menghapus data: ${err.message}`
            )
        } finally {
            setLoading(false)
        }
    }

    return (
    <>
        {error && (
            <AlertBox type="error">
                {error}
            </AlertBox>
        )}

        {success && (
            <AlertBox type="success">
                {success}
            </AlertBox>
        )}

        <div className="min-h-screen bg-slate-100 p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-800">
                    Notes App
                </h1>
                <p className="text-slate-500">
                    Kelola catatan dengan mudah menggunakan Supabase
                </p>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

                {/* Form */}
                <div className="xl:col-span-1">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-xl font-bold mb-5">
                            Tambah Catatan
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            <input
                                type="text"
                                name="title"
                                value={dataForm.title}
                                onChange={handleChange}
                                placeholder="Masukkan judul catatan"
                                disabled={loading}
                                required
                                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />

                            <textarea
                                name="content"
                                value={dataForm.content}
                                onChange={handleChange}
                                placeholder="Masukkan isi catatan"
                                rows="8"
                                disabled={loading}
                                required
                                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition"
                            >
                                {loading
                                    ? "Mohon Tunggu..."
                                    : "Tambah Catatan"}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Table */}
                <div className="xl:col-span-3">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                        <div className="flex items-center justify-between p-6 border-b">
                            <h2 className="text-xl font-bold">
                                Daftar Catatan
                            </h2>

                            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold">
                                {notes.length} Catatan
                            </span>
                        </div>

                        {loading ? (
                            <div className="p-10 text-center">
                                Memuat data...
                            </div>
                        ) : notes.length === 0 ? (
                            <div className="p-10 text-center text-gray-500">
                                Belum ada catatan
                            </div>
                        ) : (
                            <GenericTable
                                columns={[
                                    "#",
                                    "Judul",
                                    "Isi Catatan",
                                    "Aksi",
                                ]}
                                data={notes}
                                renderRow={(note, index) => (
                                    <>
                                        <td className="px-6 py-4">
                                            {index + 1}
                                        </td>

                                        <td className="px-6 py-4 font-semibold text-emerald-600">
                                            {note.title}
                                        </td>

                                        <td className="px-6 py-4">
                                            {note.content}
                                        </td>

                                        <td className="px-6 py-4">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleDelete(note.id)
                                                }
                                                disabled={loading}
                                                className="text-red-500 hover:text-red-700 transition"
                                            >
                                                <AiFillDelete size={22} />
                                            </button>
                                        </td>
                                    </>
                                )}
                            />
                        )}
                    </div>
                </div>

            </div>
        </div>
    </>
)}