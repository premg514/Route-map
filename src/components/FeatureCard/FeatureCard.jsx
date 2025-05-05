import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardIcon,
} from "./styledComponents";

const FeatureCard = ({ title, subtitle, icon, type, active, onClick }) => {
  return (
    <Card active={active} onClick={() => onClick(type)}>
      <CardIcon src={icon} alt={title} />

      <CardContent active={active}>
        <CardTitle active={active}>{title}</CardTitle>
        <CardSubtitle active={active}>{subtitle}</CardSubtitle>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
