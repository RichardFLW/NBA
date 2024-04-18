import React, { useState } from "react";
import DisplayConf from "./Displayconf.jsx";
import OneTeam from "./OneTeam";
import styles from "./Team.module.scss";


export default function Team({ filter, person, teams }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour suivre l'état de connexion

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn); // Inverser l'état de connexion lors du clic sur le bouton
  };

  const teamsEast = teams.filter(team => team.conference === "East");
  const teamsWest = teams.filter(team => team.conference === "West");

  return (
    <div
      className="d-flex flex-column jc-start mt-30 "
      style={{ width: "100%" }}
    >
      {/* Affichage du message de bienvenue ou du message de feedback en fonction de l'état de connexion */}
      {isLoggedIn ? (
        <>
          <p className="mt-30">Bienvenue {person.name} !</p>
          <button style={{ width: "10%" }} onClick={handleLoginLogout}>Se déconnecter</button>
        </>
      ) : (
        <>
          <p className="mt-30 text-error">
            Vous devez être connecté pour accéder à cette page.
          </p>
          <button style={{ width: "10%" }} onClick={handleLoginLogout}>Se connecter</button>
        </>
      )}

      {/* Affichage des équipes filtrées */}
      {person.age > 17 && isLoggedIn && (
        <>
          <h2 className={`mt-30 ml-20`}>Conférence Est</h2>
          <DisplayConf teams={teamsEast} filter={filter} />
          <h2 className={`mt-30 ml-20`}>Conférence Ouest</h2>
          <DisplayConf teams={teamsWest} filter={filter} />
        </>
      )}
    </div>
  );
}
