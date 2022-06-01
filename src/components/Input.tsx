import React, { useState } from 'react';

interface InputProps {
  onChange: (text: string) => void;
}

function Input({ onChange }: InputProps) {
  const [name, setName] = useState('');

  return (
    <div className='input-container'>
      <input
        type='text'
        className='input'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
