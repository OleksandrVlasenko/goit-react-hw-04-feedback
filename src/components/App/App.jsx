import React, { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import css from './App.module.css';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedbacks = value => {
    setFeedbacks(prevState => ({
      ...prevState,
      [value]: prevState[value] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedbacks).reduce((total, feedback) => {
      return total + feedback;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedbacks.good * 100) / countTotalFeedback());
  };

  return (
    <>
      <h1 className={css.header}>Cafe Espresso</h1>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbacks}
          onLeaveFeedback={updateFeedbacks}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedbacks.good}
            neutral={feedbacks.neutral}
            bad={feedbacks.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
