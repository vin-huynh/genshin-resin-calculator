import dropTables from '../Data/Drops';

const arToMastery = ar => {
    if      (ar >= 45) return 4;
    else if (ar >= 36) return 3;
    else if (ar >= 28) return 2;
    else if (ar >= 27) return 1;
    else               return 0;
}

const arToForgery = ar => {
    if      (ar >= 40) return 4;
    else if (ar >= 30) return 3;
    else if (ar >= 21) return 2;
    else if (ar >= 16) return 1;
    else               return 0;
}

const getRate = (ar, wl, drop, rarity = 2) => {
    let dropTable;
    let level = wl;
    switch (drop) {
        case 'exp'          : return dropTables['leyLines'][level]['exp'];
        case 'mora'         : return dropTables['leyLines'][level]['mora'];
        case 'secondaryAsc' : return dropTables['elite'][level]['secondary'];
        case 'secondaryTal' : return dropTables['weekly'][level]['secondary']/3;
        case 'primaryAsc'   : 
            dropTable = dropTables['elite']; 
            break;
        case 'primaryTal'   :
            dropTable = dropTables['mastery']; 
            level = arToMastery(ar);
            break;
        case 'weaponAsc'    :
            dropTable = dropTables['forgery']; 
            level = arToForgery(ar);
            break;
    }

    let rate = 0;
    if (rarity) {
        let multiplier = 1;
        for (let i = rarity - 2; i >= 0; i--) {
            rate += dropTable[level]['primary'][i] * multiplier;
            multiplier/=3;
        }
    }
    return rate;
}

export {getRate};