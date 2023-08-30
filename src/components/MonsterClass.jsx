import MonsterActions from "./MonsterActions";
import MonsterImage from "./MonsterImage";
import MonsterLanguages from "./MonsterLanguages";
import MonsterProficiencies from "./MonsterProficiencis";
import MonsterSPA from "./MonsterSPA";
import MonsterXP from "./MonsterXp";
import PureStats from "./PureStats";

export default function MonsterClass({ monsterShown }) {
  return (
    <>
      <div className="sidebar">
        {monsterShown ? (
          <div className="content">
            <h2 className="monsterName">{monsterShown.name}</h2>
            <div className="classes">
              <p>
                {`${monsterShown.size} ${monsterShown.type}, ${monsterShown.alignment}`}
              </p>
              {monsterShown.armor_class ? (
                <div>
                  <p>{`Armor Class ${monsterShown.armor_class[0].value} (${monsterShown.armor_class[0].type})`}</p>
                </div>
              ) : null}
              <span>{`Hit Points ${monsterShown.hit_points} (${monsterShown.hit_points_roll})`}</span>
            </div>

            {/* need to map a speed */}

            <PureStats monsterShown={monsterShown} />
            <MonsterProficiencies monsterShown={monsterShown} />
            <MonsterLanguages monsterShown={monsterShown} />
            <MonsterXP monsterShown={monsterShown} />
            <MonsterSPA monsterShown={monsterShown} />
            <MonsterActions monsterShown={monsterShown} />
            <MonsterImage monsterShown={monsterShown} />
          </div>
        ) : null}
      </div>
    </>
  );
}
