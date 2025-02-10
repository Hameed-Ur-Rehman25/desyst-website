// components/Navbar/MobileMenu.tsx
import MobileMenuInteractivity from './MobileMenuInteractivity';
import { MenuItem } from '@/types/menu';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export default function MobileMenu({ isOpen, onClose, menuItems }: Props) {
  return <MobileMenuInteractivity isOpen={isOpen} onClose={onClose} menuItems={menuItems} />;
}