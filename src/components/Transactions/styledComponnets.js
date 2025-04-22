import styled from 'styled-components';

export const TransactionsContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
`;

export const TransactionHeading = styled.h2``

export const WarningBanner = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFF8E1;
  border: 1px solid #FFE082;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  color: #5D4037;
`;

export const WarningIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF9800;
  margin-right: 12px;
  font-size: 20px;
`;

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #E0E0E0;
  margin-bottom: 20px;
`;

export const Tab = styled.div`
  position: relative;
  padding: 12px 24px;
  cursor: pointer;
  color: ${props => props.active ? '#E91E63' : '#757575'};
  font-weight: ${props => props.active ? '600' : '400'};
`;

export const ActiveIndicator = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #E91E63;
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const HeaderCell = styled.th`
  text-align: left;
  padding: 16px 12px;
  color: #757575;
  font-weight: 500;
  border-bottom: 1px solid #E0E0E0;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #F5F5F5;
  }
`;

export const TableCell = styled.td`
  padding: 16px 12px;
  border-bottom: 1px solid #E0E0E0;
  color: #212121;
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  
  ${props => {
    switch(props.status) {
      case 'Completed':
        return `
          background-color: #E8F5E9;
          color: #2E7D32;
        `;
      case 'Pending':
        return `
          background-color: #FFF8E1;
          color: #F57F17;
        `;
      case 'Cancelled':
        return `
          background-color: #FFEBEE;
          color: #C62828;
        `;
      default:
        return `
          background-color: #E0E0E0;
          color: #757575;
        `;
    }
  }}
`;

export const DownloadButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #757575;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #212121;
  }
`;