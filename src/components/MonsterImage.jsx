export default function MonsterImage({ monsterShown }) {
  return (
    <>
      {monsterShown.image ? (
        <img
          className="monsterImage"
          key={`https://dnd5eapi.co${monsterShown.image}`}
          src={`https://dnd5eapi.co${monsterShown.image}`}
        />
      ) : null}
    </>
  );
}
