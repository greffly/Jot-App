import React from 'react';

export default function ValidationError(props) {
    console.log(props.message);
  if(props.message) {
    return (
      <div className="error">{props.message}</div>
    );
  }

  return <></>
}