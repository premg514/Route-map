import React from 'react';
import { Card, CardContent, CardIcon, CardDetails, CardTitle, CardSubtitle } from './styledComponents';

const FeatureCard = ({ title, subtitle, icon, type, active }) => {
  return (
    <Card active={active}>
      <CardContent>
        <CardIcon src={icon} type={type}></CardIcon>
        <CardDetails active={active}>
          <CardTitle active={active}>{title}</CardTitle>
          <CardSubtitle active={active}>{subtitle}</CardSubtitle>
        </CardDetails>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;