import { Component } from 'react';

import './App.css';

import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleGoFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return { total: prevState.total + 1 };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positiveFeedback: ((prevState.good / prevState.total) * 100).toFixed(),
      };
    });
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleGoFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
