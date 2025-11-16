import css from "./Options.module.css";

export default function Options({ handleClick, totalFeedback }) {
  return (
    <div className={css.container}>
      <button
        onClick={() => {
          handleClick("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          handleClick("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          handleClick("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          onClick={() => {
            handleClick("reset");
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
