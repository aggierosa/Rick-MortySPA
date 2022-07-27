import { createContext, useState } from "react";
import { rmapi } from "../../services/api";

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characterList, setCharacterList] = useState([]);

  const getCharacters = () => {
    rmapi.get("/character").then((response) => {
      console.log(response.data);
      setCharacterList(response.data);
    });
  };
  return (
    <CharactersContext.Provider value={{ getCharacters, characterList }}>
      {children}
    </CharactersContext.Provider>
  );
};
