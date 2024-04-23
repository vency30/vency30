import { ADD, DELETE, SUCCESSS, UPDATE } from "./types";

const intialstate = {
    student : []
}

export const apiReducer = (state = intialstate , action) => {
    switch(action.type)
    {
        case SUCCESSS : 
        return{
          student : action?.data
        }
         default  : 
           return state;
    }
 }