import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const playlistsContent = ref([
        {
            id: 1,
            nome: 'Lush Lofi',
            capa: "../images/lush-lofi-playlist_resized.png",
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
            capa: "../images/chill-lofi-beats_resized.png"
        },
        {
            id: 3,
            nome: 'Lofi Beats',
            capa: "../images/lofi-music.jpeg"
        },
        {
            id: 4,
            nome: 'Lofi',
            capa: "../images/lofi_resized.png"
        },
        {
            id: 5,
            nome: 'Chill Study Beats',
            capa: "../images/study-beats-lofi_resized.png"
        },
        {
            id: 6,
            nome: 'Study Lofi',
            capa: "../images/study-lofi_resized.png"
        },
        {
            id: 7,
            nome: 'Lofi Rain',
            capa: "../images/R.jpeg"
        },
        {
            id: 8,
            nome: 'Relaxing Music',
            capa: "../images/capa-lofi.jpeg"
        },
    ])