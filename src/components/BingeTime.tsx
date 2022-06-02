import React from 'react';

interface BingeTimeProps {
  totalMinutes: number;
}

function BingeTime({ totalMinutes }: BingeTimeProps) {
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes - days * 1440) / 60);
  const minutes = Math.round(totalMinutes % 60);

  return (
    <div className='binge-time'>
      {days > 0 && (
        <span className='binge-time-pair'>
          <div className='binge-time-value'>{days}</div>
          <div className='binge-time-label'>{days === 1 ? 'day' : 'days'}</div>
        </span>
      )}
      {hours > 0 && (
        <span className='binge-time-pair'>
          <div className='binge-time-value'>{hours}</div>
          <div className='binge-time-label'>
            {hours === 1 ? 'hour' : 'hours'}
          </div>
        </span>
      )}
      {minutes > 0 && (
        <span className='binge-time-pair'>
          <div className='binge-time-value'>{minutes}</div>
          <div className='binge-time-label'>
            {minutes === 1 ? 'minute' : 'minutes'}
          </div>
        </span>
      )}
    </div>
  );
}

export default BingeTime;
