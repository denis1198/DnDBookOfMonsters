import { useEffect, useState } from "react";
import MonsterClass from "./components/MonsterClass";
import MonstersList from "./components/MonstersList";
import Loading from "./components/Loading";

const url = "https://www.dnd5eapi.co/api/monsters";

async function fetchMonsters() {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [monsterShown, setMonsterShown] = useState([]);
  const [loading, setLoading] = useState(true);

  const showDetails = async (url) => {
    const data = await fetch(url).then((res) => res.json());
    console.log(data);
    setMonsterShown(data);
    console.log(data.challenge_rating);
  };

  useEffect(() => {
    fetchMonsters().then((results) => {
      setMonsters(results);
      showDetails("https://www.dnd5eapi.co/api/monsters/aboleth");
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  } else {
    return (
      <>
        <div className="container">
          <MonstersList monsters={monsters} showDetails={showDetails} />
          <MonsterClass monsterShown={monsterShown} />
        </div>
      </>
    );
  }
}
