'use client';

import { useRef } from 'react';
import Link from 'next/link';
import styles from './menu.module.css';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import InventoryIcon from '@mui/icons-material/Inventory';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsIcon from '@mui/icons-material/Settings';

const NavMenu = () => {
   const menuElement = useRef(null);

   const menu = [
      {
         section: 'Fleet',
         url: '/fleet',
         icon: <AirplanemodeActiveIcon />,
      },
      {
         section: 'Inventory',
         url: '/inventory',
         icon: <InventoryIcon />,
      },
      {
         section: 'Work',
         url: '/work',
         icon: <ListAltIcon />,
      },
      {
         section: 'Purchasing',
         url: '/purchasing',
         icon: <RequestQuoteIcon />,
      },
      {
         section: 'Settings',
         url: '/settings',
         icon: <SettingsIcon />,
      },
      {
         section: 'Admin',
         url: '/admin',
         icon: <AdminPanelSettingsIcon />,
      },
   ];

   return (
      <ul ref={menuElement} className={styles.menu}>
         {menu.map((menuItem, i) => {
            return (
               <li key={`section${i}`}>
                  <span className={styles.sectionHeader}>
                     <Link href={menuItem.url}>{menuItem.icon}</Link>
                  </span>
               </li>
            );
         })}
      </ul>
   );
};

export default NavMenu;
