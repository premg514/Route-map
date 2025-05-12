import styled from "styled-components";
export const ParentContainer = styled.div`
  max-width: 100%;
  background: #fafbff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 75%;
  margin: 0;
  padding: 2rem;
  background: #fafbff;
  @media (max-width: 480px) {
    padding: 6px;
    width: 100%;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #343434;
  font-family: Work Sans, Sans-serif;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #aeaeae;
  font-family: Work Sans, Sans-serif;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  margin-bottom: 1.5rem;
  max-width: 100%;
  @media (max-width: 768px) {
    gap: 5px;
  }
`;
export const StatandFilter = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StatsSection = styled.div`
  background-color: #ffffff;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  font-family: Inter, sans-serif;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    align-items: center;
    gap: 1.5rem;
  }
  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;

export const CircularProgress = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
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
  font-family: Work Sans, Sans-serif;
`;

export const ProgressNumber = styled.span`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  color: #333;
`;

export const ProgressLabel = styled.div`
  font-size: 18px;
  color: #343434;
  span {
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
    color: #333;
  }
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
  gap: 1rem;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 480px) {
    gap: 1px;
  }
`;

export const DifficultyCard = styled.div`
  border-radius: 0.5rem;
  background-color: #f5f5f5;
  padding: 0.75rem 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  min-width: 100px;
  text-align: center;
`;

export const DifficultyCardTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-family: Work Sans, sans-serif;

  ${(props) =>
    props.level === "easy" &&
    `
    color: #52B557;
  `}

  ${(props) =>
    props.level === "medium" &&
    `
    color: #FDA829;
  `}
  
  ${(props) =>
    props.level === "hard" &&
    `
    color: #FF3F3F;
  `}
`;

export const DifficultyCardValue = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #000000;
`;

export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SearchBar = styled.div`
  position: relative;
  max-width: 100%;
`;

export const SearchInput = styled.input`
  width: 98%;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: #f7f4f4;
  font-size: 0.875rem;
  outline: none;
  color: #928284;
  height:20px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 1%;
  top: 70%;
  transform: translateY(-50%);
  color: #6b7280;
  display: flex;
  align-items: center;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FilterWrapper = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const FilterLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 0.25rem;
  color: #343434;
  font-family: Work Sans, sans-serif;
`;

export const FilterSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  background-color: #f7f4f4;
  font-size: 0.875rem;
  outline: none;
  color: #928284;
  
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
  font-size: 18px;
  font-weight: ${(props) => props.active && "bold"};
  margin-right: 0.5rem;
  border: none;
  background-color: ${(props) => (props.active ? "#ef4444" : "#f7f4f4")};
  color: ${(props) => (props.active ? "#ffffff" : "#928284")};
  cursor: pointer;
  white-space: nowrap;
  font-family: Montserrat;
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
