module.exports = {
  purge: [
      'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: {
        basic: '#ffffff'
      },
      black: {
        basic: '#000000',
        emily_main: '#090b0f',
        emily_pl2: '#120609',
        emily_pl: '#05070d',
      },
      gray: {
        home_charcoal1: '#161616',
        home_charcoal2: '#0e0e0e',
        see_more: '#9e9e9e',
        home_tiles: '#191919',
        artist: '#999999',
        control_bg: '#151515',
        border: '#1f1f1f',
        controls: '#999999',
        time_vol: '#323232',
        elapsed: '#a9a9a9',
        search_field: '#262626',
      },
      blue: {
        new_blue: '#192055',
        right_main: '#111821',
        dark_teal: '#274767',
        panel1: '#2b3946',
        panel2: '#242a30',
        mix_title: '#f9fbfc',  // or white?
        liked_a: '#2b1a96',
        liked_b: '#778a85',
        icon: '#175DEE',
      },
      red: {
        top_upper: '#901b22',
        top_lower: '#3f1113',
        bottom_upper: '#340d0f',
        almost_black: '#0e0e0e',
      },
      green: {
        play: '#42ae43',
      },

    },
    extend: {
      gridTemplateColumns: {
        '3': 'repeat(3, minmax(750px, 1fr))'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
