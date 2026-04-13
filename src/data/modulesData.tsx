import { FileText, Box, Archive, Settings, Activity, Wrench, Users, Package, ClipboardList, BarChart2 } from 'lucide-react';
import type { ModuleGroupData } from '../types';

export const dashboardData: Record<string, ModuleGroupData> = {
  planning: {
    title: "Kế Hoạch & Mua Sắm",
    headerBg: "bg-amber-50 text-amber-800",
    items: [
      { id: "IMM-01", title: "Đánh Giá Nhu Cầu & Dự Toán",           icon: <ClipboardList size={18} />, iconBg: "bg-amber-400"  },
      { id: "IMM-02", title: "Thông Số Kỹ Thuật & Phân Tích",         icon: <Settings size={18} />,      iconBg: "bg-amber-500"  },
      { id: "IMM-03", title: "Đấu Thầu & Lựa Chọn Nhà Cung Cấp",     icon: <FileText size={18} />,      iconBg: "bg-yellow-500" },
    ],
  },

  trienkhai: {
    title: "Triển Khai & Sử Dụng",
    headerBg: "bg-sky-50 text-sky-800",
    items: [
      { id: "IMM-04", title: "Lắp Đặt, Định Danh & Kiểm Tra Ban Đầu", icon: <Box size={18} />,     iconBg: "bg-sky-500"  },
      { id: "IMM-05", title: "Hợp Đồng & Bàn Giao Thiết Bị",          icon: <Package size={18} />, iconBg: "bg-sky-400"  },
      { id: "IMM-06", title: "Đào Tạo Người Dùng & Hướng Dẫn",        icon: <Users size={18} />,   iconBg: "bg-cyan-500" },
    ],
  },

  implementation: {
    title: "Deployment & Implementation",
    headerBg: "bg-blue-600 text-white",
    items: [
      { id: "IMM-04", title: "Lắp Đặt, Định Danh & Kiểm Tra Ban Đầu", icon: <Box size={18} />,      iconBg: "bg-blue-400"   },
      { id: "IMM-03", title: "Đăng Ký, Cấp Phép & Hồ Sơ",             icon: <FileText size={18} />, iconBg: "bg-yellow-400" },
      { id: "IMM-06", title: "Đào Tạo Người Dùng",                     icon: <Users size={18} />,    iconBg: "bg-orange-400" },
      { id: "IMM-13", title: "Ngưng Sử Dụng & Điều Chuyển",            icon: <Archive size={18} />,  iconBg: "bg-green-500"  },
    ],
  },

  deployment: {
    title: "Deployment & Sử Dụng",
    headerBg: "bg-blue-500 text-white",
    items: [
      { id: "IMM-07", title: "Lắp Đặt, Định Danh & Hồ Sơ", icon: <Box size={18} />,    iconBg: "bg-blue-400" },
      { id: "IMM-08", title: "Bảo Trì Định Kỳ",             icon: <Wrench size={18} />, iconBg: "bg-blue-500" },
    ],
  },

  operations: {
    title: "Operations & Maintenance",
    headerBg: "bg-indigo-500 text-white",
    items: [
      { id: "IMM-07", title: "Theo Dõi Hiệu Suất",                       icon: <Activity size={18} />,  iconBg: "bg-indigo-400" },
      { id: "IMM-09", title: "Sửa Chữa, Phụ Tùng & Cập Nhật Phần Mềm",  icon: <BarChart2 size={18} />, iconBg: "bg-indigo-500" },
    ],
  },
};
