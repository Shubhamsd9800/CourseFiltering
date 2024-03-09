import React from 'react'
import { HashLoader } from 'react-spinners';
import {CSSProperties}  from 'react';
const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <HashLoader
        color={"#FFFFFF"}
        loading={true}
        cssOverride={CSSProperties}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p className="text-white text-lg font-semibold">Loading....</p>

    </div>
  )
}

export default Spinner;

