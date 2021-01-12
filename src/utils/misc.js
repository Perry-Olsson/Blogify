export const getLocalTheme = () => {
  const user = JSON.parse(window.localStorage.getItem("loggedUser"));
  return user ? user.theme : "light";
};