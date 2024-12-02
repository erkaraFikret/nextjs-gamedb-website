"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (theme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      };
  return (
    <div className="cursor-pointer hover:text-primary" onClick={toggleTheme}>
        <Sun className="size-8 block dark:hidden"/>
        <Moon className="size-8 hidden dark:block"/>
    </div>
  )
}

export default ThemeToggler