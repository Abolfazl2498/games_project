import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 75 ? "yellow" : "";
  return <Badge colorScheme={color}>{score}</Badge>;
};

export default CriticScore;
