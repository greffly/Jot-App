import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import HandleFolderError from '../HandleErrors/HandleFolderError';
import { countNotesForFolder } from '../notes-helpers';
import './NoteListNav.css';

export default function NoteListNav(props) {
  return (
    <div className='NoteListNav'>
      <HandleFolderError>
        <ul className='NoteListNav__list'>
          {props.folders.map(folder => (
            <li key={folder.id}>
              <NavLink
                className='NoteListNav__folder-link'
                to={`/folder/${folder.id}`}
              >
                <span className='NoteListNav__num-notes'>
                  {countNotesForFolder(props.notes, folder.id)}
                </span>
                {folder.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </HandleFolderError>
    </div>
  );
}

NoteListNav.defaultProps = {
  folders: []
};
