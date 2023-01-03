import data from 'components/data.json'
import {PropTypes } from 'prop-types';
import { List, StatsItem, StatsSection, Title } from './Statistics.styled';
console.log(data
);

export const Statistics = (props) => {
    return <StatsSection>
       {props.title && <Title> {props.title}</Title>} 
        <List> {props.stats.map(data => {return  <StatsItem key={data.id}>
                <span className='label'>{data.label} </span>
                <span className='percentage'>{ data.percentage}%</span>
            </StatsItem>})}
        </List>
    </StatsSection>
}
Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    })
}