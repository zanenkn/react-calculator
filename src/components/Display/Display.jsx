import React from 'react'
import propTypes from 'prop-types'

const Display = ({ displayValue }) => <div className='display-container' />

Display.propTypes = { displayValue: propTypes.string.isRequired }

export default Display