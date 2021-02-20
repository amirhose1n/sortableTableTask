import './style.css';
const Table = ({options,headers,sort,onpin,pins = []}) => {
    return(
            <div className='table-box'>
                <table>
                    <thead>
                        <tr>
                            {headers.map(header => (
                                <th style={{width:header.width}} onClick={() => sort(header.key)} key={ header.key }>{ header.title }</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {options.map((option,key) => (
                            <tr className={`${pins.includes(option.id) ? 'active-tr':''}`} key={key} onClick={() => {onpin(option.id)}}>
                                <td>{option.name}</td>
                                <td>{option.date}</td>
                                <td>{option.title}</td>
                                <td>{option.field}</td>
                                <td>{option.old_value}</td>
                                <td>{option.new_value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}

export default Table;