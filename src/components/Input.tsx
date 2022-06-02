import React, { useState } from 'react';

interface AutoCompleteItem {
  id: number;
  title: string;
  backdrop_url: string;
}

interface InputProps {
  onChange: (text: string) => void;
  autoCompleteItems: AutoCompleteItem[];
  onSelectItem: (id: number) => void;
}

function Input({ onChange, autoCompleteItems, onSelectItem }: InputProps) {
  const [name, setName] = useState('');

  return (
    <div>
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
      <div className='autocomplete'>
        {autoCompleteItems.map(({ id, title, backdrop_url }) => (
          <div
            key={id}
            onClick={() => onSelectItem(id)}
            className='autocomplete-item'
          >
            <img src={backdrop_url} className='autocomplete-backdrop' />
            <div className='autocomplete-body'>
              <span className='autocomplete-title'>{title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Input;
