import React from 'react';

interface BingeItem {
  id: number;
  poster_url: string;
}

interface BingeListProps {
  items: BingeItem[];
}

function BingeList({ items }: BingeListProps) {
  return (
    <div className='container'>
      <div className='row binge-items-container'>
        {items.map(({ id, poster_url }) => (
          <div key={id} className='col-sm binge-item'>
            <img src={poster_url} className='binge-item-poster' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BingeList;
