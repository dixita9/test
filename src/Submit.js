import React from 'react';

class Submit extends React.Component {
  state = {
    answer: '',
    answer2: '',
    submitted: false,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { answer, answer2 } = this.state;

    if (answer && answer2) {
      this.setState({ submitted: true });
    } else {
      alert("Please answer all questions.");
    }
  };

  render() {
    const { answer, answer2, submitted } = this.state;

    let resultMessage = '';
    if (submitted) {
      if (answer === 'yes' && answer2 === 'rate') {
        resultMessage = 'Your application is a good match for GPU enabled computing!';
      } else {
        resultMessage = 'Your application is a poor match for GPU enabled computing :(';
      }
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <ol start={2}>
              <li>Does it perform I/O frequently?</li><br></br>
              <div id="options">
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value="yes"
                    checked={answer === 'yes'}
                    onChange={this.handleInputChange}
                  />{' '}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value="no"
                    checked={answer === 'no'}
                    onChange={this.handleInputChange}
                  />{' '}
                  No
                </label>
              </div><br></br>
              <li>Do you have rate or throughput limitations?</li>
              <br></br>
              <div id="options2">
                <label>
                  <input
                    type="radio"
                    name="answer2"
                    value="rate"
                    checked={answer2 === 'rate'}
                    onChange={this.handleInputChange}
                  />{' '}
                  Rate
                </label>
                <label>
                  <input
                    type="radio"
                    name="answer2"
                    value="throughput"
                    checked={answer2 === 'throughput'}
                    onChange={this.handleInputChange}
                  />{' '}
                  Throughput
                </label>
                <br></br>
              </div>
            </ol>
          </div><br></br>
          
        <button type="submit" style={{ marginLeft: '40px' }}>Submit</button> <br></br>
        </form><br></br>
        {submitted && (
          <div style={{ marginLeft: '40px' }}>
            <div id="ans">Your Answers: {answer}, {answer2}</div>
            <div id="result2">{resultMessage}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Submit;
