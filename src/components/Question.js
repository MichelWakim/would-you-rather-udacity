import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helper';

export class Question extends Component {
  
  render() {
    const { question } = this.props;
    if (question === null) {
      return <p>This question doesn't exist</p>;
    }
    const {
      name,
      avatar,
      timestamp,
      optionOneVotes,
      optionOneText,
      optionTwoVotes,
      optionTwoText
    } = question;
    return (
      <div className="question">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        <div className="question-info">
          <div>
            <span> {name} asks :</span>
            <p>Whould you rather</p>
          </div>
          <div>
            <span>{optionOneText} or {optionTwoText}</span>
          </div>
          <div className="question-icons">
            <button className="question-button" onClick={this.handleAnswer}>
            <span>View Poll</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  }
}

export default connect(mapStateToProps)(Question) 
