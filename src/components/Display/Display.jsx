import React from 'react'
import propTypes from 'prop-types'
import './Display.css'

const Display = ({ displayValue }) => (
  <div className='display-container'>
    <p className='display-value'>
      {displayValue}
    </p>
  </div>
)

Display.propTypes = { displayValue: propTypes.string.isRequired }

export default Display