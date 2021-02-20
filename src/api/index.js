import * as data from './data.json';
const headers = [
    {key: 'name', title: "نام تغیر دهنده" , width : '20%'},
    {key: 'date', title: "تاریخ" , width : '15%'},
    {key: 'title', title: "نام آگهی" , width : '15%'},
    {key: 'field', title: "فیلد" ,width: '10%'},
    {key: 'old_value', title: "مقدار قدیمی", width: '20%'},
    {key: 'new_value', title: "مقدار جدید", width: '20%'}]

export const getOptions = () =>{
    try{
        return ({options : data.default, headers });
    }catch(e){
        console.log(e,'Error')
    }
}