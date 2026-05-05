export const initialState = {
  theme: "light",
  view: "grid",
  search: "",
};

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};