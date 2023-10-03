type MedianDisplayProps = {
  answer: number[] | null;
};

const formatAnswer = (answer: number[]) => {
  return `[ ${answer.join(", ")} ]`;
};

export const MedianDisplay = ({ answer }: MedianDisplayProps) => {
  return (
    <div className="h-28 text-white text-center">
      {answer && (
        <>
          <h2 className="text-lg">Median</h2>
          <span className="text-4xl">{formatAnswer(answer)}</span>
        </>
      )}
    </div>
  );
};
