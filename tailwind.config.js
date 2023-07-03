/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero-pattern': `linear-gradient(
            to right bottom,
            rgba(5, 8, 16, 0.6),
            rgba(5, 8, 16, 0.6)
          ), url(/src/assets/hero-bg.svg)`
      },
      colors: {
        primary: '#14e956;',
        dark: '1e2128'
      },
      backgroundColor: {
        primary: '#10e956',
        "primary-dark": "#0c8c34",
        dark: "#1e2128",
        "green-deem": 'rgba(20,233,88,.157)'
      }
      
    },
  },
  plugins: [],
}
