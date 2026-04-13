import React from 'react';
import type { ModuleGroupData } from '../types';
import { ModuleCard } from './ModuleCard';
import { LayoutList } from 'lucide-react'; 

export const ModuleGroup: React.FC<{ data: ModuleGroupData }> = ({ data }) => {
  return (
    <div className="flex flex-col h-full">
      {/* ĐÃ SỬA: Bỏ shadow, bo góc nhẹ phần trên để giống Tab thư mục */}
      <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl mb-1 ${data.headerBg}`}>
        <LayoutList size={16} className="opacity-80 shrink-0" />
        <h3 className="font-bold text-[13px] uppercase tracking-wide leading-tight">{data.title}</h3>
      </div>
      
      {/* Container chứa Card */}
      <div className="flex flex-col gap-3 mt-4">
        {data.items.map((item) => (
          <ModuleCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};