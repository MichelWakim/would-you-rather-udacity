import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  }
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { id } = this.props;

    // todo: Add Question to Store
    this.props.handleAddQuestion(optionOne, optionTwo, id);
    console.log('New Question: ', optionOne, optionTwo)
  

    this.setState(() => ({
      optionOne: '',
      optionTwo: ''
    }))
  }
  render() {
    const { optionOne } = this.state
    const { optionTwo } = this.state

    {/* todo: Redirect to / if submitted */}

    //const tweetLeft = 280 - text.length

    return (
      <div>
        <h3 className='center'>Create new Poll</h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <p>Complete the question:</p>
          <p><strong>Would you rather</strong></p>
          <textarea
            placeholder="Enter Option one ..."
            id="optionOne"
            value={this.state.optionOne}
            onChange={this.handleChange}
            className='textarea'
            //maxLength={280}
          />
          
          <textarea
            placeholder="Enter Option two ..."
            id="optionTwo"
            value={this.state.optionTwo}
            onChange={this.handleChange}
            className='textarea'
            //maxLength={280}
          />
          <button
            className='btn'
            type='submit'
            disabled={optionOne === '' || optionTwo === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

const actionCreators = { handleAddQuestion };

export default connect(
  null,
  actionCreators
)(NewQuestion);
