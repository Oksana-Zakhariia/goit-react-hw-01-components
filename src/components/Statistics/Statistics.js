import data from 'components/data.json'
import {PropTypes } from 'prop-types';
console.log(data
);

export const Statistics = (props) => {
    return <section className='statistics'>
       {props.title && <h2 className='title'> {props.title}</h2>} 
        <ul> {props.stats.map(data => {return  <li key={data.id}>
                <span className='label'>{data.label} </span>
                <span className='percentage'>{ data.percentage}%</span>
            </li>})}
    </ul>
    </section>
}
Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    })
}