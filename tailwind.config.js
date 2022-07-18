/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'azure': '#0079FF',
        'slateGray': '#697C9A',
        'queenBlue': '#4B6A9B',
        'gunMetal': '#2B3442',
        'ghostWhite': '#F6F8FF',
        'snowWhite': '#FEFEFE',
        'white': '#FFFFFF',
        'darkGunMetal': '#141D2F',
        'yankeesBlue': '#1E2A47',
        'tartOrange': '#F74646',
      },
      fontFamily: {
        primary : ['Space Mono', 'sans-serif'],
      },
      fontSize: {
        fs_h1: '1.625rem',
        fs_h2: '1.375rem',
        fs_h3: '1rem',
        fs_h4: '.8125rem',
        fs_body: '.8125rem',
      },
      fontWeight: {
        fw_h1: '700',
        fw_h2: '700',
        fw_h3: '300',
        fw_h4: '300',
        fw_body: '300',
      },
      lineHeight: {
        lh_h1: '2.375rem',
        lh_h2: '2.0625rem',
        lh_h3: '1.5rem',
        lh_h4: '1.25rem',
        lh_body: '1.5625rem',
      },
      boxShadow: {
        'searchbar': '0 16px 30px -10px rgba(70, 96, 187, .1986)',
      },
    },
  },
  plugins: [],
}
