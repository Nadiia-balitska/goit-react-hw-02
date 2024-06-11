import s from "./Feadback.module.css";

export const Feedback = ({
  totalFeedback,
  positiveFeedback,
  variants = [],
}) => {
  return (
    <ul className={s.list}>
      {variants.map((el) => (
        <li className={s.item} key={el[0]}>
          {el[0]}:{el[1]}
        </li>
      ))}
      <li className={s.item}>Total: {totalFeedback}</li>
      <li className={s.item}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
