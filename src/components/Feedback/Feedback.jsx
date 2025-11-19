import css from "./Feedback.module.css";

export default function Feedback({ reviews, totalFeedback, positive }) {
  return (
    <div className={css.text}>
      <p>Good: {reviews.good}</p>
      <p>Neutral: {reviews.neutral}</p>
      <p>Bad: {reviews.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
}
