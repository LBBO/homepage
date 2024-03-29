export const clearSelection = () => {
  if (window.getSelection) {
    if (window.getSelection()?.empty) {  // Chrome
      window.getSelection()?.empty()
    } else if (window.getSelection()?.removeAllRanges) {  // Firefox
      window.getSelection()?.removeAllRanges()
    }
  } else {
    // @ts-ignore selection doesn't exist on document
    if (document.selection) {  // IE?
      // @ts-ignore selection doesn't exist on document
      document.selection.empty()
    }
  }
}

export const pathToAssets = (): string => {
  const isDev = window.process?.env?.NODE_ENV === 'development'
  const prodPath = '_assets/'
  const devPath = 'src/assets/'

  return isDev ? devPath : prodPath
}
