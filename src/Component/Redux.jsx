import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, upadateData } from './Redux/Action/crudAction';

function Redux ()  {
    
    const [count ,setCount] = useState(0)  ;
    const blankObj = {id : 0 , fname : "" , lname : "" ,email : "", password : "" , age : "", date : "" ,city : "" , gender : "",hobby : [] };
    const[obj , setObj] = useState({...blankObj});
    const ary = useSelector(state => state?.ary?.ary)

    const dispatch = useDispatch();
   
    const getInp = async (e) => {
        if(e.target.name == "hobby" )
        {
            if(e.target.checked)
            {
              
                 obj.hobby = [...obj.hobby , e.target.value]
            }
            
            else
            {
                obj.hobby = obj.hobby.filter(x => x != e.target.value);
            }
        }
        
        else
        {
            // console.log(e, e?.target, e?.target?.checked,  'e')
            obj[e.target.name] = e.target.value;
        }
      
        setObj({...obj});
    }
    const printData = () => {
       if(obj.id == "0")
       {
        let num = count;
        num++;
       setCount(num);
       obj.id = num ;
       dispatch(addData(obj));
    
       }
       else
       {
       
        dispatch(upadateData(obj))
       
       }
      
       
       setObj({...blankObj});
       console.log(ary);
      }


    const deleteDataFunc = (i) => {

      dispatch(deleteData(i))
    }
    const editData = (x) => {
       
      setObj({...x});
      
       
    }
   
   
    
  return (
    <>
     <form action="" className='w-50 mx-auto text-start border  border-3 bg-success-subtle p-3 needs-validation' noValidate id="form">
       
       <div className='col-12 mb-3'>
       <label htmlFor="fname" className='form-label'>First name</label>
        <input type="text" name='fname' className='w-100 form-control  'value={obj.fname} onChange= {getInp}/>
       </div>
       <div className='col-12 mb-3'>
       <label htmlFor="lname" className='form-label'>Last name</label>
        <input type="text" name='lname' className='w-100 form-control 'value={obj.lname} onChange= {getInp}/>
       </div>
       <div className='col-12 mb-3'>
       <label htmlFor="email" className='form-label'>Email</label>
        <input type="email" name='email' className='w-100 form-control 'value={obj.email} onChange= {getInp}/>
       </div>
       <div className='col-12 mb-3'>
       <label htmlFor="password" className='form-label'>password</label>
        <input type="password" name='password' className='w-100 form-control 'value={obj.password} onChange= {getInp}/>
       </div>
       <div className='col-12 mb-3'>
       <label htmlFor="age" className='form-label'>age</label>
        <input type="number" name='age' className='w-100 form-control 'value={obj.age} onChange= {getInp}/>
       </div>
       <div className='col-12 mb-3'>
       <label htmlFor="date" className='form-label'>Birth-date</label>
        <input type="date" name='date' className='w-100 form-control 'value={obj.date} onChange= {getInp}/>
       </div>
       <div className='col-12 mb-3'>
       <label htmlFor="city" className='form-label'>city</label>
        <input type="text" name='city' className='w-100 form-control 'value={obj.city} onChange= {getInp}/>
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
         <input type="checkbox" className='from-check-input'  checked={obj.hobby?.includes('read')} value="read" name="hobby" onChange= {getInp} />
         <label htmlFor="" className='form-form-check-label  ms-2'>read</label>
        </div>
        <div className="form-check form-check-inline ">
           <input type="checkbox" className='from-check-input'  checked={obj.hobby?.includes('dance')} value="dance" name="hobby"  onChange= {getInp}/>
           <label htmlFor="" className='form-form-check-label ms-2 '>dance</label>
        </div>
        <div className="form-check form-check-inline ">
           <input type="checkbox" className='from-check-input'  checked={obj.hobby?.includes('write')} value="write" name="hobby"  onChange= {getInp}/>
           <label htmlFor="" className='form-form-check-label  ms-2'>write</label>
        </div>
        <div className="form-check form-check-inline ">
           <input type="checkbox" className='from-check-input'  checked={obj.hobby?.includes('travel')} value="travel" name="hobby" onChange= {getInp} />
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
                <th>email</th>
                <th>Password</th>
                <th>Age</th>
                <th>Birth-date</th>
                <th>city</th>
                <th>gender</th>
                <th>hobbies</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
           {
             ary?.map((x,i) => {
                {return (
                    <tr key={i}>
                        <td>{x.id}</td>
                        <td>{x.fname}</td>
                        <td>{x.lname}</td>
                        <td>{x.email}</td>
                        <td>{x.password}</td>
                        <td>{x.age}</td>
                        <td>{x.date}</td>
                        <td>{x.city}</td>
                        <td>{x.gender}</td>
                        <td>{x.hobby?.join(", ")}</td>
                        <td>
                            <button className='btn btn-success ' onClick={ () => editData(x)}>edit</button>
                            <button className='btn btn-danger ms-2 ' onClick={() => deleteDataFunc(i)}>delete</button>
                        </td>
                    </tr>
                )};
             })
           }
        </tbody>
     </table>
    </>
  )
}

export default Redux