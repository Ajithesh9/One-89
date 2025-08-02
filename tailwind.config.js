/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- This line tells Tailwind to scan all your component files
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#121212',
          surface: '#1E1E1E',
          primary: '#BB86FC',
          secondary: '#03DAC6',
          onPrimary: '#000000',
          onSurface: '#FFFFFF',
          onSurfaceSecondary: '#AAAAAA',
        },parents: 'rgb(66, 235, 198)', // Teal
        kids: 'rgb(187, 134, 252)',
      }
    },
  },
  plugins: [],
}