import React from 'react'
import propTypes from 'prop-types'
import './Key.css'

const Key = ({ keyAction, keyType, keyValue}) => (
  <div className='key-container ${keyType}'>
    <p className='key-value'>
      {keyValue}
    </p>
  </div>
)

Key.propTypes = {
  keyAction: propTypes.func.isRequired,
  keyType: propTypes.string.isRequired,
  keyValue: propTypes.string.isRequired,
}

export default Key