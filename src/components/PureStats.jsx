export default function PureStats({ monsterShown }) {
  return (
    <>
      <div className="pureStats" key={"monsterStatsKey"}>
        <div className="stat">
          <h5>STR</h5>
          <p>{monsterShown.strength}</p>
        </div>
        <div className="stat">
          <h5>DEX</h5>
          <p>{monsterShown.dexterity}</p>
        </div>
        <div className="stat">
          <h5>CON</h5>
          <p>{monsterShown.constitution}</p>
        </div>
        <div className="stat">
          <h5>INT</h5>
          <p>{monsterShown.intelligence}</p>
        </div>
        <div className="stat">
          <h5>WIS</h5>
          <p>{monsterShown.wisdom}</p>
        </div>
        <div className="stat">
          <h5>CHA</h5>
          <p>{monsterShown.charisma}</p>
        </div>
      </div>
    </>
  );
}
