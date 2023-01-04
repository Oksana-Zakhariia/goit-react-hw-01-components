import PropTypes from 'prop-types'
import { Table, TableHead,TableRow, TableHeaders,TableData } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {

    return (<Table>
        <TableHead>
            <TableRow>
                <TableHeaders>Type</TableHeaders>
                <TableHeaders>Amount</TableHeaders>
                <TableHeaders>Currency</TableHeaders>
            </TableRow>
        </TableHead>

        <tbody>
            {items.map(({ id, type, amount, currency}) => {
                return (
                    <TableRow key={id} >
                        <TableData>{type}</TableData>
                        <TableData>{amount}</TableData>
                        <TableData>{currency}</TableData>
                    </TableRow>
                )
            })}
        </tbody>
    </Table>);
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        }))   }
