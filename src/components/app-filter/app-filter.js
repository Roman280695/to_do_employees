
import './app-filter.css';

const AppFilter = (props) => {
    const btn = [
        {name: 'all', lable: 'Все сотрудники'},
        {name: 'rise', lable: 'На повышение'},
        {name: 'moreThen1000', lable: 'З/П больше 1000$ '}
    ];

    const btns = btn.map(({name, lable}) => {
        const active = props.filter === name;

        const clazz = active ? 'btn-light' : 'btn-outline-light';
        
        return (
            <button 
            
                className= {`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                   {lable} 

            </button>
        )
    })

    return (
        <div className="btn-group">
            {btns}
        </div>
    );
}


export default AppFilter;