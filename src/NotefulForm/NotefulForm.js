import React from 'react';
import './NotefulForm.css';

export default function NotefulForm(props) {
  //do I need proptypes here?
  const { className, ...otherProps } = props;
  return (
    <>
      <form
        className={['Noteful-form', className].join(' ')}
        action='#'
        {...otherProps}
      />
    </>
  );
}
