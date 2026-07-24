import React from 'react';
import { DeskState, LightingMode } from '../../types';
import { HelpCircle, LampDesk, Menu, Sliders } from 'lucide-react';

interface NavbarProps {
  deskState: DeskState;
  onUpdateState: (updater: (prev: DeskState) => DeskState) => void;
  onOpenCustomizer: () => void;
  onOpenInfo: () => void;
}

const lightingModes: { id: LightingMode; label: string }[] = [
  { id: 'golden', label: '暖阳' },
  { id: 'evening', label: '暮色' },
  { id: 'night', label: '深夜' },
  { id: 'rainy', label: '雨夜' },
];

export const Navbar: React.FC<NavbarProps> = ({
  deskState,
  onUpdateState,
  onOpenCustomizer,
  onOpenInfo,
}) => {
  return (
    <nav className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-stone-950/80 text-stone-100 shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-3 sm:px-5">
        <a href="#hero" className="flex shrink-0 items-center gap-2 font-semibold tracking-wide">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/15">
            <LampDesk className="h-4 w-4 text-amber-300" />
          </span>
          <span className="hidden sm:inline">静谧书桌</span>
        </a>

        <div className="hidden items-center gap-4 text-xs text-stone-300 md:flex">
          <a href="#about" className="transition-colors hover:text-amber-300">关于</a>
          <a href="#projects" className="transition-colors hover:text-amber-300">作品</a>
          <a href="#contact" className="transition-colors hover:text-amber-300">联系</a>
        </div>

        <div className="ml-auto flex items-center gap-1.5">
          <label className="sr-only" htmlFor="lighting-mode">场景光照</label>
          <select
            id="lighting-mode"
            value={deskState.lightingMode}
            onChange={(event) =>
              onUpdateState((previous) => ({
                ...previous,
                lightingMode: event.target.value as LightingMode,
              }))
            }
            className="max-w-20 rounded-lg border border-white/10 bg-stone-900 px-2 py-1.5 text-xs text-stone-200 outline-none focus:border-amber-500/60 sm:max-w-none"
          >
            {lightingModes.map((mode) => (
              <option key={mode.id} value={mode.id}>{mode.label}</option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => onUpdateState((previous) => ({ ...previous, lampOn: !previous.lampOn }))}
            className={`rounded-lg border p-2 transition-colors ${
              deskState.lampOn
                ? 'border-amber-500/40 bg-amber-500/20 text-amber-300'
                : 'border-white/10 bg-stone-900 text-stone-400'
            }`}
            aria-label={deskState.lampOn ? '关闭台灯' : '打开台灯'}
          >
            <LampDesk className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={onOpenCustomizer}
            className="rounded-lg border border-white/10 bg-stone-900 p-2 text-stone-300 transition-colors hover:border-amber-500/40 hover:text-amber-300"
            aria-label="打开个性化设置"
          >
            <Sliders className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={onOpenInfo}
            className="rounded-lg border border-white/10 bg-stone-900 p-2 text-stone-300 transition-colors hover:text-white"
            aria-label="查看使用说明"
          >
            <HelpCircle className="h-4 w-4" />
          </button>

          <a
            href="#about"
            className="rounded-lg border border-white/10 bg-stone-900 p-2 text-stone-300 md:hidden"
            aria-label="打开页面导航"
          >
            <Menu className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};
