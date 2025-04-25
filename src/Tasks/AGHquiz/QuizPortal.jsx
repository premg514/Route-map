import React, { useState, useEffect } from "react";
import { Search, Youtube } from "lucide-react";
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
  ProgressNumber,
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
import {
  featureCards,
  dsaProblems
} from "../../data/data";

const DSADashboard = () => {
  const [activeLanguage, setActiveLanguage] = useState("python");
  const [solvedCount, setSolvedCount] = useState(0);
  const [statsData, setStatsData] = useState({
    total: 300,
    easy: 0,
    medium: 0,
    hard: 0,
  });
  const [filteredDifficulty, setFilteredDifficulty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  
  // Create a state object to store the modified problem data
  const [problemsData, setProblemsData] = useState({});

  // Initialize problems data from dsaProblems on first load and language change
  useEffect(() => {
    if (dsaProblems?.languages?.[activeLanguage]?.categories) {
      const initialData = {};
      Object.keys(dsaProblems.languages[activeLanguage].categories).forEach(categoryId => {
        initialData[categoryId] = [...dsaProblems.languages[activeLanguage].categories[categoryId].problems];
      });
      setProblemsData(initialData);
    }
  }, [activeLanguage]);

  // Helper function to get problems for a category
  const getProblemsForCategory = (category) => {
    return problemsData[category] || [];
  };

  // Get all available categories
  const getAvailableCategories = () => {
    if (dsaProblems?.languages?.[activeLanguage]?.categories) {
      return Object.keys(dsaProblems.languages[activeLanguage].categories);
    }
    return [];
  };

  // Calculate stats based on problem data
  useEffect(() => {
    const calculateStats = () => {
      const allProblems = Object.values(problemsData).flat();
      
      const easyProblems = allProblems.filter(p => p?.difficulty === "Easy" && p?.solved).length;
      const mediumProblems = allProblems.filter(p => p?.difficulty === "Medium" && p?.solved).length;
      const hardProblems = allProblems.filter(p => p?.difficulty === "Hard" && p?.solved).length;
      const totalSolved = easyProblems + mediumProblems + hardProblems;

      setSolvedCount(totalSolved);
      setStatsData({
        total: allProblems.length,
        easy: easyProblems,
        medium: mediumProblems,
        hard: hardProblems,
      });
    };

    calculateStats();
  }, [problemsData]);

  // Calculate circle progress
  const calculateCircleProgress = (total, solved) => {
    const progressPercentage = total > 0 ? (solved / total) * 100 : 0;
    const circumference = 2 * Math.PI * 54; // 2πr where r=54
    const dashoffset = circumference - (progressPercentage / 100) * circumference;
    return {
      dasharray: circumference,
      dashoffset: dashoffset
    };
  };

  const totalProgress = calculateCircleProgress(statsData.total, solvedCount);

  // Filter problems based on current filters
  const filterProblems = (problems) => {
    if (!problems) return [];
    
    return problems.filter(problem => {
      // Filter by difficulty
      const difficultyMatch = filteredDifficulty === "All" || problem.difficulty === filteredDifficulty;
      
      // Filter by search term
      const searchMatch = problem.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filter by tab
      let tabMatch = true;
      if (activeTab === "Solved") {
        tabMatch = problem.solved;
      } else if (activeTab === "Not Attempted") {
        tabMatch = !problem.solved;
      } else if (activeTab === "Revision") {
        tabMatch = problem.revision;
      }
      
      return difficultyMatch && searchMatch && tabMatch;
    });
  };

  // Handle language change
  const handleLanguageChange = (e) => {
    setActiveLanguage(e.target.value);
  };

  // Handle difficulty filter change
  const handleDifficultyChange = (e) => {
    setFilteredDifficulty(e.target.value);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle problem updates from ProblemTable
  const handleProblemUpdate = (categoryId, updatedProgress, updatedProblems) => {
    // Update the specific category with the new problem data
    setProblemsData(prevData => ({
      ...prevData,
      [categoryId]: updatedProblems
    }));
    
    // The useEffect hook will trigger automatically to recalculate stats
  };

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
            active={card.active}
          />
        ))}
      </CardsContainer>
      <StatandFilter>
        <StatsSection>
          <CircularProgress>
            <svg width="120" height="120" viewBox="0 0 120 120">
              {/* Background circle */}
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#f1f1f1"
                strokeWidth="12"
              />

              {/* Progress circle */}
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#22c55e"
                strokeWidth="12"
                strokeDasharray={totalProgress.dasharray}
                strokeDashoffset={totalProgress.dashoffset}
                transform="rotate(-90 60 60)"
                strokeLinecap="round"
              />
            </svg>
            <ProgressText>
              <ProgressNumber>{solvedCount}</ProgressNumber>
              <ProgressLabel>/{statsData.total}</ProgressLabel>
              <ProgressLabel>Solved</ProgressLabel>
            </ProgressText>
          </CircularProgress>

          <StatsDetails>
            <StatsList>
              <DifficultyCard>
                <DifficultyCardTitle level="easy">Easy</DifficultyCardTitle>
                <DifficultyCardValue>
                  {statsData.easy}/{Object.values(problemsData).flat().filter(p => p?.difficulty === "Easy").length}
                </DifficultyCardValue>
              </DifficultyCard>

              <DifficultyCard>
                <DifficultyCardTitle level="medium">Medium</DifficultyCardTitle>
                <DifficultyCardValue>
                  {statsData.medium}/{Object.values(problemsData).flat().filter(p => p?.difficulty === "Medium").length}
                </DifficultyCardValue>
              </DifficultyCard>

              <DifficultyCard>
                <DifficultyCardTitle level="hard">Hard</DifficultyCardTitle>
                <DifficultyCardValue>
                  {statsData.hard}/{Object.values(problemsData).flat().filter(p => p?.difficulty === "Hard").length}
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
              <Search size={18} />
            </SearchIcon>
          </SearchBar>

          <FilterContainer>
            <FilterWrapper>
              <FilterLabel>Difficulty</FilterLabel>
              <FilterSelect value={filteredDifficulty} onChange={handleDifficultyChange}>
                <option>All</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </FilterSelect>
            </FilterWrapper>

            <FilterWrapper>
              <FilterLabel>Preferred Language</FilterLabel>
              <FilterSelect value={activeLanguage} onChange={handleLanguageChange}>
                {Object.keys(dsaProblems.languages).map(lang => (
                  <option key={lang} value={lang}>
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </option>
                ))}
              </FilterSelect>
            </FilterWrapper>
          </FilterContainer>
        </SearchSection>
      </StatandFilter>

      <TabsContainer>
        {["All", "Solved", "Not Attempted", "Revision"].map(tab => (
          <Tab 
            key={tab} 
            active={activeTab === tab}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </Tab>
        ))}
      </TabsContainer>

      {getAvailableCategories().map(categoryId => {
        if (!problemsData[categoryId]) return null;
        
        const categoryTitle = dsaProblems.languages[activeLanguage].categories[categoryId].title;
        const filteredCategoryProblems = filterProblems(problemsData[categoryId]);
        
        // Only show sections with matching problems
        if (filteredCategoryProblems.length === 0 && activeTab !== "All") return null;
        
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