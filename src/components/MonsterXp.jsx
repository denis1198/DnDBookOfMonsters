export default function MonsterXP({ monsterShown }) {
  return (
    <>
      {monsterShown.xp && (
        <div className="monsterStats">
          <p>{`Challenge ${monsterShown.challenge_rating} (${monsterShown.xp})`}</p>
        </div>
      )}
    </>
  );
}
