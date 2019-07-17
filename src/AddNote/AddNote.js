import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import './AddNote.css';

export default class AddNote extends Component {
  //would I need proptypes in this class? It doesn't seem to want to let me add it unless it's a function.
  state = {
    noteName: '',
    noteContent: '',
    folderName: ''
  };
  submitForm = e => {
    e.preventDefault();
    this.props.addNote({
      id: uuid(),
      name: this.state.noteName,
      content: this.state.noteContent,
      folder: this.state.folderName
    });
  };
  selectFolder(value) {
    if (value === 'None') {
      this.props.changeHandler(null);
    } else {
      const folder = this.props.folders.find(folder => folder.name === value);
      this.props.changeHandler(folder);
    }
  }
  render() {
    const currentDate = new Date();
    const folders = this.props.folders.map((folder, i) => <option value={folder.name} key={folder.id}>{folder.name}</option>);
    return (
      <div className='AddNote'>
        <h1>Add a Note</h1>
        <form action='' className='newNote' onSubmit={this.submitForm}>
          <input
            type='text'
            placeholder='My New Note'
            value={this.state.noteName}
            onChange={e =>
              this.setState({
                noteName: e.target.value
              })
            }
          />
          <textarea
            type='text'
            placeholder='Note Content'
            value={this.state.noteContent}
            onChange={e =>
              this.setState({
                noteContent: e.target.value
              })
            }
          />
          <select
            id='folder'
            name='folder'
            value={this.state.folderName}
            onChange={e => this.selectFolder(e.target.value)} >
            <option value='None'>Select a Folder...</option>
            {folders}
          </select>
          <div className='Note__dates' value={currentDate}/>
          <button type='submit' onClick={() => this.props.history.goBack()}>Add!</button>
        </form>
        </div>
    );
  }
}
