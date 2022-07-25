import CharCard from "../CharCard";
import ModalCharCard from "../ModalCharCard";
import { useState } from "react";

const Characters = ({ characterList }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();

  return (
    <>
      {open && (
        <div onClickOutside={() => setOpen(false)} onEsc={() => setOpen(false)}>
          {characterList.map((item, index) => (
            <ModalCharCard
              setOpen={setOpen}
              user={user}
              id={item.id}
              name={item.name}
              status={item.status}
              species={item.species}
              type={item.type}
              gender={item.gender}
              origin={item.origin}
              location={item.location}
              image={item.image}
              episode={item.episode}
              url={item.url}
              created={item.created}
            />
          ))}
        </div>
      )}

      <section className="characters">
        {characterList.map((character, index) => {
          return (
            <CharCard
              name={character.name}
              status={character.status}
              image={character.image}
              key={index}
            ></CharCard>
          );
        })}
      </section>
    </>
  );
};

export default Characters;
