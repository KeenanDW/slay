import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      colors: {
        shade: {
          '01': '#FFFFFF',
          '02': '#000000',
          '02-5': '#222222',
          '02-30': '#222222',
        },
        neutral: {
          '01': '#F7F7F7',
          '02': '#EBEBEB',
          '03': '#DDDDDD',
          '04': '#D3D3D3',
          '05': '#C2C2C2',
          '06': '#B0B0B0',
          '07': '#717171',
          '08': '#5E5E5E',
        },
        primary: {
          DEFAULT: '#8D78EA',
          '01': '#E9E4FF',
          '02': '#D4CAFF',
          '03': '#BFB0FF',
          '04': '#9F8CF2',
          '05': '#8D78EA',
          '06': '#755DDE',
          '07': '#462EAD',
          '08': '#271948',
        },
        secondary: {
          DEFAULT: '#234E70',
          '01': '#D9EFFF',
          '02': '#9BC4E1',
          '03': '#639FCB',
          '04': '#4B85B3',
          '05': '#234E70',
          '06': '#174263',
          '07': '#0C314E',
          '08': '#002441',
        },
        tertiary: {
          DEFAULT: '#8AADA0',
          '01': '#E8F8F2',
          '02': '#D2E8DF',
          '03': '#BDCFC2',
          '04': '#8AADA0',
          '05': '#7A9C90',
          '06': '#698B80',
          '07': '#587A70',
          '08': '#36585D',
        },
        quaternary: {
          DEFAULT: '#8AADA0',
          '01': '#FFF2F2',
          '02': '#FEE2E2',
          '03': '#FECACA',
          '04': '#FDAAA5',
          '05': '#E27777',
          '06': '#DC5454',
          '07': '#D03636',
          '08': '#B91C1C',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;