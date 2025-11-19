import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import Feedback from "../Feedback/Feedback";
import css from "./App.module.css";

export default function App() {
  const [reviews, setReviews] = useState(() => {
    // Зчитуємо значення за ключем
    const reviews = window.localStorage.getItem("saved-reviews");

    // Якщо там щось є, парсимо і повертаємо
    // це значення як початкове значення стану
    if (reviews !== null) {
      return JSON.parse(reviews);
    }

    // У протилежному випадку повертаємо
    // яке-небудь значення за замовчуванням
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-reviews", JSON.stringify(reviews));
  }, [reviews]);

  const updateFeedback = (feedbackType) => {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positive = Math.round((reviews.good / totalFeedback) * 100 || 0);

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          reviews={reviews}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      )}
    </div>
  );
}
