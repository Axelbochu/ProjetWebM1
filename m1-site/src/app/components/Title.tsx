import React, { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div className="text-start py-10 px-10">
      <h1 className='font-elegant  text-5xl text-custom-dark'>{children}</h1>
    </div>
  );
};


