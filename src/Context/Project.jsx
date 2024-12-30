import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [baseUrl, setBaseUrl] = useState('https://api.codingarabic.online/api');
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [tokenType, setTokenType] = useState(null);

  const value = {
    theme,
    setTheme,
    baseUrl,
    isLoading,
    setIsLoading,
    token,
    setToken,
    tokenType,
    setTokenType,
  }

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
};