const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                'footer': '#103732',
                'copyright': '#2CA999',
                'h1': '#103732',
                'h2': '#4D774E',
                'linear-top': '#508062',
                'linear-bottom': '#174A41',
                'form': '#F2B248',
                'button': '#103732',
            },
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#0B2825",
                    "accent":"#174A41",
                },
            },
        ],
    },

    plugins: [require('@tailwindcss/forms'), require('daisyui')],
};
