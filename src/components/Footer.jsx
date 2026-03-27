import React from 'react';
import { PROJECT_DETAILS } from '../common/constants/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-100 dark:border-zinc-800/50 bg-white dark:bg-[#09090b] transition-colors duration-300 text-center">
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        © {currentYear} {PROJECT_DETAILS.name}. All rights reserved.
      </p>
    </footer>
  );
}
