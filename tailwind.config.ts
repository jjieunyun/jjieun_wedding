/** @type {import('tailwindcss').Config} */

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_2000 = { ...Array.from(Array(2001)).map((_, i) => `${i}px`) };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ['md'],
    },
    {
      pattern: /h-(\d+)/,
      variants: ['sm', 'md', 'lg'],
    },
    'no-scrollbar',
  ],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_2000,
      minHeight: px0_2000,
      maxWidth: px0_2000,
      maxHeight: px0_2000,
      spacing: px0_200,
      borderRadius: px0_100,
      width: px0_2000,
      height: px0_2000,
      inset: px0_2000,
      colors: {
        'transparent': 'transparent',
        'current': 'currentColor',
        'sendy-blue-strong': '#192fa4',
        'sendyBlue': '#2e58ec',
        'sendy-blue-light': '#e3eeff',
        'correct': '#1db964',
        'white': '#ffffff',
        'lightGrey': '#dedede',
        'background-gray-light': '#f2f3f6',
        'background-gray-lightest': '#fafbfc',
        'gray-scale-blue-100': '#161820',
        'gray-scale-blue-200': '#485464',
        'gray-scale-blue-300': '#8a929e',
        'gray-scale-blue-400': '#c3c9ce',
        'gray-scale-blue-500': '#e4e8ed',
        'light-yellow': '#F4F1DE',
        'wedding-red' : '#C4282D'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'slide-up': 'slideUp 0.3s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'gradientWave': 'gradientWave 3s ease-in-out infinite',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(5%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(5%)', opacity: '0' },
        },
        gradientWave: {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
        },
      },
    },
    fontFamily: {
      sans: ['Noto Sans KR', 'sans-serif'],
      GMarket: ['GmarketSans', 'sans-serif'],
      pretendard: [
        'Pretendard Variable',
        'Pretendard',
        '-apple-system',
        'BlinkMacSystemFont',
        'system-ui',
        'Roboto',
        '"Helvetica Neue"',
        '"Segoe UI"',
        '"Apple SD Gothic Neo"',
        '"Noto Sans KR"',
        '"Malgun Gothic"',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        'sans-serif',
      ],
    },
    screens: {
      'laptop': { max: '1199px' },
      'laptop-tablet': { max: '1199px', min: '992px' },
      'lg': { max: '1023px' },
      'tablet': { max: '991px' },
      'tablet-md': { max: '991px', min: '768px' },
      'md': { max: '767px' },
      'mobile': { max: '394px' },
    },
  },
};