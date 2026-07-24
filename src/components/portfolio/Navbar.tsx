import React from 'react';
import { DeskState } from '../../types';

interface NavbarProps {
  deskState: DeskState;
  onUpdateState: (updater: (prev: DeskState) => DeskState) => void;
  onOpenCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  return null;
};
