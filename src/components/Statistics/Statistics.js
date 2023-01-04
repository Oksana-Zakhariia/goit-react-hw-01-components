import data from 'components/data.json'
import {PropTypes } from 'prop-types';
import { List, StatsItem, StatsSection, Title, StatsLabel, Persentage } from './Statistics.styled';

export const Statistics = (props) => {
    return <StatsSection>
       {props.title && <Title> {props.title}</Title>} 
        <List> {props.stats.map(data => {return  <StatsItem key={data.id}>
                <StatsLabel>{data.label} </StatsLabel>
                <Persentage>{ data.percentage}%</Persentage>
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