import React from 'react'
import propTypes from 'prop-types'

const Key = ({ keyAction, keyType, keyValue}) => (
  <div className='key-container'>
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