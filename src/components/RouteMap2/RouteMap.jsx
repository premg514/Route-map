"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  RoadmapContainer,
  Road,
  RoadImageContainer,
  RoadImage,
  PackageInfo,
  PackageItem,
  MobileRoadmap,
  MobileCard,
  MobileCircle,
  MobileContent,
  MilestoneTitle,
  MilestoneDescription,
} from "./styledComponents";
import routeMap from "../../assets/routeMap.png";
import routeMapMobile from "../../assets/routeMapMobile.png";

const CareerRoadmap = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  // Milestone data
  const milestones = [
    {
      id: "foundation",
      number: "01",
      title: "Foundation",
      description: "Communication\nSoft Skills\nBasic Aptitude",
      color: "#F9A86F",
    },
    {
      id: "training",
      number: "02",
      title: "Training",
      description: "Advance Aptitude\nProgramming\nDSA & Advance DSA",
      color: "#F9A86F",
    },
    {
      id: "internship",
      number: "03",
      title: "Internship",
      description: "Domain Training with\nHands on Experience\nand Internship",
      color: "#C19A6B",
    },
    {
      id: "placement",
      number: "04",
      title: "Placement",
      description:
        "Company Specific Training\nMock Interviews\nGD, HR and Technical\nInterview rounds",
      color: "#7ECCE5",
    },
  ];

  // Image path based on screen width
  const getImagePath = () => {
    if (isDesktop) return routeMap;
    if (isTablet) return routeMapMobile;
    return routeMapMobile;
  };

  return (
    <RoadmapContainer>
      {isDesktop  ? (
        // Desktop and Tablet: Show only the image with the full roadmap
        <Road>
          <RoadImageContainer>
            <RoadImage
              src={getImagePath()}
              alt="Career Roadmap Path"
              width="100%"
              maxWidth="1000px"
              tabletWidth="90%"
            />
          </RoadImageContainer>

          {/* Package Info */}
          <PackageInfo>
            <PackageItem
              width={isDesktop ? "350" : "300"}
              gradient="linear-gradient(135deg, #FF8C00, #FFB23E)"
            >
              Highest Package: ₹47 LPA
            </PackageItem>
            <PackageItem
              width={isDesktop ? "300" : "250"}
              gradient="linear-gradient(135deg, #FC2947, #F04A61)"
            >
              Average Package: ₹7.2 LPA
            </PackageItem>
            <PackageItem
              width={isDesktop ? "250" : "200"}
              gradient="linear-gradient(135deg, #2ECC71, #17A589)"
            >
              Minimum Package: ₹3.6 LPA
            </PackageItem>
          </PackageInfo>
        </Road>
      ) : (
        // Mobile: Show cards with milestone info
        <MobileRoadmap>
          {/* Small image preview for mobile */}
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <RoadImage
              src={getImagePath()}
              alt="Career Roadmap Path"
              width="95%"
              maxWidth="400px"
            />
          </div>

          {/* Mobile cards */}
          <div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <MobileCard>
                  <MobileCircle bgColor={milestone.color}>
                    {milestone.number}
                  </MobileCircle>
                  <MobileContent>
                    <MilestoneTitle>{milestone.title}</MilestoneTitle>
                    <MilestoneDescription>
                      {milestone.description.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < milestone.description.split("\n").length - 1 && (
                            <br />
                          )}
                        </span>
                      ))}
                    </MilestoneDescription>
                  </MobileContent>
                </MobileCard>
              </motion.div>
            ))}
          </div>

         
        </MobileRoadmap>
      )}
    </RoadmapContainer>
  );
};

export default CareerRoadmap;
