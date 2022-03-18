import React from "react";
import CreateWR from "../../components/CreateWR";
import { useSelector } from "react-redux";
import JoinWR from "../../components/JoinWR";

const WaitingRoom = () => {
  const owner = useSelector((state) => state.owner);
  return (
    <>
      <h1
        id="waiting-room-header"
        className="capitalize text-center text-4xl font-bold text-slate-50 pt-10"
      >
        Waiting Room
      </h1>
      {owner ? <CreateWR /> : <JoinWR />}

      {/* if owner of room show one waiting room, else show other waiting room */}
    </>
  );
};
export default WaitingRoom;
