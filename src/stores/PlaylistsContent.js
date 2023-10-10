import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const playlistsContent = ref([
        {
            id: 1,
            nome: 'Lush Lofi',
            capa: "../images/lush-lofi-playlist.jpg",
            musicas: [
                {
                    id: 10,
                    nomeMusica: 'Lofi Study',
                    localMusica: 'src/songs/lofi-study-112191.mp3',
                    data: 20/10/2023
                },
                {
                    id: 11,
                    nomeMusica: 'Good Night',
                    localMusica: 'src/songs/good-night-160166.mp3',
                    data: 21/10/2023
                }
            ]
        },
        {
            id: 2,
            nome: 'Chill Lofi Beats',
            capa: "chill-lofi-beats.jpg"
        },
        {
            id: 3,
            nome: 'Lofi Beats',
            capa: "lofi-beats.jpg"
        },
        {
            id: 4,
            nome: 'Lofi',
            capa: "lofi.jpg"
        },
        {
            id: 5,
            nome: 'Chill Lofi Study Beats',
            capa: "study-beats-lofi.jpg"
        },
        {
            id: 6,
            nome: 'Study Lofi',
            capa: "study-lofi.jpg"
        }
    ])