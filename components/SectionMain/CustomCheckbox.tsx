'use client';

import { useState } from 'react';

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
  name?: string;
}

export default function CustomCheckbox({ checked, onChange, id, name }: CustomCheckboxProps) {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <div 
      className={`min-w-8 h-8 rounded-[4px] border-2 flex items-center justify-center cursor-pointer transition-colors ${
        checked 
          ? 'bg-transparent hover:border-gray-400 border-gray-600' 
          : 'bg-transparent hover:border-gray-400 border-gray-600'
      }`}
      onClick={handleClick}
    >
      {checked && (
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M20.2852 1.29688C20.3589 1.21835 20.4799 1.20441 20.5693 1.25977L20.6055 1.28809C20.6959 1.37367 20.7004 1.51782 20.6143 1.60938L8.25098 14.7002C8.20711 14.7466 8.14795 14.7724 8.08594 14.7725H8.08398C8.03507 14.7718 7.9891 14.7552 7.95117 14.7275L7.91602 14.6963L1.37109 7.42383C1.2873 7.33071 1.29484 7.18714 1.3877 7.10352C1.4802 7.02027 1.62371 7.0253 1.71094 7.12109L7.72656 13.8057L8.08984 14.209L8.46191 13.8145L20.2842 1.29785L20.2852 1.29688Z" 
            fill="#424748" 
            stroke="#FDB056"
          />
        </svg>
      )}
    </div>
  );
}