 
const initialState = {
    //OBJENIN KEY'I 'TODOLIST'
    todoList:[{id: new Date().getTime(), text:"To do list", completed:true}]
}

 export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case "ADD":
        return {todoList : [...state.todoList, {id:new Date().getTime(), text:payload, completed:false}]  }
    case "CLEAR":
        return initialState;
    case "DELETE":
        return {todoList : [...state.todoList, {completed:true}]  }
    case "TOGGLE":
        return {todoList : [...state.todoList, {completed:false}]  }

    default:
        return state
    }
}
 