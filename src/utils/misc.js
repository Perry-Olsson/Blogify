export const getLocalTheme = () => {
  return window.localStorage.getItem('theme') || 'light'
}