import OneTeam from "./OneTeam";


export default function DisplayConf ({ teams, filter }){
    const filteredTeams = teams.filter((team) => {
      if (filter === "ALL") return true;
      return team.conference === (filter === "EAST" ? "East" : "West");
    });

    return (
        <div className="d-flex flex-wrap justify-content-center">
          {filteredTeams.map((t) => (
            <OneTeam key={t.id} t={t} />
          ))}
        </div>
      );
    }