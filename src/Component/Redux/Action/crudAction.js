import { type } from "@testing-library/user-event/dist/type"
import { ADD, DELETE, UPDATE } from "../Reducer/types"

export const addData =  (obj) => {
    return (dispatch) => {
        dispatch({
            type : ADD,
            obj : obj
        })
    }
}
export const deleteData =  (i) => {
    return (dispatch) => {
        dispatch({
            type : DELETE,
            i : i
        })
    }
}
export const upadateData =  (obj) => {
    return (dispatch) => {
        dispatch({
            type : UPDATE,
            obj : obj
        })
    }
}