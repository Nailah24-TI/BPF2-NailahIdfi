import axios from 'axios'


const API_URL = "https://ezcjhyvrtegjdfibgfcz.supabase.co/rest/v1/note"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6Y2poeXZydGVnamRmaWJnZmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzU4OTksImV4cCI6MjA5NzIxMTg5OX0.dJIXBxstHMammUhhhB-AEgyiMGNveBiyTxHa34Jojgg"

const headers = {
    apikey: "YOUR_API_KEY",
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, {
            headers,
        })

        return response.data
    },

    async createNote(data) {
        const response = await axios.post(
            API_URL,
            [
                {
                    title: data.title,
                    content: data.content,
                    status: data.status || "aktif",
                },
            ],
            {
                headers,
            }
        )

        return response.data
    },

    async deleteNote(id) {
        const response = await axios.delete(
            `${API_URL}?id=eq.${id}`,
            {
                headers,
            }
        )

        return response.data
    },
}

