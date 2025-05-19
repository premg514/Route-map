import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f8f9fa;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
`;

export const TemplateCard = styled.div`
  display: flex;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TemplateImage = styled.div`
  flex: 1;
  padding: 2rem;
  background: linear-gradient(135deg, #6b73ff 0%, #000dff 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    transform: rotate(-5deg);
    transition: transform 0.3s ease;

    &:hover {
      transform: rotate(0deg) scale(1.05);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ContentSection = styled.div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const LastUpdated = styled.p`
  color: #fd2a48;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0 0 1rem 0;
  letter-spacing: 0.5px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  color: #667085;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0 0 2rem 0;
  font-weight: 400;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  ${(props) => {
    switch (props.variant) {
      case "purple":
        return `
          color: #7d5acd;
       
          background: #ece8f2;
          
          &:hover {
            background: #8b5cf6;
            color: white;
          }
        `;
      case "blue":
        return `
          color: #3538cd;
          background: #eef4ff;
          
          &:hover {
            background: #3b82f6;
            color: white;
          }
        `;
      case "red":
        return `
          color: #fc2947;
          background: #fdf2fa;
          
          &:hover {
            background: #ef4444;
            color: white;
          }
        `;
      default:
        return `
          color: #6b7280;
          background: rgba(107, 114, 128, 0.1);
        `;
    }
  }}
`;

export const DownloadButton = styled.a`
 
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #fc2947, #f2445d);
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(255, 71, 87, 0.3);
  width:90%;
  text-align:center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 71, 87, 0.4);
    background: linear-gradient(135deg, #ff3742, #ff2838);
    text-decoration: none;
    color: white;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const DownloadIcon = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;

  ${DownloadButton}:hover & {
    transform: translateY(2px);
  }
`;
