import s from "./Options.module.css";
export const Options = ({
  review,
  totalFeedback,
  handleReset,
  updateFeedback,
}) => {
  return (
    <ul className={s.list}>
      {review.map((option, index) => (
        <li className={s.item} key={option}>
          <button
            className={s.button}
            onClick={() => updateFeedback(option, index + 1)}
          >
            {option}
          </button>
        </li>
      ))}
      <li className={s.item}>
        {totalFeedback > 0 && (
          <button className={s.button} onClick={handleReset}>
            Reset
          </button>
        )}
      </li>
    </ul>
  );
};

export default Options;
