import React from 'react';
import {
  Container,
  TemplateCard,
  TemplateImage,
  ContentSection,
  LastUpdated,
  Title,
  Description,
  TagsContainer,
  Tag,
  DownloadButton,
  DownloadIcon
} from './styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resumeTemplateImg from "../../assets/resumetemplate.png"
import resumeTemplatePdf from "../../assets/resumetemplate.pdf"
const ResumeTemplates = () => {
  const templates = [
    {
      id: 1,
      name: 'Resume Template',
      preview: resumeTemplateImg,
      download: resumeTemplatePdf,
      lastUpdated: '20 Jan 2025',
      description: 'Discover a resume that\'s clean, impactful, and recruiter-approved. This professionally structured resume helped land interviews at top companies. Whether you\'re a student, fresher, or experienced candidate, this template helps you present your skills with confidence.',
      tags: ['ATS Friendly', 'Professional Resume', 'Job Ready']
    }
  ];

  return (
    <Container>
      {templates.map((template) => (
        <TemplateCard key={template.id}>
          <TemplateImage>
            <img src={template.preview} alt={template.name} />
          </TemplateImage>
          <ContentSection>
            <LastUpdated>Last Updated On • {template.lastUpdated}</LastUpdated>
            <Title>{template.name}</Title>
            <Description>{template.description}</Description>
            <TagsContainer>
              {template.tags.map((tag, index) => (
                <Tag key={index} variant={index === 0 ? 'purple' : index === 1 ? 'blue' : 'red'}>
                  {tag}
                </Tag>
              ))}
            </TagsContainer>
            <DownloadButton href={template.download} download>
              Download
              <DownloadIcon>  <FontAwesomeIcon icon={faDownload}  /></DownloadIcon>
            </DownloadButton>
          </ContentSection>
        </TemplateCard>
      ))}
    </Container>
  );
};

export default ResumeTemplates;