export const Options = ({
  review,
  totalFeedback,
  handleReset,
  updateFeedback,
}) => {
  return (
    <ul>
      {review.map((option, index) => (
        <li key={option}>
          <button onClick={() => updateFeedback(option, index + 1)}>
            {option}
          </button>
        </li>
      ))}
      <li>
        {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
      </li>
    </ul>
  );
};

export default Options;
