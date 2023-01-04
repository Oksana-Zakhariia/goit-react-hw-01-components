// import data from 'components/data.json'
import {PropTypes } from 'prop-types';
import { List, StatsItem, StatsSection, Title, StatsLabel, Persentage } from './Statistics.styled';
// console.log(data);

export const Statistics = ({title, stats }) => {
    return <StatsSection>
       {title && <Title> {title}</Title>} 
        <List> {stats.map(({ id, label, percentage }) => {return  <StatsItem key={id}>
                <StatsLabel>{label} </StatsLabel>
                <Persentage>{percentage}%</Persentage>
            </StatsItem>})}
        </List>
    </StatsSection>
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    })
}