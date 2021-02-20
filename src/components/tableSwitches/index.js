import { useState , useEffect } from 'react';
import './style.css';


const TableSwitches = ({onchange , queryValue}) => {

    const [values , setValues] = useState({name :'', field:'', date:'', title:''});
    
    const handleChange = (e,name) => {
        const { target : { value } } = e;
        setValues({...values,[name]:value});
        if(onchange) onchange({...values,[name]:value})
    }

    useEffect(() => {
        if(queryValue){
            setValues(queryValue)
        }
    },[queryValue])
    
    return(
                <div className='table-switches'>
                    <div className='table-switches-item'>
                        <span>
                            نام تغیر دهنده
                        </span>
                        <input value={values.name} onChange={(e) => {handleChange(e,'name')}}/>
                    </div>

                    <div className='table-switches-item'>
                        <span>
                            تاریخ
                        </span>
                        <input value={values.date} onChange={(e) => {handleChange(e,'date')}}/>
                    </div>

                    <div className='table-switches-item'>
                        <span>
                            نام آگهی
                        </span>
                        <input value={values.title} onChange={(e) => {handleChange(e,'title')}}/>
                    </div>

                    <div className='table-switches-item'>
                        <span>
                            نامل فیلد
                        </span>
                        <input value={values.field} onChange={(e) => {handleChange(e,'field')}}/>
                    </div> 
                </div>
    )
}

export default TableSwitches;