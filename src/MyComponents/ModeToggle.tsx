import { Moon, Sun } from "lucide-react";
import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../redux/store';
import { toggleTheme } from "../redux/theme/themeSlice";

const ModeToggle: React.ForwardRefRenderFunction<HTMLDivElement, object> = (props, ref) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme)
  console.log(props);
  
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div ref={ref} onClick={handleToggleTheme} className="flex justify-center items-center">
      {
        theme === 'light' ? (
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        )
      }
    </div>
  );
};

export default forwardRef(ModeToggle);
