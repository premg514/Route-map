import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { toggleTopics } from "../../data/toggleData";
import {
  TestContainer,
  SectionHeader,
  SectionTitle,
  ProgressIndicator,
  ProgressBarContainer,
  ProgressBar,
  TopicList,
  TopicItem,
  TopicName,
  ActionButton,
  ExpandIcon,
  HeaderTop,
  HeaderBottom,
} from "./styledComponents";

const AptitudeTest = () => {
  const [testSections, setTestSections] = useState(toggleTopics);

  // Toggle section expansion
  const toggleSection = (sectionId) => {
    setTestSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? { ...section, expanded: !section.expanded }
          : section
      )
    );
  };

  // Handle Start button click
  const handleStartClick = (sectionId, topicId, event) => {};

  return (
    <TestContainer>
      {testSections.map((section) => {
        return (
          <div key={section.id}>
            <SectionHeader onClick={() => toggleSection(section.id)}>
              <SectionTitle>{section.title}</SectionTitle>
              <ExpandIcon>
                {section.expanded ? (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                  <FontAwesomeIcon icon={faChevronUp} />
                )}
              </ExpandIcon>
            </SectionHeader>

            {section.expanded && (
              <TopicList>
                {section.topics.map((topic) => (
                  <TopicItem key={topic.id} inProgress={topic.inProgress}>
                    <TopicName>{topic.name}</TopicName>
                    <ActionButton
                      onClick={(e) => handleStartClick(section.id, topic.id, e)}
                    >
                      Start <FontAwesomeIcon icon={faArrowRight} />
                    </ActionButton>
                  </TopicItem>
                ))}
              </TopicList>
            )}
          </div>
        );
      })}
    </TestContainer>
  );
};

export default AptitudeTest;
