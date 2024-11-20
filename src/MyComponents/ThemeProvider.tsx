import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[#020817] pt-2">
        {children}
      </div>
    </div>
  );
};

export default ThemeProvider;
