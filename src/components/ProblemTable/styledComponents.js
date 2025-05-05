import styled from "styled-components";

export const Container = styled.div`
    font-family:Inter, Sans-serif;
    border:1px solid #ddd;
    border-radius:8px;
`

export const TopicSection = styled.section`
  margin-bottom: 2rem;
`;

export const TopicHeader = styled.h2`
  font-size:28px;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  color:#000000;
`;

export const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  color: #000000;
  margin-bottom: 0.5rem;
`;
export const ProgressBarContainer = styled.div`
  width: 85%;
  background-color: #F5F2F4;
  border-radius: 9999px;
  height: 8px;
  overflow: hidden;

  @media (max-width:768px){
    width:75%;
  }
     @media (max-width:480px){
    width:65%;
  }
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #FC2947;
  border-radius: 9999px;
  transition: width 0.3s ease;
`;
export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: 16px;
  color: #737375;
  border-bottom: 1px solid #e5e7eb;
`;

export const Td = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.875rem;
  text-decoration:none;
  a{
    text-decoration:none;
  }
`;

export const DifficultyBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  background-color: ${props => {
    const level = props.level?.toLowerCase();
    return level === 'easy' ? '#dff6e0' : 
           level === 'medium' ? '#ffeed4' : 
           'rgba(239, 68, 68, 0.1)';
  }};
  color: ${props => {
    const level = props.level?.toLowerCase();
    return level === 'easy' ? '#65865F' : 
           level === 'medium' ? '#FDA829' : 
           '#ef4444';
  }};
`;
export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  margin-right: 8px;

  &:hover {
    color: #333333;
  }
`;
