import React, { useState } from 'react'

function Exam() {
    const[img,setImg] = useState('');
    const[count , setCount] = useState( JSON.parse(localStorage.getItem('count')) || 0);
    const blankObj = {id : 0 , profile : '' , fname : '' , lname :'' ,email : '' , age :'' , password :'', date : '' , city : '' , gender :'' , hobby : []};
    const [obj , setObj] = useState({...blankObj});
    const [ary ,setAry] = useState( JSON.parse(localStorage.getItem('ary')) || []);

    const saveData = async(e) => {
        if(e.target.name == 'hobby')
        {
            if(e.target.checked)
            {
                obj.hobby = [...obj.hobby , e.target.value];
            }
            else
            {
                obj.hobby = obj.hobby?.filter(x => x != e.target.value);
            }
        }
        else if(e.target.name == 'profile')
        {
            let a = e.target.files[0];
            let data = await toBase64(a);
            obj.profile = data;
        }
        else
        {
            obj[e.target.name] = e.target.value;
        }
        setObj({...obj});
    }
    const printData = () => {
        if(obj.id == '0')
        {
            let num = count;
            num++;
            setCount(num);
            obj.id = num ;
            ary?.push(obj);
            setObj({...obj});
            setAry([...ary]);
            console.log(obj);
            
        }
        else
        {
            let index = ary?.findIndex(x => x.id == obj.id);
            ary?.splice(index , 1 , obj);
       
            localStorage.setItem('ary' , JSON.stringify(ary));
            localStorage.setItem('count' , JSON.stringify(count));
        }
        localStorage.setItem('ary' , JSON.stringify(ary));
        localStorage.setItem('count' , JSON.stringify(count));
        setObj({...blankObj});
    }
    const deletData = (i) => {
        ary?.splice(i ,1);
        setAry([...ary]);
        localStorage.setItem('ary' , JSON.stringify(ary));
    }
    const editData = (i) => {
       setObj({...i})
    }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

  return (
    <>
     <form action="" className='w-50 mx-auto row p-3 bg-success-subtle border border-2  needs-validation' noValidate>
        <div className="col-12 mb-3">
            <label htmlFor="profile" className='form-label'>profile</label>
            <input type="file" className='form-control' onChange={saveData} name='profile'/>
            <div>
                <img src={obj.profile} alt="" style={{height: '50px', width: "50px"}}/>
            </div>
        </div>
        <div className="col-12 mb-3">
            <label htmlFor="fname" className='form-label'>first name</label>
            <input type="text" className='form-control' onChange={saveData} value = {obj.fname} name="fname" />
        </div>
        <div className="col-12 mb-3">
            <label htmlFor="lname" className='form-label'>last name</label>
            <input type="text" className='form-control' onChange={saveData} value = {obj.lname} name="lname" />
        </div>
        <div className="col-12 mb-3">
            <label htmlFor="email" className='form-label'>email</label>
            <input type="email" className='form-control' onChange={saveData} value = {obj.email} name="email" />
        </div>
        <div className="col-12 mb-3">
            <label htmlFor="age" className='form-label'>age</label>
            <input type="number" className='form-control' onChange={saveData} value = {obj.age} name="age" />
        </div>
        <div className="col-12 mb-3">
            <label htmlFor="password" className='form-label'>password</label>
            <input type="password" className='form-control' onChange={saveData} value = {obj.password} name="password" />
        </div>
        <div className="col-12 mb-3">
            <label htmlFor="date" className='form-label'>birth-date</label>
            <input type="date" className='form-control' onChange={saveData} value = {obj.date} name="date" />
        </div>
        <div className="col-12 mb-3">
            <label htmlFor="city" className='form-label'>city</label>
            <input type="text" className='form-control' onChange={saveData} value = {obj.city} name="city" />
        </div>
        <div className="col-12 mb-3">
            <label htmlFor="" className='form-label'>Gender</label>
            <br />
           <div className="form-check form-check-inline ">
           <input type="radio" className='form-check-input' value="male" checked = {obj.gender?.includes('male')} name = "gender" onChange={saveData}  id="gender1"/>
           <label htmlFor="gender1" className='form-check-label' >male</label>
           </div>
           <div className="form-check form-check-inline ">
           <input type="radio" className='form-check-input' value="female" checked = {obj.gender?.includes('female')} name = "gender" onChange={saveData} id="gender2"/>
           <label htmlFor="gender2" className='form-check-label' >female</label>
           </div>
           <div className="form-check form-check-inline ">
           <input type="radio" className='form-check-input' value="other" checked = {obj.gender?.includes('other')} name = "gender"onChange={saveData}  id="gender3"/>
           <label htmlFor="gender3" className='form-check-label' >other</label>
           </div>
        </div>
        <div className="col-12 mb-3">
            <label htmlFor="" className='form-label'>Hobbies</label>
            <br />
            <input type="checkbox" className='form-check-input' value = "read" checked = {obj.hobby?.includes('read')} onChange={saveData} name="hobby" />
            <label htmlFor="" className='form-check-label ms-2'>read</label>
            <input type="checkbox" className='form-check-input ms-2' value = "write" checked = {obj.hobby?.includes('write')} onChange={saveData} name="hobby" />
            <label htmlFor="" className='form-check-label ms-2'>write</label>
            <input type="checkbox" className='form-check-input ms-2' value = "dance" checked = {obj.hobby?.includes('dance')} onChange={saveData} name="hobby" />
            <label htmlFor="" className='form-check-label ms-2'>dance</label>
            <input type="checkbox" className='form-check-input ms-2' value = "travel" checked = {obj.hobby?.includes('travel')} onChange={saveData} name="hobby" />
            <label htmlFor="" className='form-check-label ms-2'>travel</label>
        </div>
        <div className="col-12 my-3 text-center ">
            <button type='button' className='btn btn-success ' onClick={printData} >submit</button>
        </div>
     </form>
     <table className='table table-bordered  table-hover  table-striped  table-success text-center mt-5' >
        <thead>
            <tr>
                <th>id</th>
                <th>profile</th>
                <th>fisrt name</th>
                <th>last name</th>
                <th>email</th>
                <th>age</th>
                <th>password</th>
                <th>date</th>
                <th>city</th>
                <th>gender</th>
                <th>hobby</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {
                ary?.map((x,i) => {
                    return(
                        <tr key={i}>
                            <td>{x.id}</td>
                            <td><img src={x.profile} width={'50px'}></img></td>
                            <td>{x.fname}</td>
                            <td>{x.lname}</td>
                            <td>{x.email}</td>
                            <td>{x.age}</td>
                            <td>{x.password}</td>
                            <td>{x.date}</td>
                            <td>{x.city}</td>
                            <td>{x.gender}</td>
                            <td>{x.hobby?.join(', ')}</td>
                            <td>
                                <button className='btn btn-success ' type="button" onClick={() => editData(x)}>edit</button>
                                <button className='btn btn-danger ms-2 ' type="button" onClick={() => deletData(i)}>delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
     </table>
    </>
  )
}

export default Exam