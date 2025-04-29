import styled from "styled-components";

export const TestContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  font-family: "Lato", sans-serif;
`;

export const SectionHeader = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #e5e7eb;
  cursor: pointer;
  background-color: #f9fafb;
  @media (max-width:480px){
    flex-direction:column;
    gap:5px;
  }
`;
export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  width:100%;
`;
export const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
`;
export const SectionTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  flex-grow: 1;
`;

export const ProgressIndicator = styled.span`
  font-size: 14px;
  color: #000000;
  margin-left: 16px;
`;

export const ProgressBarContainer = styled.div`
  width: 220px;
  height: 6px;
  background-color: #f5f2f4;
  border-radius: 12px;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: #fc2947;
  border-radius: 12px;
  transition: width 0.3s ease;
`;

export const TopicList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TopicItem = styled.li`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid #E0E0E0;
  background-color: ${(props) =>
    props.inProgress ? "#f0f7ff" : "transparent"};

  &:last-child {
    border-bottom: none;
  }
`;

export const Checkbox = styled.input`
  margin-right: 12px;
  width: 16px;
  height: 16px;
`;

export const TopicName = styled.span`
  flex-grow: 1;
  color: #313131;
  font-size: 14px;
`;

export const ActionButton = styled.button`
  background-color: #FC2947;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  border: none;
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 80px;

  &:hover {
    background-color: #e11d48;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ExpandIcon = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
