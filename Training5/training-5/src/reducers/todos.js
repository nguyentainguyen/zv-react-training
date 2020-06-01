const todos = (state = [], action, data) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);

    case "RECEIVE_API_DATA":
      return data;
    default:
      return state;
  }
};

export default todos;
