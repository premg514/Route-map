"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  RoadmapContainer,
  Road,
  CustomRoadPath,
  Milestone,
  MilestoneCircle,
  MilestoneNumber,
  MilestoneContent,
  MilestoneTitle,
  MilestoneDescription,
  PackageInfo,
  PackageItem,
  MobileRoadmap,
  MobileCard,
  MobileCircle,
  MobileContent,
} from "./styledComponents";

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

  // Define path key points with more compact zigzag pattern for mobile
  const pathKeyPoints = {
    desktop: {
      start: { x: 50, y: 480 },
      foundationStart: { x: 100, y: 480 },
      foundation: { x: 200, y: 480 },
      foundationEnd: { x: 300, y: 480 },
      foundationBend: { x: 300, y: 380 },
      trainingStart: { x: 300, y: 380 },
      training: { x: 425, y: 380 },
      trainingEnd: { x: 550, y: 380 },
      trainingBend: { x: 550, y: 280 },
      internshipStart: { x: 550, y: 280 },
      internship: { x: 650, y: 280 },
      internshipEnd: { x: 750, y: 280 },
      internshipBend: { x: 750, y: 180 },
      placementStart: { x: 750, y: 180 },
      placement: { x: 840, y: 180 },
      placementEnd: { x: 930, y: 180 },
      end: { x: 980, y: 180 },
    },
    // Mobile path designed to match the screenshot
    compact: {
      start: { x: 60, y: 240 }, // Start position (left)
      foundationStart: { x: 100, y: 240 },
      foundation: { x: 120, y: 240 }, // Foundation milestone
      foundationEnd: { x: 140, y: 240 },
      foundationBend: { x: 140, y: 190 }, // First bend upward
      trainingStart: { x: 140, y: 190 },
      training: { x: 180, y: 190 }, // Training milestone
      trainingEnd: { x: 220, y: 190 },
      trainingBend: { x: 220, y: 140 }, // Second bend upward
      internshipStart: { x: 220, y: 140 },
      internship: { x: 260, y: 140 }, // Internship milestone
      internshipEnd: { x: 300, y: 140 },
      internshipBend: { x: 300, y: 90 }, // Third bend upward
      placementStart: { x: 300, y: 90 },
      placement: { x: 340, y: 90 }, // Placement milestone
      placementEnd: { x: 380, y: 90 },
      end: { x: 420, y: 90 }, // Success position (right)
    },
  };

  // Get current path points based on device size
  const getCurrentPath = () => {
    if (isDesktop) return pathKeyPoints.desktop;
    return pathKeyPoints.compact; // Use compact layout for both tablet and mobile
  };

  const currentPath = getCurrentPath();

  // Position milestone content - labels appear beside circles in compact mode
  const milestoneContentConfig = {
    // Desktop positions (below circles)
    desktop: {
      foundation: { horizontalOffset: -90, verticalOffset: 40 },
      training: { horizontalOffset: -90, verticalOffset: 40 },
      internship: { horizontalOffset: -90, verticalOffset: 40 },
      placement: { horizontalOffset: -90, verticalOffset: 40 },
    },
    // Compact positions (beside circles)
    compact: {
      foundation: { horizontalOffset: -15, verticalOffset: -40 },
      training: { horizontalOffset: -15, verticalOffset: -40 },
      internship: { horizontalOffset: -15, verticalOffset: -40 },
      placement: { horizontalOffset: -15, verticalOffset: -40 },
    },
  };

  // Get appropriate content configuration
  const getContentConfig = () => {
    if (isDesktop) return milestoneContentConfig.desktop;
    return milestoneContentConfig.compact;
  };

  const contentConfig = getContentConfig();

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

  // Generate SVG path
  const generatePath = (points) => {
    return `M${points.start.x} ${points.start.y} 
            L${points.foundationStart.x} ${points.foundationStart.y}
            L${points.foundationEnd.x} ${points.foundationEnd.y} 
            L${points.foundationBend.x} ${points.foundationBend.y}
            L${points.trainingStart.x} ${points.trainingStart.y}
            L${points.trainingEnd.x} ${points.trainingEnd.y} 
            L${points.trainingBend.x} ${points.trainingBend.y}
            L${points.internshipStart.x} ${points.internshipStart.y}
            L${points.internshipEnd.x} ${points.internshipEnd.y} 
            L${points.internshipBend.x} ${points.internshipBend.y}
            L${points.placementStart.x} ${points.placementStart.y}
            L${points.placementEnd.x} ${points.placementEnd.y} 
            L${points.end.x} ${points.end.y}`;
  };

  const svgPath = generatePath(currentPath);

  // Responsive sizing for milestone circles and text
  const getMilestoneSize = () => {
    if (isDesktop) {
      return {
        roadWidth: 40,
        startEndRadius: { outer: 54, inner: 50 },
        startEndFontSize: 16,
        milestoneRadius: 30,
        milestoneFontSize: 16,
        trophySize: 32,
      };
    } else if (isTablet) {
      // Tablet sizes
      return {
        roadWidth: 30,
        startEndRadius: { outer: 40, inner: 35 },
        startEndFontSize: 14,
        milestoneRadius: 18,
        milestoneFontSize: 14,
        trophySize: 24,
      };
    } else {
      // Mobile sizes - scaled properly for compact layout
      return {
        roadWidth: 25,
        startEndRadius: { outer: 35, inner: 30 },
        startEndFontSize: 12,
        milestoneRadius: 15,
        milestoneFontSize: 12,
        trophySize: 20,
      };
    }
  };

  const {
    roadWidth,
    startEndRadius,
    startEndFontSize,
    milestoneRadius,
    milestoneFontSize,
    trophySize,
  } = getMilestoneSize();

  // Get mobile milestone size
  const getMobileMilestoneSize = () => {
    if (isTablet) return 45;
    return 40; // This matches the "01", "02" circles in the screenshot
  };

  const mobileMilestoneSize = getMobileMilestoneSize();

  // SVG viewport configuration
  const getSvgViewport = () => {
    if (isDesktop) return "0 0 1000 600";
    // For compact layout, use a smaller viewport that focuses on the path
    return "0 0 480 300";
  };

  const svgViewport = getSvgViewport();

  // Configure SVG display properties
  const getSvgDisplay = () => {
    if (isDesktop) {
      return {
        width: "100%",
        height: "100%",
        transform: "none",
      };
    }
    // For compact layout
    return {
      width: "100%",
      height: "100%",
      transform: isMobile ? "scale(0.9)" : "scale(0.95)", // Slightly smaller for mobile
      transformOrigin: "center",
    };
  };

  const svgDisplay = getSvgDisplay();

  // Configure mobile container dimensions
  const getMobileContainerStyle = () => {
    // For compact layout
    return {
      height: isTablet ? "300px" : "270px",
      marginBottom: "10px",
      overflow: "hidden",
    };
  };

  const mobileContainerStyle = getMobileContainerStyle();

  return (
    <RoadmapContainer>
      {isDesktop ? (
        <Road>
          <CustomRoadPath
            viewBox={svgViewport}
            width={svgDisplay.width}
            height={svgDisplay.height}
            preserveAspectRatio="xMidYMid meet"
            style={{
              transform: svgDisplay.transform,
              transformOrigin: svgDisplay.transformOrigin,
            }}
          >
            {/* Add shadow filter definition */}
            <defs>
              <filter
                id="roadShadow"
                x="-10%"
                y="-10%"
                width="120%"
                height="120%"
              >
                <feDropShadow
                  dx="2"
                  dy="4"
                  stdDeviation="5"
                  floodOpacity="0.3"
                />
              </filter>

              {/* Define trophy icon as a symbol for reuse */}
              <symbol
                id="trophyIcon"
                viewBox="0 0 24 24"
                width={trophySize}
                height={trophySize}
              >
                <path
                  d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M19,8 c0,1.3-0.84,2.4-2,2.82V7h2V8z"
                  fill="gold"
                />
              </symbol>
            </defs>

            {/* Shadow path */}
            <path
              d={svgPath}
              stroke="#ff3b4e"
              strokeWidth={roadWidth}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#roadShadow)"
            />

            {/* Main road path */}
            <path
              d={svgPath}
              stroke="#ff3b4e"
              strokeWidth={roadWidth}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Dashed white line */}
            <path
              d={svgPath}
              stroke="white"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="10 10"
            />

            {/* Start Milestone */}
            <circle
              cx={currentPath.start.x}
              cy={currentPath.start.y}
              r={startEndRadius.outer}
              fill="none"
              stroke="#E8B879"
              strokeWidth="4"
            />
            <circle
              cx={currentPath.start.x}
              cy={currentPath.start.y}
              r={startEndRadius.inner}
              fill="#F9A86F"
            />
            <text
              x={currentPath.start.x}
              y={currentPath.start.y + 6}
              textAnchor="middle"
              fill="#333"
              fontSize={startEndFontSize}
              fontWeight="bold"
            >
              Start
            </text>

            {/* Success Milestone with Trophy */}
            <circle
              cx={currentPath.end.x}
              cy={currentPath.end.y}
              r={startEndRadius.outer}
              fill="none"
              stroke="#4CAF50"
              strokeWidth="4"
            />
            <circle
              cx={currentPath.end.x}
              cy={currentPath.end.y}
              r={startEndRadius.inner}
              strokeWidth="2"
              fill="#4CAF50"
            />

            {/* Trophy icon */}
            <use
              href="#trophyIcon"
              x={currentPath.end.x - trophySize / 2}
              y={currentPath.end.y - trophySize / 2 - 3}
              width={trophySize}
              height={trophySize}
            />

            {/* Success text */}
            <text
              x={currentPath.end.x}
              y={currentPath.end.y + 14}
              textAnchor="middle"
              fill="#fff"
              fontSize={startEndFontSize}
              fontWeight="bold"
            >
              Success
            </text>

            {/* Render milestones directly in SVG */}
            {milestones.map((milestone) => {
              const position = currentPath[milestone.id];
              const config = contentConfig[milestone.id];

              return (
                <g key={milestone.id}>
                  {/* Milestone Circle */}
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r={milestoneRadius}
                    fill={milestone.color}
                    stroke="white"
                    strokeWidth="4"
                  />

                  {/* Milestone Number */}
                  <text
                    x={position.x}
                    y={position.y + 5}
                    textAnchor="middle"
                    fill="white"
                    fontSize={milestoneFontSize}
                    fontWeight="bold"
                  >
                    {milestone.number}
                  </text>

                  {/* For desktop, show content below milestone */}
                  {isDesktop && (
                    <foreignObject
                      x={position.x + config.horizontalOffset}
                      y={position.y + config.verticalOffset}
                      width="180"
                      height="120"
                    >
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          color: "black",
                          fontFamily: "Inter, sans-serif",
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "18px",
                            fontWeight: "600",
                            marginBottom: "5px",
                          }}
                        >
                          {milestone.title}
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.4",
                          }}
                        >
                          {milestone.description.split("\n").map((line, i) => (
                            <span key={i}>
                              {line}
                              {i <
                                milestone.description.split("\n").length -
                                  1 && <br />}
                            </span>
                          ))}
                        </div>
                      </div>
                    </foreignObject>
                  )}

                  {/* For compact layout, just show the label */}
                  {!isDesktop && (
                    <text
                      x={position.x - 5}
                      y={position.y - 20}
                      textAnchor="middle"
                      fill="black"
                      fontSize={14}
                      fontWeight="600"
                    >
                      {milestone.title}
                    </text>
                  )}
                </g>
              );
            })}
          </CustomRoadPath>

          {/* Package Info */}
          <PackageInfo>
            <PackageItem
              width="350"
              gradient="linear-gradient(135deg, #FF8C00, #FFB23E)"
            >
              Highest Package: ₹47 LPA
            </PackageItem>
            <PackageItem
              width="300"
              gradient="linear-gradient(135deg, #FC2947, #F04A61)"
            >
              Average Package: ₹7.2 LPA
            </PackageItem>
            <PackageItem
              width="250"
              gradient="linear-gradient(135deg, #2ECC71, #17A589)"
            >
              Minimum Package: ₹3.6 LPA
            </PackageItem>
          </PackageInfo>
        </Road>
      ) : (
        <MobileRoadmap>
          {/* Compact roadmap layout for non-desktop */}
          <Road style={mobileContainerStyle}>
            <CustomRoadPath
              viewBox={svgViewport}
              width={svgDisplay.width}
              height={svgDisplay.height}
              preserveAspectRatio="xMidYMid meet"
              style={{
                transform: svgDisplay.transform,
                transformOrigin: svgDisplay.transformOrigin,
              }}
            >
              {/* Add shadow filter definition */}
              <defs>
                <filter
                  id="mobileRoadShadow"
                  x="-10%"
                  y="-10%"
                  width="120%"
                  height="120%"
                >
                  <feDropShadow
                    dx="2"
                    dy="4"
                    stdDeviation="3"
                    floodOpacity="0.3"
                  />
                </filter>

                {/* Define trophy icon as a symbol for reuse */}
                <symbol
                  id="mobileTrophyIcon"
                  viewBox="0 0 24 24"
                  width={trophySize}
                  height={trophySize}
                >
                  <path
                    d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M19,8 c0,1.3-0.84,2.4-2,2.82V7h2V8z"
                    fill="gold"
                  />
                </symbol>
              </defs>

              {/* Shadow path */}
              <path
                d={svgPath}
                stroke="#ff3b4e"
                strokeWidth={roadWidth}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#mobileRoadShadow)"
              />

              {/* Main road path */}
              <path
                d={svgPath}
                stroke="#ff3b4e"
                strokeWidth={roadWidth}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Dashed white line */}
              <path
                d={svgPath}
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="8 8"
              />

              {/* Start Milestone */}
              <circle
                cx={currentPath.start.x}
                cy={currentPath.start.y}
                r={startEndRadius.outer}
                fill="none"
                stroke="#E8B879"
                strokeWidth="3"
              />
              <circle
                cx={currentPath.start.x}
                cy={currentPath.start.y}
                r={startEndRadius.inner}
                fill="#F9A86F"
              />
              <text
                x={currentPath.start.x}
                y={currentPath.start.y + 5}
                textAnchor="middle"
                fill="#333"
                fontSize={startEndFontSize}
                fontWeight="bold"
              >
                Start
              </text>

              {/* Success Milestone with Trophy */}
              <circle
                cx={currentPath.end.x}
                cy={currentPath.end.y}
                r={startEndRadius.outer}
                fill="none"
                stroke="#4CAF50"
                strokeWidth="3"
              />
              <circle
                cx={currentPath.end.x}
                cy={currentPath.end.y}
                r={startEndRadius.inner}
                fill="#4CAF50"
              />

              {/* Trophy Icon */}
              <use
                href="#mobileTrophyIcon"
                x={currentPath.end.x - trophySize / 2}
                y={currentPath.end.y - trophySize / 2}
                width={trophySize}
                height={trophySize}
              />

              {/* Success Text */}
              <text
                x={currentPath.end.x}
                y={currentPath.end.y + 14}
                textAnchor="middle"
                fill="#fff"
                fontSize={startEndFontSize}
                fontWeight="bold"
              >
                Success
              </text>

              {/* Mobile path milestones */}
              {milestones.map((milestone) => {
                const position = currentPath[milestone.id];
                return (
                  <g key={milestone.id}>
                    {/* Milestone Circle */}
                    <circle
                      cx={position.x}
                      cy={position.y}
                      r={milestoneRadius}
                      fill={milestone.color}
                      stroke="white"
                      strokeWidth="3"
                    />
                    {/* Milestone Number */}
                    <text
                      x={position.x}
                      y={position.y + 5}
                      textAnchor="middle"
                      fill="white"
                      fontSize={milestoneFontSize}
                      fontWeight="bold"
                    >
                      {milestone.number}
                    </text>
                    {/* Milestone Title */}
                    <text
                      x={position.x}
                      y={position.y - 15}
                      textAnchor="middle"
                      fill="black"
                      fontSize={14}
                      fontWeight="bold"
                    >
                      {milestone.title}
                    </text>
                  </g>
                );
              })}
            </CustomRoadPath>
          </Road>

          {/* Mobile cards */}

          <div style={{ marginTop: "20px" }}>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <MobileCard
                  style={{
                    marginBottom: "15px",
                    borderRadius: "12px",
                    padding: "14px",
                    backgroundColor: "#f5f5f5",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MobileCircle
                    bgColor={milestone.color}
                    style={{
                      width: mobileMilestoneSize + "px",
                      height: mobileMilestoneSize + "px",
                      borderRadius: "50%",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "18px",
                      flexShrink: 0,
                    }}
                  >
                    {milestone.number}
                  </MobileCircle>
                  <MobileContent
                    style={{
                      flex: 1,
                      paddingLeft: "16px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <MilestoneTitle
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "4px",
                        color: "#333",
                      }}
                    >
                      {milestone.title}
                    </MilestoneTitle>
                    <MilestoneDescription
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        color: "#555",
                      }}
                    >
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
