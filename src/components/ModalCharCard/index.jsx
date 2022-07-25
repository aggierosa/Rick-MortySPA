import { UserContext } from "../../providers/user";
import { useContext } from "react";

const ModalCharCard = ({
  setOpen,
  user,
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
  url,
  created,
}) => {
  const closeModal = () => {
    setOpen(false);
  };

  const { userInfo } = useContext(UserContext);

  console.log(userInfo);

  const handleAddFavorite = (name, user) => {
    console.log("modalcharcard, l29");
    console.log(user);
  };

  return (
    <div className="charCard">
      <header>
        <button onClick={closeModal}>X</button>
      </header>
      <img src={image} alt={name} />
      <button onClick={() => handleAddFavorite(name, user)}>
        Adicionar aos favoritos
      </button>
      <h3>{id}</h3>
      <ul>
        <li>{name}</li>
        <li>{status}</li>
        <li>{species}</li>
        <li>{type}</li>
        <li>{gender}</li>
        <li>{origin}</li>
        <li>{location}</li>
        <li>{episode}</li>
        <li>{url}</li>
        <li>{created}</li>
      </ul>
    </div>
  );
};

export default ModalCharCard;
