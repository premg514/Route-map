import React, { useState, useEffect } from "react";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"; // for filled star
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons"; // for empty star
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

import {
  Container,
  TopicHeader,
  ProgressHeader,
  TableContainer,
  Table,
  Th,
  Td,
  DifficultyBadge,
  IconButton,
  ProgressBarFill,
  ProgressBarContainer,
  Thead,
} from "./styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// New styled component for the progress bar

const ProblemTable = ({
  title,
  problems: initialProblems,
  progress,
  onProgressUpdate,
}) => {
  // Keep local state for immediate UI updates
  const [problemsList, setProblemsList] = useState(initialProblems);
  const [progressPercent, setProgressPercent] = useState(0);

  // Update local state when props change
  useEffect(() => {
    setProblemsList(initialProblems);
    updateProgressPercent(initialProblems);
  }, [initialProblems]);

  // Calculate current progress
  const calculateProgress = (problems) => {
    const solved = problems.filter((p) => p.solved).length;
    return `${solved}/${problems.length}`;
  };

  // Calculate progress percentage for the bar
  const updateProgressPercent = (problems) => {
    if (problems.length === 0) {
      setProgressPercent(0);
      return;
    }
    const solved = problems.filter((p) => p.solved).length;
    const percent = (solved / problems.length) * 100;
    setProgressPercent(percent);
  };

  // Function to toggle solved status
  const toggleSolvedStatus = (index) => {
    const updatedProblems = [...problemsList];
    updatedProblems[index].solved = !updatedProblems[index].solved;
    setProblemsList(updatedProblems);
    updateProgressPercent(updatedProblems);

    // Notify parent component about the update
    if (onProgressUpdate) {
      onProgressUpdate(calculateProgress(updatedProblems), updatedProblems);
    }
  };

  // Function to toggle revision mark
  const toggleRevisionMark = (index) => {
    const updatedProblems = [...problemsList];
    updatedProblems[index].revision = !updatedProblems[index].revision;
    setProblemsList(updatedProblems);

    // Notify parent component about the update (for revision)
    if (onProgressUpdate) {
      onProgressUpdate(calculateProgress(updatedProblems), updatedProblems);
    }
  };

  return (
    <Container>
      <TopicHeader>{title}</TopicHeader>
      <ProgressHeader>
        <span>Progress</span>
        {/* Progress Bar */}
        <ProgressBarContainer>
          <ProgressBarFill style={{ width: `${progressPercent}%` }} />
        </ProgressBarContainer>
        <span>{progress || calculateProgress(problemsList)}</span>
      </ProgressHeader>

      <TableContainer>
        <Table>
          <Thead>
            <tr>
              <Th style={{ width: "5%" }}>Status</Th>
              <Th style={{ width: "35%" }}>Problem</Th>
              <Th style={{ width: "15%" }}>Difficulty</Th>
              <Th style={{ width: "25%" }}>Solution</Th>
              <Th style={{ width: "20%" }}>Mark for Revision</Th>
            </tr>
          </Thead>
          <tbody>
            {problemsList.length === 0 ? (
              <tr>
                <Td colSpan="5" style={{ textAlign: "center" }}>
                  No problems match your current filters
                </Td>
              </tr>
            ) : (
              problemsList.map((problem, index) => (
                <tr key={index}>
                  <Td>
                    <input
                      type="checkbox"
                      checked={problem.solved || false}
                      onChange={() => toggleSolvedStatus(index)}
                    />
                  </Td>
                  <Td >
                    <a style={{ color: "#3C9BD9", cursor: "pointer" }} href={problem.links.leetcode} target="_blank">
                      {problem.name}
                    </a>
                  </Td>
                  <Td>
                    <DifficultyBadge level={problem.difficulty?.toLowerCase()}>
                      {problem.difficulty}
                    </DifficultyBadge>
                  </Td>
                  <Td>
                    {problem.links?.github && (
                      <IconButton
                        as="a"
                        href={problem.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View code on GitHub"
                      >
                        <FontAwesomeIcon fontSize="20" icon={faGithub} />
                      </IconButton>
                    )}
                    {problem.links?.youtube && (
                      <IconButton
                        as="a"
                        href={problem.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Watch tutorial on YouTube"
                      >
                        <FontAwesomeIcon fontSize="20px" icon={faYoutube} />
                      </IconButton>
                    )}
                  </Td>
                  <Td>
                    <IconButton
                      onClick={() => toggleRevisionMark(index)}
                      aria-label={
                        problem.revision
                          ? "Remove from revision"
                          : "Mark for revision"
                      }
                    >
                      <FontAwesomeIcon
                        icon={problem.revision ? solidStar : regularStar}
                        color={problem.revision ? "#FFD700" : "currentColor"}
                        size="lg" // you can adjust size
                      />
                    </IconButton>
                  </Td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ProblemTable;
