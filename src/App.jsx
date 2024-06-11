import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [review, setReview] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setReview((prev) => ({
      ...prev,
      [feedbackType]: review[feedbackType] + 1,
    }));
  };

  const totalFeedback = Object.values(review).reduce(
    (acc, value) => acc + value,
    0
  );

  const positiveFeedback = Math.round((review["good"] / totalFeedback) * 100);

  const handleReset = () => {
    setReview({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        review={Object.keys(review)}
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        handleReset={handleReset}
      />
      {totalFeedback ? (
        <Feedback
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
          variants={Object.entries(review)}
        />
      ) : (
        <Notification title="No feedback yet" />
      )}
    </>
  );
}

export default App;
