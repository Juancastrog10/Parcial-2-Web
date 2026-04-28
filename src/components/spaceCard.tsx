import { useDispatch } from "react-redux";
import { reserveSpace } from "../features/spaces/spacesSlice";

export const SpaceCard = ({ space }: any) => {
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid black", margin: 10 }}>
      <h3>{space.name}</h3>
      <p>{space.type}</p>
      <p>{space.capacity}</p>
      <p>{space.location}</p>
      <p>{space.pricePerHour}</p>
      <p>{space.available ? "Disponible" : "No disponible"}</p>

      {space.available && (
        <button
          onClick={() =>
            dispatch(reserveSpace({ id: space.id, hours: 2 }))
          }
        >
          Reservar (2h)
        </button>
      )}
    </div>
  );
};