import { CharactersProvider } from "./favorites";
import { UserProvider } from "./user";

const Providers = ({ children }) => (
  <CharactersProvider>
    <UserProvider>{children}</UserProvider>
  </CharactersProvider>
);

export default Providers;
