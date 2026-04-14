import { memo } from "react";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-10">
      <p>Thème actuel : {theme}</p>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full"
      >
        Changer de thème
      </button>
    </div>
  );
};

export default memo(Home);
