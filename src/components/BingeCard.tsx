import React from 'react';
import BingeItem from '../models/bingeItem';

interface BingeCardProps {
  item: BingeItem;
  onRemove: (id: number) => void;
}

function BingeCard({ item, onRemove }: BingeCardProps) {
  const { id, poster_url } = item;

  return (
    <div onClick={() => onRemove(id)} key={id} className='col-sm-1 binge-item'>
      <img src={poster_url} className='binge-item-poster' />
    </div>
  );
}

export default BingeCard;
