import React from 'react';
import BingeCard from './BingeCard';
import BingeItem from '../models/bingeItem';

interface BingeListProps {
  items: BingeItem[];
  onRemoveItem: (id: number) => void;
}

function BingeList({ items, onRemoveItem }: BingeListProps) {
  return (
    <div className='container'>
      <div className='row binge-items-container'>
        {items.map((item) => (
          <BingeCard item={item} onRemove={onRemoveItem} />
        ))}
      </div>
    </div>
  );
}

export default BingeList;
