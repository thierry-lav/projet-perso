export const toggleExp = ({ state }) => {
  state.filters.experience = !state.filters.experience;
};

export const toggleLoisir = ({ state }) => {
  state.filters.loisir = !state.filters.loisir;
};

export const addUser = ({ state }, value) => {
  state.users.push(value);
};
