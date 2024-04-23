// import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import ApplyRedux from './Component/ApplyRedux';
import Redux from './Component/Redux';
import ApiReduxCrud from './Component/ApiReduxCrud';
import { useEffect } from 'react';
import { getstudentData, studentData } from './Component/Redux/Action/apiAction';
import Chart from './Component/apexChart/Chart';




function App() {
  // const count = useSelector(state => state?.count?.count );
  // console.log(count , 'count');

  const dispatch = useDispatch();
  useEffect(() => {
    
  dispatch(getstudentData());
    
  }, [])
  
  
  return (
    <>
    {/* <h1 className='text-center'>{count}</h1> */}
     {/* <ApplyRedux/> */}

     {/* <Redux/> */}

     {/* <ApiReduxCrud/> */}
 

     <Chart/>
     
     
    </>




   
  );
}

export default App;
