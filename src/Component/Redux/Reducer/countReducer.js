import { MINUS, PLUS } from "./types";

 
const initialState = {
    count : 10,
    
}

export const countReducer = (state = initialState , action) => {
    switch(action.type){
        case PLUS : 
          return { 
            count : state.count + 1
        }
        case MINUS : 
          return {
             count : state.count - 1
            }
        default : 
          return state ;
    }
}

