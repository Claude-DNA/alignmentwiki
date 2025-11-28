/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wiki': {
          'bg': '#fafafa',
          'surface': '#ffffff',
          'border': '#e5e5e5',
          'text': '#1a1a1a',
          'text-muted': '#6b6b6b',
          'accent': '#2563eb',
          'accent-hover': '#1d4ed8',
          'sidebar': '#f5f5f5',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
