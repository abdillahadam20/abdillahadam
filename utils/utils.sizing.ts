const useFontSize = (getFontSize: string): string => {
  let classFontSize = ''
  switch (getFontSize) {
    case 'small':
      classFontSize = 'text-base text-sunsetorange-100'
      break
    case 'medium':
      classFontSize = 'text-xl text-sunsetorange-100'
      break
    case 'large':
      classFontSize = 'text-2xl text-sunsetorange-100'
      break
    case 'xl':
      classFontSize = 'text-4xl text-sunsetorange-100'
      break
    case '2xl':
      classFontSize = 'text-6xl text-sunsetorange-100'
      break
    default:
      classFontSize = 'text-base text-sunsetorange-100'
  }
  return classFontSize
}

export { useFontSize }
