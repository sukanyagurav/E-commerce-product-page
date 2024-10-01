export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(220, 13%, 13%)",
        "dark-blue2": "hsl(220, 13%, 13%)",
        "grayish-blue": "hsl(219, 9%, 45%)",
        "grayish-blue2": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
        "light-white": " hsl(0, 0%, 100%)",
        "light-black": " hsl(0, 0%, 0%)",
        'orange': 'hsl(26, 100%, 55%)',
        'pale-orange': 'hsl(25, 100%, 94%)'
        
      },
    },
    fontFamily: {
      sans: ["Kumbh Sans", " sans-serif"],
    },
  },
  plugins: [],
};
