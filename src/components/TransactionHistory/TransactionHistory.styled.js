import styled from 'styled-components';
export const TableHead = styled.thead`
  padding: 10px;
  text-align: center;
`;
export const Table = styled.table`
  width: 100%;
  box-shadow: ${props => props.theme.shadow};
`;
export const TableData = styled.td`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid azure;
  text-align: center;
`;
export const TableHeaders = styled.th`
  padding: 10px;
  text-align: center;
  background-color: ${props => props.theme.colors.mainBorderColor};
  color: ${props => props.theme.colors.white};
`;
export const TableRow = styled.tr`
  border: 1px solid black;
`;
