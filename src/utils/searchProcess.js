import rowBinarySearch from './rowBinarySearch';

const searchProcess = ({date, name, title, field }, options = []) => {

    let filteredOptions = [...options];

    if(date){
        let sortedFilteredOption = filteredOptions.sort((a, b) => new Date(a.date) - new Date(b.date));
        rowBinarySearch(sortedFilteredOption,date,(e) => {
            if(e && e.length > 0){
                filteredOptions = e.map(i => filteredOptions[i])
            }
        });
    }

    if(name){
        filteredOptions = filteredOptions.filter(e => e.name.toLowerCase() === name.toLowerCase() );
    }

    if(title){
        filteredOptions = filteredOptions.filter(e => e.title === title);
    }

    if(field){
        filteredOptions = filteredOptions.filter(e => e.field === field);
    }

    return filteredOptions;

}

export default searchProcess;