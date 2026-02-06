/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                surface: '#121212',
                primary: '#8b5cf6', // Violet
                secondary: '#06b6d4', // Cyan
                accent: '#f472b6', // Pink
            }
        },
    },
    plugins: [],
}
