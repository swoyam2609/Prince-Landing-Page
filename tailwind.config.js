/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins-black' : 'poppins-black',
      'poppins-blackitalic' : 'poppins-blackitalic',
      'poppins-bold' : 'poppins-bold',
      'poppins-bolditalic' : 'poppins-bolditalic',
      'poppins-extrabold' : 'poppins-extrabold',
      'poppins-extralight' : 'poppins-extalight',
      'poppins-extralightitalic' : 'poppins-extalightitalic',
      'poppins-italic' : 'poppins-italic',
      'poppins-light' : 'poppins-light',
      'poppins-lightitalic' : 'poppins-lightitalic',
      'poppins-medium' : 'poppins-medium',
      'poppins-mediumitalic' : 'poppins-mediumitalic',
      'poppins-regular' : 'poppins-regular',
      'poppins-semibold' : 'poppins-semibold',
      'poppins-semibolditalic' : 'poppins-semibolditalic',
      'poppins-thin' : 'poppins-thin',
      'poppins-thinitalic' : 'poppins-thinitalic',
    },
    colors: {
      'pinkbg' : "#EFDAFF",
      'darkpurple' : "#370360",
      'lightpurple' : "#D7A5FF",
      'white' : "#FFFFFF",
      'lightgray' : "#F1F1F1",
    },
    extend: {},
  },
  plugins: [],
}