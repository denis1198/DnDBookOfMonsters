export default function MonsterActions({ monsterShown }) {
  return (
    <>
      <div className="actions">
        <h4 className="actionsTitle">Actions:</h4>
        <div className="regularActions">
          {monsterShown.actions ? (
            <div>
              {monsterShown.actions.map((action) => (
                <>
                  <h4
                    className="bold"
                    key={`${action.name}`}
                  >{`${action.name}: `}</h4>
                  <p>{`${action.desc}`}</p>
                </>
              ))}
            </div>
          ) : null}
        </div>
        {monsterShown.legendary_actions && (
          <div className="legendaryActionsDiv">
            <h3 className="legendaryActions">Legendary Actions</h3>
            {monsterShown.legendary_actions.map((legAction) => (
              <>
                <p>{`${legAction.name}: ${legAction.desc}`}</p>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
