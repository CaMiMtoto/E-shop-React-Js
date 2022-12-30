/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#1068BF",
                "secondary": "#FF9900",
            },
        },
    /*    fontFamily: {
            'sans': ['Rubik', ...defaultTheme.fontFamily.sans],
        },*/
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
    important: true,
    prefix: "tw-",
}