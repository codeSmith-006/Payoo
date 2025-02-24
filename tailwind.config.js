/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],
            },
            // colors: {
            //     btn: "#179800",
            //     ash: "#EFEBE3"
            // },
        },
    },
    plugins: [],
}