// src/pages/Dashboard.tsx
import { Header } from '../components/Header';
import { ModuleGroup } from '../components/ModuleGroup';
import { CentralHub } from '../components/CentralHub';
import { dashboardData } from '../data/modulesData';

export const Dashboard = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed font-sans relative"
      style={{ backgroundImage: "url('/src/assets/bg.jpg')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/15 backdrop-blur-[2px] pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 w-full max-w-325 mx-auto px-4 py-6 flex flex-col">

          {/* Title */}
          <div className="text-center mb-6 mt-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-blue mb-3
                           bg-white/85 inline-block px-8 py-2.5 rounded-2xl
                           backdrop-blur-md border border-white/60 drop-shadow-sm">
              Hub Điều Hướng Module Theo Kiến Trúc IMMIS
            </h2>
            <br />
            <p className="text-sm font-semibold text-blue-900 bg-white/90 inline-block
                          px-6 py-1.5 rounded-full backdrop-blur-md shadow-sm border border-white/50 mt-2">
              Điều phối vòng đời thiết bị y tế từ lập kế hoạch đến giải nhiệm.
            </p>
          </div>

          {/* ── Main glass card ── */}
          <div className="glass-panel rounded-3xl p-5 flex-1 border border-white/80
                          shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)]">

            {/* 4-column grid: [planning] [trienkhai] [hub+bottom] [implementation] */}
            <div
              className="grid gap-4 h-full"
              style={{ gridTemplateColumns: '1fr 1fr 1.9fr 1.3fr' }}
            >

              {/* ── Col 1: Kế Hoạch & Mua Sắm ── */}
              <div className="bg-white/65 rounded-2xl border border-white shadow-sm p-4">
                <ModuleGroup data={dashboardData.planning} />
              </div>

              {/* ── Col 2: Triển Khai & Sử Dụng ── */}
              <div className="bg-sky-50/70 rounded-2xl border border-sky-100 shadow-sm p-4">
                <ModuleGroup data={dashboardData.trienkhai} />
              </div>

              {/* ── Col 3: Hub (top) + Deployment/Operations (bottom) ── */}
              <div className="flex flex-col gap-4">

                {/* Hub SVG */}
                <div className="flex justify-center items-center
                                bg-white/30 rounded-2xl border border-white/60 py-3 px-2
                                shadow-inner">
                  <CentralHub />
                </div>

                {/* Bottom two panels */}
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="bg-blue-50/70 rounded-2xl border border-blue-100 shadow-sm p-4">
                    <ModuleGroup data={dashboardData.deployment} />
                  </div>
                  <div className="bg-indigo-50/60 rounded-2xl border border-indigo-100 shadow-sm p-4">
                    <ModuleGroup data={dashboardData.operations} />
                  </div>
                </div>

              </div>

              {/* ── Col 4: Deployment & Implementation ── */}
              <div className="bg-blue-50/65 rounded-2xl border border-blue-100 shadow-sm p-4">
                <ModuleGroup data={dashboardData.implementation} />
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
};
