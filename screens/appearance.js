const colorScheme = Appearance.getColorScheme();

function Colouring() {
if (colorScheme === 'dark') {
    return 'black'
  } else if (colorScheme === 'light') {
    return 'white'
  }
}

const background = Colouring()

export { background }