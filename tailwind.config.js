/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // très important pour step 2

  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
     colors: {
        twilight: {
          bg: '#0D1117',           // fond principal
          surface: '#161B22',      // sections/cadres
          text: '#E6EDF3',         // texte clair
          indigo: '#4B0082',       // éléments profonds
          violet: '#8A2BE2',       // boutons principaux
          lavender: '#DA70D6',     // détails doux
          green: '#00FFB3',        // code, éléments tech
          pink: '#FF9AC1',         // touche féminine
          haloLeft: '#FF80AB',     // effet halo gauche
          haloRight: '#B388FF',    // effet halo droit
          white: '#F5F5F5',        // contrastes
          cyberViolet: '#A972FF',
          vintageRose: '#E6A3B4',
          electricPink: '#FF6EC7',
          techMint: '#00FFC6',
          royalIndigo: '#7D5FFF',
          retroPeach: '#FDC5A7',
          aquaTeal: '#2EF1D6',
          electricCoral: '#FF6F61',
          matrixGreen: '#00FF99',
          vintageYellow: '#FFD369',
            techBlue: '#3EE0FF',

        },

        light: {
          primary: '#02315E',
          secondary: '#00457E',
          accent: '#2F70AF',
          rose: '#B9848C',
          violet: '#806491',
        },
     },
     
     keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        floatSlow: 'float 6s ease-in-out infinite',
        floatMed: 'float 4s ease-in-out infinite',
        floatFast: 'float 2s ease-in-out infinite',
      },

    },
  },
  plugins: [],
}
