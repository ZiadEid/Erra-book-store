import { useContext, useEffect, useState } from 'react'
import DarkPng from '../../assets/dark-mode-button.png'
import LightPng from '../../assets/light-mode-button.png'
import { ProjectContext } from '../../Context/Project'
const DarkMode = () => {
  const { theme, setTheme } = useContext(ProjectContext);
  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className='relative'>
      <img
        onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
        src={LightPng}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300 absolute right-0 z-10 ${theme == "dark" ? "opacity-0" : "opacity-100"}`}
        alt="light mode"
      />
      <img
        onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
        src={DarkPng}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0, 0, 0, 0.5)] transition-all duration-300`}
        alt="dark mode"
      />
    </div>
  )
}

export default DarkMode