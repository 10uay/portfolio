import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Particles from "../components/magicui/particles";
import { RootState } from '../redux/store';
import { Profile } from "./Profile";


const Hero: React.FC = () => {
  const { theme } = useSelector((state: RootState) => state.theme)

  const [color, setColor] = useState<string>("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);


  return (
    <div className="border-none relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>
        <Profile />
      </span>
      
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default Hero;
