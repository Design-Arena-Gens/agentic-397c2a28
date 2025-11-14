import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moroccan: {
          red: '#C1272D',
          green: '#006233',
          gold: '#D4AF37',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.8s ease-out',
        'grab': 'grab 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        grab: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(10px) rotate(-5deg)' },
          '75%': { transform: 'translateX(30px) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
