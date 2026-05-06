export const initialState = {
  theme: "light",
  search: "",
  category: "",
};

export const settingsReducer = (state, action) => {
  switch (action.type) {

    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    default:
      return state;
  }
};