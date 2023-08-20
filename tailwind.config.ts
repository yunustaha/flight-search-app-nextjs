import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3367d6',
        secondary: 'white',
        textLabel: colors.gray[600]
      },
      backgroundImage: {
        'primary-photo': "linear-gradient(rgba(88, 87, 87, 0.5), rgba(88, 87, 87, 0.5)), url('/images/plane.jpg')"
      },
    },
  },
  plugins: [],
}
export default config
