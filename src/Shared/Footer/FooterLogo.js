import React from 'react';
import { GraduationCap } from 'lucide-react';

export const FooterLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <GraduationCap className="w-8 h-8 text-yellow-400" />
      <div>
        <h2 className="text-xl font-bold text-white">SHREEJI</h2>
        <p className="text-sm text-yellow-400">TUITION</p>
      </div>
    </div>
  );
};