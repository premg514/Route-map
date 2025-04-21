import styled from "styled-components";

// Main container
export const RoadmapContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  width: 100%;
  min-height: 100vh;
  position: relative;
  font-family: "Inter", sans-serif;
  color: white;
  overflow: hidden;
`;

export const GroupLabel = styled.div`
  color: #b388ff;
  font-size: 14px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

// Road styling
export const Road = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const RoadPath = styled.div`
  position: absolute;
  width: 40px;
  height: 500px;
  background-color: #ff3b4e;
  border-radius: 20px;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 100%;
    background: repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 10px,
      white 10px,
      white 20px
    );
  }
`;

// Custom path to create the winding road
export const CustomRoadPath = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

// Milestone styling
export const Milestone = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 2;
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: center;
  width: auto;

  @media (max-width: 1023px) {
    &:not(.mobile-milestone) {
      display: none;
    }
  }

  &.mobile-milestone {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;
export const Stone = styled.g`
  background: red;
`;

export const MilestoneCircle = styled.div`
  width: ${(props) => props.size || "80px"};
  height: ${(props) => props.size || "80px"};
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
`;

export const MilestoneNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "white"};
  color: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
`;

export const MilestoneContent = styled.div`
  text-align: ${(props) => props.align || "left"};
  max-width: ${(props) => props.maxWidth || "200px"};
  margin-top: ${(props) => (props.direction === "top" ? "-80px" : "0")};
  margin-bottom: ${(props) => (props.direction === "bottom" ? "-80px" : "0")};

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 5px;
  }
`;

export const MilestoneTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 20px;
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

// Package info styling
export const PackageInfo = styled.div`
  position: absolute;
  top: 20px;
  left: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 2;

  @media (max-width: 1200px) {
    top: 10px;
    left: 10px;
    right: auto;
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
    min-width: 200px;
    padding: 8px 16px;
    font-size: 14px;
  }
`;

// Mobile view components
export const MobileRoadmap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;

export const MobileCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 20px;
    margin-bottom: 20px;
  }
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

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
    margin-right: 20px;
  }
`;

export const MobileContent = styled.div`
  flex: 1;
`;
