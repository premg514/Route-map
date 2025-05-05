import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import FeatureCard from "../../components/FeatureCard/FeatureCard";
import ProblemTable from "../../components/ProblemTable/ProblemTable";
import {
  Container,
  Header,
  Title,
  Subtitle,
  CardsContainer,
  StatandFilter,
  StatsSection,
  CircularProgress,
  ProgressText,
  ProgressLabel,
  StatsDetails,
  SearchSection,
  SearchBar,
  SearchInput,
  SearchIcon,
  FilterContainer,
  FilterWrapper,
  FilterLabel,
  FilterSelect,
  TabsContainer,
  Tab,
  TopicSection,
  StatsList,
  DifficultyCard,
  DifficultyCardTitle,
  DifficultyCardValue,
} from "./styledComponents";
import { featureCards, dsaProblems } from "../../data/data";

const DSADashboard = () => {
  const [solvedCount, setSolvedCount] = useState(0);
  const [statsData, setStatsData] = useState({
    total: 300,
    easy: 0,
    medium: 0,
    hard: 0,
  });
  const [filteredDifficulty, setFilteredDifficulty] = useState("All");
  const [filteredTopic, setFilteredTopic] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [activeLevel, setActiveLevel] = useState("greaterThanThreeMonths"); // Default level - 3+ months

  // Create a state object to store the modified problem data
  const [problemsData, setProblemsData] = useState({});

  // Initialize problems data from dsaProblems on first load
  useEffect(() => {
    if (dsaProblems?.categories) {
      const initialData = {};
      Object.keys(dsaProblems.categories).forEach((categoryId) => {
        initialData[categoryId] = [...dsaProblems.categories[categoryId].problems];
      });
      setProblemsData(initialData);
    }
  }, []);

  // Helper function to get problems for a category
  const getProblemsForCategory = (category) => {
    return problemsData[category] || [];
  };

  // Get all available categories
  const getAvailableCategories = () => {
    if (dsaProblems?.categories) {
      return Object.keys(dsaProblems.categories);
    }
    return [];
  };

  // Get all category titles for the filter dropdown
  const getCategoryTitles = () => {
    if (dsaProblems?.categories) {
      return Object.keys(dsaProblems.categories).map(
        (key) => dsaProblems.categories[key].title
      );
    }
    return [];
  };

  // Calculate stats based on problem data and active level
  useEffect(() => {
    const calculateStats = () => {
      // Get all problems
      const allProblems = Object.values(problemsData).flat();
      
      // Filter problems by active level
      const levelFilteredProblems = allProblems.filter(problem => 
        problem.level && problem.level.includes(activeLevel)
      );

      const easyProblems = levelFilteredProblems.filter(
        (p) => p?.difficulty === "Easy" && p?.solved
      ).length;
      const mediumProblems = levelFilteredProblems.filter(
        (p) => p?.difficulty === "Medium" && p?.solved
      ).length;
      const hardProblems = levelFilteredProblems.filter(
        (p) => p?.difficulty === "Hard" && p?.solved
      ).length;
      const totalSolved = easyProblems + mediumProblems + hardProblems;

      setSolvedCount(totalSolved);
      setStatsData({
        total: levelFilteredProblems.length,
        easy: easyProblems,
        medium: mediumProblems,
        hard: hardProblems,
      });
    };

    calculateStats();
  }, [problemsData, activeLevel]);

  // Filter problems based on current filters
  const filterProblems = (problems, categoryTitle) => {
    if (!problems) return [];

    return problems.filter((problem) => {
      // Filter by level (time duration)
      const levelMatch = problem.level && problem.level.includes(activeLevel);
      
      // Filter by difficulty
      const difficultyMatch =
        filteredDifficulty === "All" ||
        problem.difficulty === filteredDifficulty;

      // Filter by topic/category
      const topicMatch = 
        filteredTopic === "All" || 
        categoryTitle === filteredTopic;

      // Filter by search term
      const searchMatch = problem.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // Filter by tab
      let tabMatch = true;
      if (activeTab === "Solved") {
        tabMatch = problem.solved;
      } else if (activeTab === "Not Attempted") {
        tabMatch = !problem.solved;
      } else if (activeTab === "Revision") {
        tabMatch = problem.revision;
      }

      return levelMatch && difficultyMatch && searchMatch && tabMatch && topicMatch;
    });
  };

  // Handle difficulty filter change
  const handleDifficultyChange = (e) => {
    setFilteredDifficulty(e.target.value);
  };

  // Handle topic filter change
  const handleTopicChange = (e) => {
    setFilteredTopic(e.target.value);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle feature card click to change level
  const handleLevelChange = (levelType) => {
    setActiveLevel(levelType);
  };

  // Handle problem updates from ProblemTable
  const handleProblemUpdate = (
    categoryId,
    updatedProgress,
    updatedProblems
  ) => {
    // Update the specific category with the new problem data
    setProblemsData((prevData) => ({
      ...prevData,
      [categoryId]: updatedProblems,
    }));

    // The useEffect hook will trigger automatically to recalculate stats
  };

  // Calculate progress percentages for each difficulty level
  const getProgressPercentage = (solved, total) => {
    if (total === 0) return 0;
    return (solved / total) * 100;
  };

  // Count total problems for each difficulty that match the current level
  const allProblems = Object.values(problemsData).flat();
  const levelFilteredProblems = allProblems.filter(problem => 
    problem.level && problem.level.includes(activeLevel)
  );
  
  const easyTotal = levelFilteredProblems.filter(p => p?.difficulty === "Easy").length;
  const mediumTotal = levelFilteredProblems.filter(p => p?.difficulty === "Medium").length;
  const hardTotal = levelFilteredProblems.filter(p => p?.difficulty === "Hard").length;

  const easyPercentage = getProgressPercentage(statsData.easy, easyTotal);
  const mediumPercentage = getProgressPercentage(statsData.medium, mediumTotal);
  const hardPercentage = getProgressPercentage(statsData.hard, hardTotal);
  const circumference = 2 * Math.PI * 54; // 2πr where r=54
  
  // Calculate stroke dasharray and dashoffset for each segment
  const calculateStrokeDashValues = (percentage, segmentIndex) => {
    const circumference = 2 * Math.PI * 54; // 2πr where r=54
    const segmentLength = circumference / 3; // Divide circle into 3 equal parts
    const dashArray = segmentLength;
    const dashOffset = segmentLength * (1 - percentage / 100);

    // Calculate offset for positioning each segment correctly
    const rotationOffset = segmentIndex * 120; // 360/3 = 120 degrees per segment

    return {
      circumference,
      dasharray: `${dashArray} ${circumference - dashArray}`,
      dashoffset: dashOffset,
      rotation: -90 + rotationOffset, // Start at top (-90) and adjust per segment
    };
  };

  const easySegment = calculateStrokeDashValues(easyPercentage, 0);
  const mediumSegment = calculateStrokeDashValues(mediumPercentage, 1);
  const hardSegment = calculateStrokeDashValues(hardPercentage, 2);

  return (
    <Container>
      <Header>
        <Title>Master DSA Patterns</Title>
        <Subtitle>
          Sharpen your coding skills with handpicked problems and proven
          strategies.
        </Subtitle>
      </Header>

      <CardsContainer>
        {featureCards.map((card, index) => (
          <FeatureCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            icon={card.icon}
            type={card.type}
            active={card.type === activeLevel}
            onClick={() => handleLevelChange(card.type)}
          />
        ))}
      </CardsContainer>
      <StatandFilter>
        <StatsSection>
          <CircularProgress>
            <svg width="120" height="120" viewBox="0 0 120 120">
              {/* Background segments with light colors (incomplete portions) */}
              {/* Easy segment background (light green) */}
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#d1fae5" // Light green
                strokeWidth="12"
                strokeDasharray={`${circumference / 3} ${
                  (circumference * 2) / 3
                }`}
                strokeDashoffset="0"
                transform="rotate(-90 60 60)"
                strokeLinecap="round"
              />

              {/* Medium segment background (light orange) */}
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#fef3c7" // Light orange
                strokeWidth="12"
                strokeDasharray={`${circumference / 3} ${
                  (circumference * 2) / 3
                }`}
                strokeDashoffset={`${-circumference / 3}`}
                transform="rotate(-90 60 60)"
                strokeLinecap="round"
              />

              {/* Hard segment background (light red) */}
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#fee2e2" // Light red
                strokeWidth="12"
                strokeDasharray={`${circumference / 3} ${
                  (circumference * 2) / 3
                }`}
                strokeDashoffset={`${(-circumference * 2) / 3}`}
                transform="rotate(-90 60 60)"
                strokeLinecap="round"
              />

              {/* Foreground segments with dark colors (completed portions) */}
              {/* Easy segment (dark green) */}
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#22c55e" // Dark green
                strokeWidth="12"
                strokeDasharray={`${
                  (easyPercentage / 100) * (circumference / 3)
                } ${circumference}`}
                strokeDashoffset="0"
                transform="rotate(-90 60 60)"
                strokeLinecap="round"
              />

              {/* Medium segment (dark orange) */}
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#f59e0b" // Dark orange
                strokeWidth="12"
                strokeDasharray={`${
                  (mediumPercentage / 100) * (circumference / 3)
                } ${circumference}`}
                strokeDashoffset={`${-circumference / 3}`}
                transform="rotate(-90 60 60)"
                strokeLinecap="round"
              />

              {/* Hard segment (dark red) */}
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#ef4444" // Dark red
                strokeWidth="12"
                strokeDasharray={`${
                  (hardPercentage / 100) * (circumference / 3)
                } ${circumference}`}
                strokeDashoffset={`${(-circumference * 2) / 3}`}
                transform="rotate(-90 60 60)"
                strokeLinecap="round"
              />
            </svg>
            <ProgressText>
              <ProgressLabel><span>{solvedCount}</span>/{statsData.total}</ProgressLabel>
              <ProgressLabel>Solved</ProgressLabel>
            </ProgressText>
          </CircularProgress>
          <StatsDetails>
            <StatsList>
              <DifficultyCard>
                <DifficultyCardTitle level="easy">Easy</DifficultyCardTitle>
                <DifficultyCardValue>
                  {statsData.easy}/{easyTotal}
                </DifficultyCardValue>
              </DifficultyCard>

              <DifficultyCard>
                <DifficultyCardTitle level="medium">Medium</DifficultyCardTitle>
                <DifficultyCardValue>
                  {statsData.medium}/{mediumTotal}
                </DifficultyCardValue>
              </DifficultyCard>

              <DifficultyCard>
                <DifficultyCardTitle level="hard">Hard</DifficultyCardTitle>
                <DifficultyCardValue>
                  {statsData.hard}/{hardTotal}
                </DifficultyCardValue>
              </DifficultyCard>
            </StatsList>
          </StatsDetails>
        </StatsSection>

        <SearchSection>
          <SearchBar>
            <SearchInput
              placeholder="Search Problem"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <SearchIcon>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchIcon>
          </SearchBar>

          <FilterContainer>
            <FilterWrapper>
              <FilterLabel>Difficulty</FilterLabel>
              <FilterSelect
                value={filteredDifficulty}
                onChange={handleDifficultyChange}
              >
                <option>All</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </FilterSelect>
            </FilterWrapper>

            <FilterWrapper>
              <FilterLabel>Topic</FilterLabel>
              <FilterSelect
                value={filteredTopic}
                onChange={handleTopicChange}
              >
                <option>All</option>
                {getCategoryTitles().map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </FilterSelect>
            </FilterWrapper>
          </FilterContainer>
        </SearchSection>
      </StatandFilter>

      <TabsContainer>
        {["All", "Solved", "Not Attempted", "Revision"].map((tab) => (
          <Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </Tab>
        ))}
      </TabsContainer>

      {getAvailableCategories().map((categoryId) => {
        if (!problemsData[categoryId]) return null;

        const categoryTitle = dsaProblems.categories[categoryId].title;
        const filteredCategoryProblems = filterProblems(
          problemsData[categoryId],
          categoryTitle
        );

        // Only show sections with matching problems
        if (filteredCategoryProblems.length === 0)
          return null;

        return (
          <TopicSection key={categoryId}>
            <ProblemTable
              title={categoryTitle}
              problems={filteredCategoryProblems}
              onProgressUpdate={(progress, updatedProblems) =>
                handleProblemUpdate(categoryId, progress, updatedProblems)
              }
            />
          </TopicSection>
        );
      })}
    </Container>
  );
};

export default DSADashboard;