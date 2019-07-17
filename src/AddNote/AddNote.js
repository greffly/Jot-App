import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import ValidationError from '../HandleErrors/ValidationError'
import './AddNote.css';

export default class AddNote extends Component {
  //would I need proptypes in this class? It doesn't seem to want to let me add it unless it's a function.
  state = {
    noteName: {value: '', touched: false},
    noteContent: '',
    folderId: ''
  };
  submitForm = e => {
    e.preventDefault();
    this.props.addNote({
      id: uuid(),
      name: this.state.noteName,
      content: this.state.noteContent,
      folderId: this.state.folderId,
      modified: (new Date()).toISOString()
    });
  };
  selectFolder(value) {
    if (value === 'None') {
      this.props.changeHandler(null);
    } else {
      this.setState({
        folderId: value
      });
      const folder = this.props.folders.find(folder => folder.name === value);
      this.props.changeHandler(folder);
    }
  }
  validateName(noteName) {
    const name = this.state.noteName.value;
    if (name.length === 0) {
      return 'Note name is required';
    } 
  }
  updateName(noteName) {
    this.setState({noteName: {value: noteName, touched: true}});
  }
  render() {
    const currentDate = new Date();
    const folders = this.props.folders.map((folder, i) => <option value={folder.id} key={folder.id}>{folder.name}</option>);
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
          {this.state.noteName.touched && (
          <ValidationError message={this.validateName()} />
          )}
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
            value={this.state.folderId}
            onChange={e => this.selectFolder(e.target.value)} >
            <option value="">Select a Folder...</option>
            {folders}
          </select>
          <div className='Note__dates' value={currentDate}/>
          <button type='submit' disabled={
    this.validateName()} onClick={() => this.props.history.goBack()}>Add!</button>
        </form>
        </div>
    );
  }
}

AddNote.propTypes = {
  folders: PropTypes.object,
  changeHandler: PropTypes.func,
  addNote: PropTypes.func
}