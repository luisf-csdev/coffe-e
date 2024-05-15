import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        yellow: {
          300: '#F1E9C9',
          500: '#DBAC2C',
          700: '#C47F17',
        },
        purple: {
          300: '#EBE5F9',
          500: '#8047F8',
          700: '#4B2995',
        },
        base: {
          title: '#272221',
          subtitle: '#403937',
          text: '#574F4D',
          label: '#8D8686',
          hover: '#D7D5D5',
          button: '#E6E5E5',
          input: '#EDEDED',
          card: '#F3F2F2',
        },
        background: '#FAFAFA',
      },
      fontSize: {
        titleXL: [
          '3rem',
          {
            lineHeight: '1.3',
            fontWeight: '800',
          },
        ],
        titleL: [
          '2rem',
          {
            lineHeight: '1.3',
            fontWeight: '800',
          },
        ],
        titleM: [
          '1.5rem',
          {
            lineHeight: '1.3',
            fontWeight: '800',
          },
        ],
        titleS: [
          '1.25rem',
          {
            lineHeight: '1.3',
            fontWeight: '700',
          },
        ],
        titleXS: [
          '1.125rem',
          {
            lineHeight: '1.3',
            fontWeight: '700',
          },
        ],
        textL: [
          '1.25rem',
          {
            lineHeight: '1.3',
          },
        ],
        textM: [
          '1rem',
          {
            lineHeight: '1.3',
          },
        ],
        textS: [
          '0.875rem',
          {
            lineHeight: '1.3',
            fontWeight: '400',
          },
        ],
        textXS: [
          '0.75rem',
          {
            lineHeight: '1.3',
            fontWeight: '700',
          },
        ],
        tag: [
          '0.625rem',
          {
            lineHeight: '1.3',
            fontWeight: '700',
          },
        ],
        buttonL: [
          '0.875rem',
          {
            lineHeight: '1.6',
            fontWeight: '700',
          },
        ],
        buttonM: [
          '0.75rem',
          {
            lineHeight: '1.6',
            fontWeight: '400',
          },
        ],
      },
      fontFamily: {
        baloo: ['"Baloo 2"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
