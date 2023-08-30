export default function MonstersList({ monsters, showDetails }) {
  return (
    <>
      <div className="monsters">
        {monsters.map((monster) => (
          <div className="singleMonster" key={monster.index}>
            {monster.name}
            <button
              className="moreButton"
              onClick={() =>
                showDetails(`https://www.dnd5eapi.co${monster.url}`)
              }
            >
              More
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
