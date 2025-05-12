import React, { useState, useEffect, useMemo, useCallback, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import ProblemTable from "../../components/ProblemTable/ProblemTable";
import {
  ParentContainer,
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

// Memoized stats calculation component
const StatsDisplay = memo(
  ({ statsData, easyTotal, mediumTotal, hardTotal, solvedCount }) => {
    const circumference = 2 * Math.PI * 54; // 2πr where r=54

    // Calculate progress percentages
    const getProgressPercentage = (solved, total) => {
      if (total === 0) return 0;
      return (solved / total) * 100;
    };

    const easyPercentage = getProgressPercentage(statsData.easy, easyTotal);
    const mediumPercentage = getProgressPercentage(
      statsData.medium,
      mediumTotal
    );
    const hardPercentage = getProgressPercentage(statsData.hard, hardTotal);

    return (
      <StatsSection>
        <CircularProgress>
          <svg width="120" height="120" viewBox="0 0 120 120">
            {/* Background segments */}
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#d1fae5"
              strokeWidth="12"
              strokeDasharray={`${circumference / 3} ${
                (circumference * 2) / 3
              }`}
              strokeDashoffset="0"
              transform="rotate(-90 60 60)"
              strokeLinecap="round"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#fef3c7"
              strokeWidth="12"
              strokeDasharray={`${circumference / 3} ${
                (circumference * 2) / 3
              }`}
              strokeDashoffset={`${-circumference / 3}`}
              transform="rotate(-90 60 60)"
              strokeLinecap="round"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#fee2e2"
              strokeWidth="12"
              strokeDasharray={`${circumference / 3} ${
                (circumference * 2) / 3
              }`}
              strokeDashoffset={`${(-circumference * 2) / 3}`}
              transform="rotate(-90 60 60)"
              strokeLinecap="round"
            />

            {/* Foreground segments */}
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#22c55e"
              strokeWidth="12"
              strokeDasharray={`${
                (easyPercentage / 100) * (circumference / 3)
              } ${circumference}`}
              strokeDashoffset="0"
              transform="rotate(-90 60 60)"
              strokeLinecap="round"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="12"
              strokeDasharray={`${
                (mediumPercentage / 100) * (circumference / 3)
              } ${circumference}`}
              strokeDashoffset={`${-circumference / 3}`}
              transform="rotate(-90 60 60)"
              strokeLinecap="round"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#ef4444"
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
            <ProgressLabel>
              <span>{solvedCount}</span>/{statsData.total}
            </ProgressLabel>
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
    );
  }
);

// Memoized filters component
const FiltersSection = memo(
  ({
    searchTerm,
    setSearchTerm,
    filteredDifficulty,
    setFilteredDifficulty,
    filteredTopic,
    setFilteredTopic,
    categoryTitles,
  }) => {
    const handleSearchChange = useCallback(
      (e) => {
        setSearchTerm(e.target.value);
      },
      [setSearchTerm]
    );

    const handleDifficultyChange = useCallback(
      (e) => {
        setFilteredDifficulty(e.target.value);
      },
      [setFilteredDifficulty]
    );

    const handleTopicChange = useCallback(
      (e) => {
        setFilteredTopic(e.target.value);
      },
      [setFilteredTopic]
    );

    return (
      <SearchSection>
          
        <SearchBar>
          <FilterLabel>Search</FilterLabel>
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
            <FilterSelect value={filteredTopic} onChange={handleTopicChange}>
              <option>All</option>
              {categoryTitles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </FilterSelect>
          </FilterWrapper>
        </FilterContainer>
      </SearchSection>
    );
  }
);

// Memoized tabs component
const TabsSection = memo(({ activeTab, handleTabChange }) => {
  return (
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
  );
});

// Memoized problem table component
const MemoizedProblemTable = memo(ProblemTable);

const DSADashboard = () => {
  // State management with useReducer for related state
  const [filters, setFilters] = useState({
    difficulty: "All",
    topic: "All",
    searchTerm: "",
    activeTab: "All",
    activeLevel: "greaterThanThreeMonths", // Default level - 3+ months
  });

  // Memoize filter state update functions
  const setFilteredDifficulty = useCallback((difficulty) => {
    setFilters((prev) => ({ ...prev, difficulty }));
  }, []);

  const setFilteredTopic = useCallback((topic) => {
    setFilters((prev) => ({ ...prev, topic }));
  }, []);

  const setSearchTerm = useCallback((searchTerm) => {
    setFilters((prev) => ({ ...prev, searchTerm }));
  }, []);

  const handleTabChange = useCallback((activeTab) => {
    setFilters((prev) => ({ ...prev, activeTab }));
  }, []);

  const handleLevelChange = useCallback((activeLevel) => {
    setFilters((prev) => ({ ...prev, activeLevel }));
  }, []);

  // Use a single state for problems data instead of complex nested state
  const [problemsData, setProblemsData] = useState({});

  // Stats data
  const [statsData, setStatsData] = useState({
    total: 300,
    easy: 0,
    medium: 0,
    hard: 0,
    solvedCount: 0,
  });

  // Initialize problems data from dsaProblems on first load
  useEffect(() => {
    if (dsaProblems?.categories) {
      const initialData = {};
      Object.keys(dsaProblems.categories).forEach((categoryId) => {
        initialData[categoryId] = [
          ...dsaProblems.categories[categoryId].problems,
        ];
      });
      setProblemsData(initialData);
    }
  }, []);

  // Memoize categories
  const categories = useMemo(
    () => Object.keys(dsaProblems?.categories || {}),
    []
  );

  // Memoize category titles
  const categoryTitles = useMemo(
    () => categories.map((key) => dsaProblems.categories[key].title),
    [categories]
  );

  // Memoize all problems
  const allProblems = useMemo(
    () => Object.values(problemsData).flat(),
    [problemsData]
  );

  // Memoize level filtered problems
  const levelFilteredProblems = useMemo(
    () =>
      allProblems.filter(
        (problem) =>
          problem.level && problem.level.includes(filters.activeLevel)
      ),
    [allProblems, filters.activeLevel]
  );

  // Memoize difficulty counts
  const difficultyCounts = useMemo(() => {
    const easyTotal = levelFilteredProblems.filter(
      (p) => p?.difficulty === "Easy"
    ).length;
    const mediumTotal = levelFilteredProblems.filter(
      (p) => p?.difficulty === "Medium"
    ).length;
    const hardTotal = levelFilteredProblems.filter(
      (p) => p?.difficulty === "Hard"
    ).length;

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

    return {
      easyTotal,
      mediumTotal,
      hardTotal,
      solvedCount: totalSolved,
      statsData: {
        total: levelFilteredProblems.length,
        easy: easyProblems,
        medium: mediumProblems,
        hard: hardProblems,
      },
    };
  }, [levelFilteredProblems]);

  // Update stats data when difficulty counts change
  useEffect(() => {
    setStatsData(difficultyCounts.statsData);
  }, [difficultyCounts]);

  // Memoized filter function
  const filterProblems = useCallback(
    (problems, categoryTitle) => {
      if (!problems) return [];

      return problems.filter((problem) => {
        // Filter by level (time duration)
        const levelMatch =
          problem.level && problem.level.includes(filters.activeLevel);

        // Filter by difficulty
        const difficultyMatch =
          filters.difficulty === "All" ||
          problem.difficulty === filters.difficulty;

        // Filter by topic/category
        const topicMatch =
          filters.topic === "All" || categoryTitle === filters.topic;

        // Filter by search term
        const searchMatch = problem.name
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase());

        // Filter by tab
        let tabMatch = true;
        if (filters.activeTab === "Solved") {
          tabMatch = problem.solved;
        } else if (filters.activeTab === "Not Attempted") {
          tabMatch = !problem.solved;
        } else if (filters.activeTab === "Revision") {
          tabMatch = problem.revision;
        }

        return (
          levelMatch && difficultyMatch && searchMatch && tabMatch && topicMatch
        );
      });
    },
    [filters]
  );

  // Handle problem updates from ProblemTable
  const handleProblemUpdate = useCallback(
    (categoryId, updatedProgress, updatedProblems) => {
      setProblemsData((prevData) => ({
        ...prevData,
        [categoryId]: updatedProblems,
      }));
    },
    []
  );

  // Memoize filtered category problems
  const filteredCategoryProblems = useMemo(() => {
    const result = {};
    categories.forEach((categoryId) => {
      if (problemsData[categoryId]) {
        const categoryTitle = dsaProblems.categories[categoryId].title;
        const filtered = filterProblems(
          problemsData[categoryId],
          categoryTitle
        );
        if (filtered.length > 0) {
          result[categoryId] = {
            title: categoryTitle,
            problems: filtered,
          };
        }
      }
    });
    return result;
  }, [categories, problemsData, filterProblems]);

  return (
    <ParentContainer>
      <Container>
        <>
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
                active={card.type === filters.activeLevel}
                onClick={() => handleLevelChange(card.type)}
              />
            ))}
          </CardsContainer>

          <StatandFilter>
            <StatsDisplay
              statsData={statsData}
              easyTotal={difficultyCounts.easyTotal}
              mediumTotal={difficultyCounts.mediumTotal}
              hardTotal={difficultyCounts.hardTotal}
              solvedCount={difficultyCounts.solvedCount}
            />

            <FiltersSection
              searchTerm={filters.searchTerm}
              setSearchTerm={setSearchTerm}
              filteredDifficulty={filters.difficulty}
              setFilteredDifficulty={setFilteredDifficulty}
              filteredTopic={filters.topic}
              setFilteredTopic={setFilteredTopic}
              categoryTitles={categoryTitles}
            />
          </StatandFilter>

          <TabsSection
            activeTab={filters.activeTab}
            handleTabChange={handleTabChange}
          />

          {Object.keys(filteredCategoryProblems).map((categoryId) => (
            <TopicSection key={categoryId}>
              <MemoizedProblemTable
                title={filteredCategoryProblems[categoryId].title}
                problems={filteredCategoryProblems[categoryId].problems}
                onProgressUpdate={(progress, updatedProblems) =>
                  handleProblemUpdate(categoryId, progress, updatedProblems)
                }
              />
            </TopicSection>
          ))}
        </>
      </Container>
    </ParentContainer>
  );
};

export default DSADashboard;
