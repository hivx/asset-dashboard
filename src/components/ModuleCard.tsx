import React from 'react';
import type { ModuleItem } from '../types';

export const ModuleCard: React.FC<{ item: ModuleItem }> = ({ item }) => {
  return (
    <div className="flex items-center p-3 bg-white/80 backdrop-blur-md rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer border-[1.5px] border-white">
      
      <div className={`w-10 h-10 rounded-lg text-white mr-3.5 flex items-center justify-center shrink-0 shadow-inner ${item.iconBg}`}>
        {item.icon}
      </div>
      
      <div className="flex flex-col justify-center">
        <span className="text-[11px] font-bold text-gray-400 mb-0.5 uppercase tracking-wide">{item.id}</span>
        <span className="text-[13px] font-bold text-gray-700 leading-snug">
          {item.title}
        </span>
      </div>
    </div>
  );
};