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
    const feedbackMap = {
      good: { ...reviews, good: reviews.good + 1 },
      neutral: { ...reviews, neutral: reviews.neutral + 1 },
      bad: { ...reviews, bad: reviews.bad + 1 },
      reset: { good: 0, neutral: 0, bad: 0 },
    };
    setReviews(feedbackMap[feedbackType]);
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  return (
    <div className={css.container}>
      <Description />
      <Options handleClick={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? <Notification /> : <Feedback reviews={reviews} />}
    </div>
  );
}
