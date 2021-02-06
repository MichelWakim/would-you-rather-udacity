import React, { Component } from 'react'

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

    // todo: Add Question to Store

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
        <h3 className='center'>Compose new Poll</h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <p>Create a New Poll</p>
          <p>Complete the question:</p>
          <p>Would you rather</p>
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

export default NewQuestion