import styled from "styled-components";

export const RoadmapContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  width: 100%;
  min-height: 100vh;
  position: relative;
  font-family: "Inter", sans-serif;
  color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Road = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  @media (max-width: 1024px) {
    height: 450px;
  }
`;

export const RoadImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RoadImage = styled.img`
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth || "1000px"};
  height: auto;
  object-fit: contain;

  @media (max-width: 1024px) {
    width: ${(props) => props.tabletWidth || "90%"};
    max-width: ${(props) => props.tabletMaxWidth || "700px"};
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: ${(props) => props.mobileWidth || "95%"};
    max-width: ${(props) => props.mobileMaxWidth || "480px"};
    object-fit: contain;
  }
`;

export const MilestoneTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export const MilestoneDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #000000;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const PackageInfo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 2;

  @media (max-width: 1200px) {
    top: 10px;
    left: 10px;
  }
`;

export const PackageItem = styled.div`
  background: ${(props) => props.gradient};
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 600;
  text-align: center;
  width: ${(props) => props.width}px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const MobileRoadmap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
`;

export const MobileCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const MobileCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-right: 15px;
  flex-shrink: 0;
`;

export const MobileContent = styled.div`
  flex: 1;
`;
