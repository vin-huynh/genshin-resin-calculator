import costData from '../Data/Costs';



// ASCENSION TABLES
const getAscTable = type => type === 'char' ? costData.charAsc : type === 'weapon' ? costData.weaponAsc : costData.talentAsc;

// EXP CALCULATIONS
const roundDown = n => n > 40 ? Math.floor(n/10) * 10 : Math.floor(n/20) * 20;
const roundUp = n => n >= 40 ? Math.ceil((n+1)/10) * 10 : Math.ceil((n+1)/20) * 20;

const getPhaseExp = (table, fromLevel, toLevel) => {
    const baseLevel =  roundDown(fromLevel);
    const baseCost = table[toLevel];
    return baseCost * (toLevel - fromLevel) / (toLevel - baseLevel);
}

const lvToExp = (type, currentLevel, targetLevel) => {
    const phaseExp = [];
    let fromLevel = currentLevel;
    let toLevel = roundUp(fromLevel);

    let table;
    if (type === 'char') {
        table = costData.charExp;
    } else if (type === 'weapon') {
        table = costData.weaponExp;
    }
    
    while (toLevel <= targetLevel) {
        phaseExp.push(getPhaseExp(table, fromLevel, toLevel));
        fromLevel = roundUp(fromLevel);
        toLevel = roundUp(toLevel);
    }

    return phaseExp.reduce((cur, acc) => cur + acc);
}

// MORA CALCULATIONS
const expToMora = (type, exp) => type === 'char' ? exp/5 : exp/10; 

const ascToMora = (type, curPhase, tgtPhase) => {
    const table = getAscTable(type);
    let mora = 0;
    for (let phase = curPhase + 1; phase <= tgtPhase; phase++) {
        mora += table[phase]['mora'];
    }
    return mora;
}

// SECONDARY ASC CALCULATIONS
const ascToSecondary = (type, curPhase, tgtPhase) => {
    const table = getAscTable(type);
    let secondary = 0;
    for (let phase = curPhase + 1; phase <= tgtPhase; phase++) {
        secondary += table[phase]['secondary']['quantity'];
    }
    return secondary;
}

// PRIMARY ASC CALCULATIONS
const ascToPrimary = (type, curPhase, tgtPhase) => {
    const table = getAscTable(type);
    let primary = [];
    for (let phase = curPhase + 1; phase <= tgtPhase; phase++) {
        primary.push(table[phase]['primary']);
    }
    return primary;
}

export {lvToExp, expToMora, ascToMora, ascToSecondary, ascToPrimary};

