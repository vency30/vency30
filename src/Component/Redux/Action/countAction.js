import { type } from "@testing-library/user-event/dist/type"
import { MINUS, PLUS } from "../Reducer/types"

export const countPlus =  () => {
    return (dispatch) => {
        dispatch({
            type : PLUS
        })
    }
}
export const countMinus =  () => {
    return (dispatch) => {
        dispatch({
            type : MINUS
        })
    }
}