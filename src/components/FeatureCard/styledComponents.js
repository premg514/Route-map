import styled from "styled-components";

export const Card = styled.div`
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  ${(props) => props.active && `background:  #ef4444;`}
  border:${(props) => (props.active ? "" : "#F5EFEB80")};
  font-family: Inter, Sans-serif;
  width: 300px;
  transition: all 0.3s ease;
  
  /* Tablet landscape */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 260px;
    padding: 5px
 
  }
  
  /* Tablet portrait */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 200px;
    padding: 3px;
  }
  
  /* Mobile */
  @media (max-width: 480px) {
    width: ${(props) => (props.active ? "170px" : "75px")};
    padding: 3px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  
  /* Tablet */
  @media (min-width: 481px) and (max-width: 1024px) {
    gap: 8px;
  }
`;

export const CardIcon = styled.img`
  width: 71px;
  height: 55px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  
  /* Tablet landscape */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 65px;
    height: 50px;
  }
  
  /* Tablet portrait */
  @media (min-width: 481px) and (max-width: 768px) {
    width: 60px;
    height: 45px;
  }
  
  /* Mobile */
  @media (max-width: 480px) {
    width: 53px;
    height: 40px;
  }
`;

export const CardDetails = styled.div`
  flex: 1;
  overflow: hidden;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
  /* Tablet */
  @media (min-width: 481px) and (max-width: 1024px) {
    max-width: calc(100% - 70px);
  }
  
 @media (max-width: 480px) {
  display: ${(props) => (props.active ? "flex" : "none")};
  width: 190px;
  height: 55px;
}

`;

export const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
  margin: 0 0 0.25rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  /* Tablet landscape */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
  }
  
  /* Tablet portrait */
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 10px;
    margin-bottom: 0.2rem;
  }
  
  /* Mobile */
  @media (max-width: 480px) {
    font-size: 8px;
  }
`;

export const CardSubtitle = styled.p`
  font-size: 13px;
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  /* Tablet landscape */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 12px;
  }
  
  /* Tablet portrait */
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 9px;
  }
  
  /* Mobile */
  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

