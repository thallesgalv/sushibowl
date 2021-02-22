import React from 'react'

const InputForm = ({label, id, type, placeholder, required, onChange, onBlur, error }) => {
  return (
    <>
      <label htmlFor={id} >
        
        {label} {error && <p style={{ color: '#EF2A30', fontSize: '12px' }}>{error}</p>}
        <input
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
        />

      </label>
    </>
  )
}

export default InputForm