export const initialState = {
  theme: "light",
  view: "grid",
};

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    case "TOGGLE_VIEW":
      return {
        ...state,
        view: state.view === "grid" ? "list" : "grid",
      };

    default:
      return state;
  }
};