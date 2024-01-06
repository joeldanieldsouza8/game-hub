import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

function CriticScore({ score }: CriticScoreProps) {
  const color = score >= 75 ? "green" : score >= 50 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2}>
      {score}
    </Badge>
  );
}

export default CriticScore;
