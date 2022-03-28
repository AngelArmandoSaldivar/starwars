export default function appReducer(state, action) {    
  switch (action.type) {
    case "ADD_FAVORITES":
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.name !== action.payload),
      };   
    default:
      return state;
  }
}
