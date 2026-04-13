// src/components/CentralHub.tsx

const CX = 250, CY = 250;
const OR = 162, IR = 106;

function toRad(deg: number) {
  return ((deg - 90) * Math.PI) / 180;
}
function pt(r: number, deg: number): [number, number] {
  return [CX + r * Math.cos(toRad(deg)), CY + r * Math.sin(toRad(deg))];
}
function slicePath(s: number, e: number): string {
  const [x1, y1] = pt(OR, s), [x2, y2] = pt(OR, e);
  const [x3, y3] = pt(IR, e), [x4, y4] = pt(IR, s);
  const lg = e - s > 180 ? 1 : 0;
  return `M${x1},${y1} A${OR},${OR},0,${lg},1,${x2},${y2} L${x3},${y3} A${IR},${IR},0,${lg},0,${x4},${y4} Z`;
}

const GAP = 3;
const SEGS = [
  { s: 0 + GAP, e: 60 - GAP,  color: '#F59E0B', lines: ['Nhu Cầu &',  'Lập Kế Hoạch'] },
  { s: 60 + GAP, e: 120 - GAP, color: '#84CC16', lines: ['Thông Số &', 'Đấu Thầu']     },
  { s: 120 + GAP, e: 180 - GAP, color: '#3B82F6', lines: ['Triển Khai &', 'Hợp Đồng']  },
  { s: 180 + GAP, e: 240 - GAP, color: '#6366F1', lines: ['Vận Hành &', 'Bảo Trì']     },
  { s: 240 + GAP, e: 300 - GAP, color: '#F97316', lines: ['Theo Dõi &', 'Sửa Chữa']    },
  { s: 300 + GAP, e: 360 - GAP, color: '#EAB308', lines: ['Ngưng',      'Sử Dụng']     },
];

function anchor(mid: number): 'start' | 'end' | 'middle' {
  if (mid >= 45 && mid < 135) return 'start';
  if (mid >= 225 && mid < 315) return 'end';
  return 'middle';
}

export const CentralHub = () => (
  <svg
    viewBox="-70 -30 640 560"
    className="w-full"
    style={{ maxWidth: 440 }}
    aria-label="IMMIS Lifecycle Hub"
  >
    <defs>
      <filter id="hub-drop" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,32,90,0.12)" />
      </filter>
      <filter id="inner-drop" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="rgba(0,32,90,0.10)" />
      </filter>
      <radialGradient id="innerGrad" cx="50%" cy="38%" r="65%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#eef4ff" />
      </radialGradient>
    </defs>

    {/* Thin decorative outer ring */}
    <circle cx={CX} cy={CY} r={OR + 7} fill="rgba(255,255,255,0.35)"
      stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" />

    {/* Donut segments */}
    {SEGS.map((seg) => {
      const mid = (seg.s + seg.e) / 2;
      const [lx, ly] = pt(193, mid);
      const ta = anchor(mid);
      return (
        <g key={seg.color}>
          <path d={slicePath(seg.s, seg.e)} fill={seg.color} opacity="0.93"
            style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.08))' }} />
          <text x={lx} y={ly} fontSize="10" fontWeight="700" fill="#1e3a5f" textAnchor={ta}>
            {seg.lines.map((line, li) => (
              <tspan key={line} x={lx} dy={li === 0 ? '-0.6em' : '1.3em'}>{line}</tspan>
            ))}
          </text>
        </g>
      );
    })}

    {/* Inner white circle */}
    <circle cx={CX} cy={CY} r={IR - 5}
      fill="url(#innerGrad)" stroke="#dde7f5" strokeWidth="1.5"
      filter="url(#inner-drop)" />

    {/* IMMIS label */}
    <text x={CX} y={CY - 38} textAnchor="middle"
      fontSize="21" fontWeight="900" fill="#1e3a8a" letterSpacing="5">
      IMMIS
    </text>

    {/* Monitor icon */}
    <g transform={`translate(${CX - 24}, ${CY - 26})`}>
      <rect x="0" y="0" width="48" height="33" rx="3.5"
        fill="none" stroke="#3b82f6" strokeWidth="2" />
      <rect x="4" y="4" width="40" height="23" rx="2" fill="#dbeafe" opacity="0.65" />
      {/* chart lines on screen */}
      <polyline points="8,20 16,12 26,17 38,7"
        fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* stand */}
      <rect x="20" y="33" width="8" height="6" fill="#93c5fd" />
      <rect x="12" y="39" width="24" height="3" rx="1.5" fill="#93c5fd" />
    </g>

    {/* Three person icons */}
    <g opacity="0.82">
      {[
        { cx: CX - 28, cy: CY + 42, r: 5.5, fill: '#bfdbfe', id: 'left'   },
        { cx: CX,      cy: CY + 39, r: 6.5, fill: '#93c5fd', id: 'center' },
        { cx: CX + 28, cy: CY + 42, r: 5.5, fill: '#bfdbfe', id: 'right'  },
      ].map(({ cx, cy, r, fill, id }) => (
        <g key={id}>
          <circle cx={cx} cy={cy} r={r} fill={fill} stroke="#93c5fd" strokeWidth="1" />
          <path
            d={`M${cx - r * 1.6},${cy + r * 2.2} Q${cx},${cy + r * 1.3} ${cx + r * 1.6},${cy + r * 2.2}`}
            fill={fill} opacity="0.7"
          />
        </g>
      ))}
      {/* connection dashes */}
      <line x1={CX - 22} y1={CY + 42} x2={CX - 7} y2={CY + 40}
        stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1={CX + 7}  y1={CY + 40} x2={CX + 22} y2={CY + 42}
        stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="3 2" />
    </g>
  </svg>
);
