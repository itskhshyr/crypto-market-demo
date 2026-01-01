'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { id: '1', label: 'Home', path: '/' },
  { id: '2', label: 'Analytics' },
  { id: '3', label: 'Reports' },
  { id: '4', label: 'Notifications' },
];

export default function MenuContainer() {
  const pathname = usePathname();

  return (
    <nav className="dashboard-menu ">
      <ul>
        {menuItems.map((item) => {
          const isActive =
            item.path &&
            (pathname === item.path ||
              pathname.startsWith(item.path + '/'));

          return (
            <li key={item.id} className={isActive ? 'active' : ''}>
              {item.path ? (
                <Link href={item.path}>{item.label}</Link>
              ) : (
                <span className="disabled">{item.label}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
