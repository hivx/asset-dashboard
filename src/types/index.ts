import type { ReactNode } from "react";

export interface ModuleItem {
  id: string;
  title: string;
  icon: ReactNode;
  iconBg: string; // VD: "bg-yellow-400"
}

export interface ModuleGroupData {
  title: string;
  headerBg: string; // Màu nền của tiêu đề nhóm
  items: ModuleItem[];
}