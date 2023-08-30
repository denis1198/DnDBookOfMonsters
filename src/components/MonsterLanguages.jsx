export default function ({ monsterShown }) {
  return (
    <>
      {monsterShown.languages && (
        <div className="monsterLanguage">
          <p className="bold">Languages: {monsterShown.languages}</p>
        </div>
      )}
    </>
  );
}
