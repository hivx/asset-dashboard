import { Search, Bell } from 'lucide-react';

export const Header = () => {
  return (
    <header className="glass-header sticky top-0 z-50 flex justify-between items-center px-6 py-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white text-xs font-bold">
          BVNĐ1
        </div>
        <div>
          <h1 className="text-blue-800 font-extrabold text-sm uppercase">Bệnh Viện Nhi Đồng 1</h1>
          <p className="text-xs text-blue-600 font-medium">Phòng Vật Tư, Thiết Bị Y Tế</p>
        </div>
      </div>

      <div className="hidden md:flex font-black text-blue-800 tracking-widest bg-blue-50 px-4 py-1.5 rounded-full text-sm border border-blue-100">
        HTM • CMMS • IMMIS
      </div>

      <div className="flex items-center gap-4">
        <button className="text-blue-900 hover:text-blue-600"><Search size={20} /></button>
        <button className="relative text-blue-900 hover:text-blue-600">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">1</span>
        </button>
        <div className="flex items-center gap-2 border-l border-gray-300 pl-4 cursor-pointer">
          <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-8 h-8 rounded-full border border-blue-200" />
          <span className="text-sm font-semibold text-blue-900 hidden sm:block">Nguyễn Văn An</span>
        </div>
      </div>
    </header>
  );
};