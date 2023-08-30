export default function MonsterProficiencies({ monsterShown }) {
  return (
    <>
      {monsterShown.proficiencies ? (
        <div className="proficiencies">
          <p className="bold">Proficiencies:</p>{" "}
          {monsterShown.proficiencies.map((proficiency) => (
            <div className="singleProficiency">
              <p className="proficiency" key={proficiency.name}>
                {proficiency.proficiency.name.replace("Saving Throw:", "")}{" "}
                {proficiency.value}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
