import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, addStudentData, deleteFuncData, updateFuncData } from './Redux/Action/apiAction';
import { upadateData } from './Redux/Action/crudAction';
import { DELETE } from './Redux/Reducer/types';

const ApiReduxCrud = () => {
    const blankObj = {_id : 0 , firstName : "" , lastName : "" ,city : '', age : "" , gender : "",hobbies : [] };
    const[obj , setObj] = useState({...blankObj});

    const studentData = useSelector(state => state?.student?.student)

    const dispatch = useDispatch();
    

    

   
    // console.log(studentData);

    const getInp = async (e) => {
        if(e.target.name == "hobbies" )
        {
            if(e.target.checked)
            {
               
                 obj.hobbies = [...obj.hobbies , e.target.value]
            }
            
            else
            {
                obj.hobbies = obj.hobbies.filter(x => x != e.target.value);
            }
        }
        else
        {
    
            obj[e.target.name] = e.target.value;
        }
      
        setObj({...obj});
    }
    const printData = () => {
        if(obj._id == 0)
        {
            dispatch(addStudentData(obj))
            // axios.post('https://student-api.mycodelibraries.com/api/student/add' , obj).then((res) => {
            //     studentData();
            //  
            // })
        }
        else 
        {
            obj.id = obj._id;
            // axios.post('https://student-api.mycodelibraries.com/api/student/update' , obj).then((res) => {
            //     dispatch(upadateData(obj));
            //     studentData();
            // })
            dispatch(updateFuncData(obj))
        }
        setObj({...blankObj});
      
    }
    const editData =(x) => {
        let editObj = x;
        editObj.hobbies = editObj?.hobbies?.split(',');
        setObj({...editObj});
        // setObj({...x});
        
    }
    const deleteData =(id) => {
    // axios.delete(`https://student-api.mycodelibraries.com/api/student/delete?id=${i}`).then((res) => {
    //     dispatch( deleteData(i));
    //     studentData();
    // })
    dispatch(deleteFuncData(id))
    }
  return (
    <>
      <form action="" className='w-50 mx-auto text-start border  border-3 bg-success-subtle p-3 needs-validation' noValidate id="form">
       <div className='col-12 mb-3'>
       <label htmlFor="fname" className='form-label'>First name</label>
        <input type="text" name='firstName' className='w-100 form-control  'value={obj.firstName} onChange= {getInp}/>
       </div>
       <div className='col-12 mb-3'>
       <label htmlFor="lname" className='form-label'>Last name</label>
        <input type="text" name='lastName' className='w-100 form-control 'value={obj.lastName} onChange= {getInp}/>
       </div>
       <div className='col-12 mb-3'>
       <label htmlFor="city" className='form-label'>city</label>
        <input type="text" name='city' className='w-100 form-control 'value={obj.city} onChange= {getInp}/>
       </div>
      
       <div className='col-12 mb-3'>
       <label htmlFor="age" className='form-label'>age</label>
        <input type="number" name='age' className='w-100 form-control 'value={obj.age} onChange= {getInp}/>
       </div>
      

       <div className='col-12 mb-3'>
        <label htmlFor="" className='form-check-label'>Gender</label>
        <br />
        <div className="form-check form-check-inline ">
            <label htmlFor="gender1" className='form-check-label'>male</label>
            <input type="radio" className='form-check-input' value="Male" checked={obj.gender?.includes('Male')} name="gender"  id="gender1"  onChange= {getInp}/>
        </div>
        <div className="form-check form-check-inline ">
            <label htmlFor="gender2" className='form-check-label'>female</label>
            <input type="radio" className='form-check-input' value="Female" checked={obj.gender?.includes('Female')} id="gender2" name="gender"  onChange= {getInp}/>
        </div>
        <div className="form-check form-check-inline ">
            <label htmlFor="gender3" className='form-check-label'>other</label>
            <input type="radio" className='form-check-input' value="Other" checked={obj.gender?.includes('Other')} id="gender3" name="gender"  onChange= {getInp}/>
        </div>
       </div>
       <div className='col-12 mb-3'>
        <label htmlFor="" className='form-check-label'>Hobbies</label>
            <br />
        <div className="form-check form-check-inline ">
         <input type="checkbox" className='from-check-input'  checked={obj.hobbies?.includes('read')} value="read" name="hobbies" onChange= {getInp} />
         <label htmlFor="" className='form-form-check-label  ms-2'>read</label>
        </div>
        <div className="form-check form-check-inline ">
           <input type="checkbox" className='from-check-input'  checked={obj.hobbies?.includes('dance')} value="dance" name="hobbies"  onChange= {getInp}/>
           <label htmlFor="" className='form-form-check-label ms-2 '>dance</label>
        </div>
        <div className="form-check form-check-inline ">
           <input type="checkbox" className='from-check-input'  checked={obj.hobbies?.includes('write')} value="write" name="hobbies"  onChange= {getInp}/>
           <label htmlFor="" className='form-form-check-label  ms-2'>write</label>
        </div>
        <div className="form-check form-check-inline ">
           <input type="checkbox" className='from-check-input'  checked={obj.hobbies?.includes('travel')} value="travel" name="hobbies" onChange= {getInp} />
           <label htmlFor="" className='form-form-check-label  ms-2'>travel</label>
        </div>
       </div>
       <div className="col-12 mb-3 text-center mt-4">
        <button type='button' className='btn btn-success ' onClick = {printData}>submit</button>
       </div>
     </form>
     <table className='table table-bordered  table-hover table-striped table-success mt-5 text-center '>
        <thead>
            <tr>
                <th>Id</th>
                <th>first name</th>
                <th>last name</th>
                <th>Age</th>
                <th>city</th>
                <th>gender</th>
                <th>hobbies</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
           {
             studentData?.map((x,i) => {
                {return (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{x.firstName}</td>
                        <td>{x.lastName}</td>
                        <td>{x.age}</td>
                        <td>{x.city}</td>
                        <td>{x.gender}</td>
                        <td>{x.hobbies}</td>
                        <td>
                            <button className='btn btn-success ' onClick={ () => editData(x)}>edit</button>
                            <button className='btn btn-danger ms-2 ' onClick={() => deleteData(x._id)}>delete</button>
                        </td>
                    </tr>
                )};
             })
           }
        </tbody>
     </table></>
  )
}

export default ApiReduxCrud