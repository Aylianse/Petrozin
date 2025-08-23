/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Business Card Color Palette
        'petrozin-dark-grey': 'rgb(var(--petrozin-dark-grey))',
        'petrozin-orange': 'rgb(var(--petrozin-orange))',
        'petrozin-red': 'rgb(var(--petrozin-red))',
        'petrozin-white': 'rgb(var(--petrozin-white))',
        'petrozin-light-grey': 'rgb(var(--petrozin-light-grey))',
        'petrozin-medium-grey': 'rgb(var(--petrozin-medium-grey))',
        
        // Legacy colors for backward compatibility
        'petrozin-navy': 'rgb(var(--petrozin-navy))',
        'petrozin-gold': 'rgb(var(--petrozin-gold))',
        'petrozin-sky': 'rgb(var(--petrozin-sky))',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-orange-red': 'linear-gradient(135deg, var(--petrozin-orange) 0%, var(--petrozin-red) 100%)',
        'gradient-orange-red-horizontal': 'linear-gradient(90deg, var(--petrozin-orange) 0%, var(--petrozin-red) 100%)',
      },
    },
  },
  plugins: [],
}

