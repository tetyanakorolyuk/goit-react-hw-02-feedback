import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      }
    })
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
   }

   countPositiveFeedbackPercentage() {
    const positiveFeedbackPercentage = Math.round((this.state.good / this.countTotalFeedback()) * 100);
    return positiveFeedbackPercentage;
   }

render() {
  const { good, neutral, bad } = this.state;
return (
  <div className={s.section}>
    <Section title="Please leave feedback">
      <FeedbackOptions
      options = {['good', 'neutral', 'bad']}
      onLeaveFeedback = {this.onLeaveFeedback}
      />
    </Section>
    <Section title="Statistics">
      {this.countTotalFeedback() ?
        (<Statistics
          good = {good}
          neutral = {neutral}
          bad = {bad}
          total = {this.countTotalFeedback()}
          positivePercentage = {this.countPositiveFeedbackPercentage()}
      />) : (<Notification message = "There is no feedback"/>)
      }
    </Section>
  </div>
);
}
}

export default App;
