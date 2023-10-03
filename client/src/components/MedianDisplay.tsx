import { formatAnswer } from "../utils/formatAnswer";

type MedianDisplayProps = {
  answer: number[] | null;
};

export const MedianDisplay = ({ answer }: MedianDisplayProps) => {
  return (
    <div className="h-28 text-white text-center">
      {answer && (
        <>
          <h2 className="text-lg">Median</h2>
          <span data-testid="answer-span" className="text-4xl">
            {formatAnswer(answer)}
          </span>
        </>
      )}
    </div>
  );
};
