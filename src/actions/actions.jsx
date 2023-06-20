export const getUser = (state) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  state = user;
};
