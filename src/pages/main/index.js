import { useEffect, useState , useCallback} from 'react';
import { useHistory } from "react-router-dom";
import TableSwitches from '../../components/tableSwitches';
import { getFromLS , setToLS } from '../../utils/storage';
import searchProcess from '../../utils/searchProcess';
import sortWithKey from '../../utils/sortWithKey'
import serialize from '../../utils/serialize';
import { getOptions } from '../../api/index';
import useQuery from '../../hooks/useQuery';
import debounce from '../../utils/debounce';
import Table from '../../components/table';
import Notes from '../../components/notes';


const Main = () => {

    const query = useQuery();
    const history = useHistory();
    const name = query.get('name');
    const title = query.get('title');
    const field = query.get('field');
    const date = query.get('date');
    const localStoragePins = getFromLS('pins');

    const [ queryValue , setQueryValues ] = useState({ name : name || '' ,title : title || '' ,field : field || '' ,date : date || '' });
    const [ pins , setPins ] = useState(localStoragePins || []);

    const { options , headers } = getOptions();
    const [ tableOptions , setOptions ] = useState(options.slice(0, 10));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const myEfficientFn = useCallback(
        debounce((f,options) => {
            setOptions(searchProcess(f,options).slice(0, 10));
        }, 1200),
        []
      );

    useEffect(() => {
        const { name , title , field , date } = queryValue;
        myEfficientFn({ name , title , field , date },options)

    },[myEfficientFn, queryValue, options])

    const handleFiltersChange = (e) => {
        console.log('handlefilterChange');
        history.push(`/main?${serialize(e)}`);
        setQueryValues(e);
    }

    const handleSort = (e) => {
        let sortedOptions = sortWithKey(e, tableOptions);
        setOptions(sortedOptions.slice(0, 10));
    }

    const handleSetpins = (e) => {
        let clonePins = [...pins];
       
        if(clonePins.includes(e)){
            clonePins = clonePins.filter(i => i !== e)
        }else{
            clonePins.push(e);
        }
        setPins(clonePins);
        setToLS('pins',clonePins);
    }
    
    return(
    <div className='d-flex align-items-center flex-column w-100'>

        <TableSwitches 
            onchange={handleFiltersChange} 
            queryValue={queryValue}
        />

        <Notes />

        <Table 
            options={tableOptions} 
            headers={headers} 
            sort={handleSort}
            onpin={handleSetpins}
            pins={pins}
            />

    </div>
    );
}

export default Main;