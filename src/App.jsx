import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";

function App() {
  const TEAMS = [
    {
      name: "Programação",
      colors: {
        primary: "#57c278",
        secondary: "#d9f7e9",
      },
    },
    {
      name: "Front-end",
      colors: {
        primary: "#82cffa",
        secondary: "#e8f8ff",
      },
    },
    {
      name: "Data Science",
      colors: {
        primary: "#a6d157",
        secondary: "#f0f8e2",
      },
    },
    {
      name: "Devops",
      colors: {
        primary: "#e06869",
        secondary: "#fde7e8",
      },
    },
    {
      name: "UX e Design",
      colors: {
        primary: "#db6e8f",
        secondary: "#fae9f5",
      },
    },
    {
      name: "Mobile",
      colors: {
        primary: "#ffba05",
        secondary: "#fff5d9",
      },
    },
    {
      name: "Inovação e Gestão",
      colors: {
        primary: "#ff8a29",
        secondary: "#ffeedf",
      },
    },
  ];

  const [buddys, setBuddys] = useState([]);

  const addNewBuddy = (buddy) => {
    setBuddys((prevBuddys) => [...prevBuddys, buddy]);
  };

  return (
    <>
      <Banner />
      <Form teams={TEAMS} onFormSubmit={addNewBuddy} />
      {TEAMS.map((team) => {
        const buddysOfTeam = buddys.filter((buddy) => buddy.team === team.name);
        if (buddysOfTeam.length !== 0) {
          return (
            <Team
              key={team.name}
              name={team.name}
              colors={team.colors}
              buddys={buddysOfTeam}
            />
          );
        }
      })}
      <Footer />
    </>
  );
}

export default App;
