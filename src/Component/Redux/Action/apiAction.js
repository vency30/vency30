import { type } from "@testing-library/user-event/dist/type"
import { ADD, DELETE, SUCCESSS, UPDATE } from "../Reducer/types"
import axios from "axios"

export const getstudentData =  (obj) => {
    return (dispatch) => {
        axios.get('https://student-api.mycodelibraries.com/api/student/get' ).then((res) => {
            
            dispatch({
                type : SUCCESSS , data : [...res?.data?.data]});
        }).catch((err) => {
            console.log(err);
        })
    }
}
export const addStudentData = (obj) => {
     return(dispatch) => {
        axios.post('https://student-api.mycodelibraries.com/api/student/add' , obj).then((res) => {
                dispatch(getstudentData())
             
            })
     }

}
export const deleteFuncData =  (id) => {
    return (dispatch) => {
        axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${id}`).then((res) => {
       dispatch(getstudentData());
    })
        
    }
}
export const updateFuncData =  (obj) => {
    return (dispatch) => {
        axios.post('https://student-api.mycodelibraries.com/api/student/update' , obj).then((res) => {
               
                dispatch(getstudentData())
            })
    }
}