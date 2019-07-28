import React, { Component } from 'react';
import uuid from 'uuid';
import './AddFolder.css';

export default class AddFolder extends Component {
  state = {
    folderName: ''
  };
  submitForm = e => {
    e.preventDefault();
    //fetch('/folders', {
    //  data: { folders: this.state.folderName },
    //  method: 'post'
    //});
    this.props.addFolder({
      id: uuid(),
      name: this.state.folderName
    });
  };
  render() {
    return (
      <div className='addFolder'>
        <h1>Add a Folder</h1>
        <form action='' className='newFolder' onSubmit={this.submitForm}>
          <input
            type='text'
            placeholder='My New Folder'
            value={this.state.folderName}
            onChange={e => this.setState({ folderName: e.target.value })}
          />
          <button type='submit'>Add!</button>
        </form>
      </div>
    );
  }
}
