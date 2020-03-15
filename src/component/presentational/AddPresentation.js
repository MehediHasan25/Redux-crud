import React, { Component } from 'react'

export class AddPresentation extends Component {
  state = {
    name: '',
    organization: '',
    designation: ''
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    const { name, organization, designation } = this.state;
    e.preventDefault();
    const obj = {
      name,
      organization,
      designation
    }
    this.props.onSubmit(obj)
  }



  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name:</label> <br />
            <input
              type='text'
              name='name'
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <br />
          <div>
            <label>Organization: </label> <br />
            <textarea
              name='organization'
              onChange={this.onChange}
              value={this.state.organization}
            />
          </div>
          <br />
          <div>
            <label>Designation:</label> <br />
            <input
              type='text'
              name='designation'
              onChange={this.onChange}
              value={this.state.designation}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddPresentation;
