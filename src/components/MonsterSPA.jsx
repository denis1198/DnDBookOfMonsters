export default function MonsterSPA({ monsterShown }) {
  return (
    <>
      {monsterShown.special_abilities &&
        monsterShown.special_abilities.map((specialAbility) => (
          <div key={`${specialAbility.name}+1`} className="monstersSpA">
            <h3 className="bold" key={specialAbility.name}>
              {specialAbility.name}
            </h3>
            <p key={`${specialAbility.name}+2`}>{specialAbility.desc}</p>
          </div>
        ))}
    </>
  );
}
