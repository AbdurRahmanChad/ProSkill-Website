export default function appReducer(state, action) {
  switch (action.type) {
    case "SET_BACKGROUND_COLOR":
      console.log(action.payload);
      state["backgroundColor"] = action.payload.backgroundColor;
      state["borderColor"] = action.payload.borderColor;
      state["textColor"] = action.payload.textColor;
      return state;

    default:
      return state;
  }
}
