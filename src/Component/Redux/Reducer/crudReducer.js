import React from 'react'
import { ADD, DELETE, UPDATE } from './types';

const intialstate = {
    ary : []
}

export const crudReducer = (state = intialstate , action) => {
    switch(action.type){
        case ADD : 
        console.log(action.obj);
          return{
            ary : [...state.ary , action.obj]
          } ;
        case DELETE : 
         let ary1 = [...state?.ary];
         ary1?.splice(action.i , 1);
         return {
            ary : ary1
         }
        case UPDATE :
           let newAry = [...state?.ary];
           let index = newAry?.findIndex(x => x.id == action.obj.id);
           newAry?.splice(index, 1 , action.obj);
          return {
            ary : newAry
          };
        default  : 
          return state;

    }
  return (
   <></>
  )
}

export default crudReducer
