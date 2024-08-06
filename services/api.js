import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://hutocdoatyomzppfdzxf.supabase.co/rest/v1/posts?select=id',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1dG9jZG9hdHlvbXpwcGZkenhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5NjA2NTAsImV4cCI6MjAzODUzNjY1MH0.7sgxUym4drxQReFTCbGVRXBZjQfEgcLyOcfyPQN5CB0",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1dG9jZG9hdHlvbXpwcGZkenhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5NjA2NTAsImV4cCI6MjAzODUzNjY1MH0.7sgxUym4drxQReFTCbGVRXBZjQfEgcLyOcfyPQN5CB0"
    }
})