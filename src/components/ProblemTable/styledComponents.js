import styled from "styled-components";

export const Container = styled.div`
    font-family:Inter, Sans-serif;
`

export const TopicSection = styled.section`
  margin-bottom: 2rem;
`;

export const TopicHeader = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;
export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 9999px;
  height: 8px;
  margin-top: 4px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #3b82f6;
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
  font-size: 0.75rem;
  color: #6b7280;
  border-bottom: 1px solid #e5e7eb;
`;

export const Td = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.875rem;
`;

export const DifficultyBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  background-color: ${props => 
    props.level === 'Easy' ? 'rgba(16, 185, 129, 0.1)' : 
    props.level === 'Medium' ? 'rgba(245, 158, 11, 0.1)' : 
    'rgba(239, 68, 68, 0.1)'
  };
  color: ${props => 
    props.level === 'Easy' ? '#10b981' : 
    props.level === 'Medium' ? '#f59e0b' : 
    '#ef4444'
  };
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  margin-right: 0.25rem;

  &:hover {
    color: #333333;
  }
`;