import React, { createContext } from "react";
import { LanguageContextType } from "../Interfaces/PropsInteface";
interface LanguageProviderProps {
    children: React.ReactNode;
  }
export const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) =>{
    const [language, setLanguage] = React.useState<string>(localStorage.getItem("language")||"ua");
    const update = (language: string) => {
       localStorage.setItem("language", language);
       setLanguage(language);
      }

    return (
        <LanguageContext.Provider value={{ language, update }}>
          {children}
        </LanguageContext.Provider>
      );
  }
