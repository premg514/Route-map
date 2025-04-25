import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  margin: 0 ;
  padding: 2rem;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333333;
  font-family: Work Sans, Sans-serif;
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  font-family: Work Sans, Sans-serif;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const StatandFilter = styled.div`
  display: flex;
`;

export const StatsSection = styled.div`
  background-color: #ffffff;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  font-family: Inter, Sans-serif;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const CircularProgress = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

export const ProgressText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProgressNumber = styled.span`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
`;

export const ProgressLabel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const StatsDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const StatsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const StatItem = styled.div`
  padding: 0.25rem 0;
`;

export const StatValue = styled.div`
  font-weight: 600;
  color: #333333;
`;

export const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;

export const DifficultyCard = styled.div`
  border-radius: 0.5rem;
  background-color: #F5F5F5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 120px;
  border: none;
  text-align:center;
`;

export const DifficultyCardTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  ${(props) =>
    props.level === "easy" &&
    `
    color:  #22c55e;
  `}

  ${(props) =>
    props.level === "medium" &&
    `
   color:  #f59e0b;
  `}
  
  ${(props) =>
    props.level === "hard" &&
    `
    color:  #ef4444;
  `}
`;

export const DifficultyCardValue = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #333333;
`;

export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex:1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SearchBar = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: #ffffff;
  font-size: 0.875rem;
  outline: none;
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 0px;
  top: 0;
  bottom: 0;
  color: #6b7280;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FilterWrapper = styled.div`
   flex:1;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const FilterLabel = styled.label`
  display: block;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  color: #6b7280;
`;

export const FilterSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: #ffffff;
  font-size: 0.875rem;
  outline: none;
 
`;

export const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  overflow-x: auto;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    width: 100%;
  }
`;

export const Tab = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  margin-right: 0.5rem;
  border: none;
  background-color: ${(props) => (props.active ? "#ef4444" : "transparent")};
  color: ${(props) => (props.active ? "#ffffff" : "#333333")};
  cursor: pointer;
  white-space: nowrap;
`;

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
  background-color: ${(props) =>
    props.level === "Easy"
      ? "rgba(16, 185, 129, 0.1)"
      : props.level === "Medium"
      ? "rgba(245, 158, 11, 0.1)"
      : "rgba(239, 68, 68, 0.1)"};
  color: ${(props) =>
    props.level === "Easy"
      ? "#10b981"
      : props.level === "Medium"
      ? "#f59e0b"
      : "#ef4444"};
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
