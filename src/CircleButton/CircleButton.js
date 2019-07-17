import React from 'react'
import PropTypes from 'prop-types'
import './CircleButton.css'

export default function NavCircleButton(props) {
  const { tag, className, childrenm, ...otherProps } = props

  return React.createElement(
    props.tag,
    {
      className: ['NavCircleButton', props.className].join(' '),
      ...otherProps
    },
    props.children
  )
  
}

NavCircleButton.defaultProps ={
  tag: 'a',
}

  //am I using proptypes correctly here?
  NavCircleButton.propTypes = {
    folders: PropTypes.object,
    className: PropTypes.string
    //need to find type of tag, children
  }
