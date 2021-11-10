import { Component } from 'react';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const onLeaveFeedback = this.props.onLeaveFeedback;
    return (
      <>
        <button
          className={s.btn}
          type="button"
          name="good"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
        <button
          className={s.btn}
          type="button"
          name="neutral"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          className={s.btn}
          type="button"
          name="bad"
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </>
    );
  }
}

export default FeedbackOptions;
