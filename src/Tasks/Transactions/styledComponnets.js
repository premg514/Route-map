import styled from "styled-components";

export const TransactionsContainer = styled.div`
  font-family: Inter, sans-serif;
  margin: 0;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
`;

export const ResponsiveWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  max-height: calc(100vh - 200px);
  
  @media (max-width: 768px) {
    max-height: 70vh;
  }
`;

export const TransactionHeading = styled.h2`
  color: #121212;
`;

export const WarningBanner = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff2d5;
  border: 2px solid #ff994b;
  border-radius: 8px 8px 0 0;
  padding: 16px;
  margin-bottom: 24px;
  color: #343434;
`;

export const WarningIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff9800;
  margin-right: 12px;
  font-size: 20px;
`;

export const TabsContainer = styled.div`
  display: flex;
  border: 1px solid #d9d9d9;
  border-bottom: 0;
  background-color: #ffffff;
  height: 64px;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden; /* Explicitly hide vertical scrolling */
  
  @media (max-width: 768px) {
    white-space: nowrap;
  }
`;

export const Tab = styled.div`
  position: relative;
  padding: 12px 24px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#FC2947" : "#757575")};
  font-weight: ${(props) => (props.active ? "600" : "400")};
  
  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

export const ActiveIndicator = styled.div`
  position: absolute;
  bottom: -12px;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: 8px;
  background-color: #fc2947;
  font-weight: bold;
`;

export const TableContainer = styled.table`
  width: 100%;
  border: 1px solid #d9d9d9;
  border-bottom: none; /* Remove bottom border from container */
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 0 0 8px 8px;
  min-width: 800px; /* Ensures table doesn't shrink too much */
  border-collapse: collapse;
  
  thead {
    background-color: #fafafa;
    height: 64px;
  }
`;

export const HeaderCell = styled.th`
  text-align: left;
  padding: 16px 12px;
  color: #737375;
  font-weight: 500;
  white-space: nowrap;
  border-bottom: 1px solid #d9d9d9; /* Horizontal border only */
`;

export const TableRow = styled.tr`
  background-color: #ffffff;
  height: 64px;
  border-bottom: 1px solid #d9d9d9; /* Horizontal border only */
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const TableCell = styled.td`
  padding: 16px 12px;
  color: #121212;
  white-space: nowrap;
  border: none; /* Remove all borders from cells */
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  
  ${(props) => {
    switch (props.status) {
      case "Completed":
        return `
          background-color: #e9faee;
          color: #1FCB4F;
        `;
      case "Pending":
        return `
          background-color: #fff2d5;
          color: #FFBD2E;
        `;
      case "Cancelled":
        return `
          background-color: #f9dad9;
          color: #E14640;
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