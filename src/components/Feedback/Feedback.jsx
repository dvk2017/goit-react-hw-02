import css from "./Feedback.module.css";

export default function Feedback({ reviews }) {
  const total = reviews.good + reviews.neutral + reviews.bad;
  const positive = ((reviews.good + reviews.neutral) / total) * 100 || 0;

  return (
    <div className={css.text}>
      <p>Good: {reviews.good}</p>
      <p>Neutral: {reviews.neutral}</p>
      <p>Bad: {reviews.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {Math.round(positive)}%</p>
    </div>
  );
}
