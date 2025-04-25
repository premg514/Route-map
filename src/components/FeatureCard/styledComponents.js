import styled from "styled-components";

export const Card = styled.div`
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  ${(props) => props.active && `background:  #ef4444;`}
  border:${(props) => (props.active ? "" : "#F5EFEB80")};
  font-family: Inter, Sans-serif;
  width: 300px;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
`;

export const CardIcon = styled.img`
  width: 71px;
  height: 55px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  background-color: ${(props) =>
    props.type === "crash"
      ? "rgba(239, 68, 68, 0.1)"
      : props.type === "interview"
      ? "rgba(59, 130, 246, 0.1)"
      : "rgba(245, 158, 11, 0.1)"};
  color: ${(props) =>
    props.type === "crash"
      ? "#ef4444"
      : props.type === "interview"
      ? "#3b82f6"
      : "#f59e0b"};
  font-size: 1.25rem;
`;

export const CardDetails = styled.div``;

export const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 0.875rem;
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
`;

export const CardSubtitle = styled.p`
  font-size: 0.75rem;
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
`;
