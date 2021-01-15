import {lvToExp, expToMora, ascToMora, ascToSecondary, ascToPrimary} from './Costs';
import {getRate} from './Drops';

const charStatesToMats = charState => {
    const curlv = parseInt(charState.curlv);
    const tgtlv = parseInt(charState.tgtlv);
    const curasc = parseInt(charState.curasc);
    const tgtasc = parseInt(charState.tgtasc);
    const curtal1 = parseInt(charState.curtal1);
    const curtal2 = parseInt(charState.curtal2);
    const curtal3 = parseInt(charState.curtal3);
    const tgttal1 = parseInt(charState.tgttal1);
    const tgttal2 = parseInt(charState.tgttal2);
    const tgttal3 = parseInt(charState.tgttal3);

    // exp costs
    const exp = lvToExp('char', curlv, tgtlv);

    // mora costs
    const mora = 
        expToMora('char', exp) 
        + ascToMora('char', curasc, tgtasc)
        + ascToMora('talent', curtal1, tgttal1)
        + ascToMora('talent', curtal2, tgttal2)
        + ascToMora('talent', curtal3, tgttal3);

    // secondary asc costs
    const secondaryAsc = ascToSecondary('char', curasc, tgtasc);

    // primary asc costs
    const primaryAsc = ascToPrimary('char', curasc, tgtasc);

    // secondary tal costs
    const secondaryTal = 
        ascToSecondary('talent', curtal1, tgttal1)
        + ascToSecondary('talent', curtal2, tgttal2)
        + ascToSecondary('talent', curtal3, tgttal3);

    const primaryTal = [
        ...ascToPrimary('talent', curtal1, tgttal1),
        ...ascToPrimary('talent', curtal2, tgttal2),
        ...ascToPrimary('talent', curtal3, tgttal3)];
        
    return {
        exp: exp,
        mora: mora,
        secondaryAsc: secondaryAsc,
        secondaryTal: secondaryTal,
        primaryAsc: primaryAsc,
        primaryTal: primaryTal
    }
}

const weaponStatesToMats = weaponState => {
    const curlv = parseInt(weaponState.curlv);
    const tgtlv = parseInt(weaponState.tgtlv);
    const curasc = parseInt(weaponState.curasc);
    const tgtasc = parseInt(weaponState.tgtasc);

    // exp costs
    const exp = lvToExp('weapon', curlv, tgtlv);

    // mora costs
    const mora = 
        expToMora('weapon', exp) 
        + ascToMora('weapon', curasc, tgtasc);

    // weapon asc costs
    const weaponAsc = ascToPrimary('weapon', curasc, tgtasc);
        
    return {
        exp: exp,
        mora: mora,
        weaponAsc: weaponAsc
    }
}

const matToResin = (ar, wl, drop, quantity, rarity = false) => {
    let resinPerRun;
    switch (drop) {
        case 'exp'          :
        case 'mora'         :
        case 'primaryTal'   :
        case 'weaponAsc'    : resinPerRun = 20; break;
        case 'primaryAsc'   :
        case 'secondaryAsc' : resinPerRun = 40; break;
        case 'secondaryTal' : resinPerRun = 60; break;
    }

    const runs = quantity/getRate(ar, wl, drop, rarity);
    
    return Math.ceil(runs) * resinPerRun;
}

const charMatsToResin = (ar, wl, mats) => {
    const expResin = matToResin(ar, wl, 'exp', mats['exp']);
    const moraResin = matToResin(ar, wl, 'mora', mats['mora']);

    const primaryAscResin = mats['primaryAsc']
        .map(phase => matToResin(ar, wl, 'primaryAsc', phase.quantity, phase.rarity))
        .reduce((cur, acc) => cur + acc, 0);
    const secondaryAscResin = matToResin(ar, wl, 'secondaryAsc', mats['secondaryAsc']);
    const ascResin = Math.max(primaryAscResin, secondaryAscResin);
    
    const primaryTalResin = mats['primaryTal']
        .map(phase => matToResin(ar, wl, 'primaryTal', phase.quantity, phase.rarity))
        .reduce((cur, acc) => cur + acc, 0);
    const secondaryTalResin = matToResin(ar, wl, 'secondaryTal', mats['secondaryTal']);

    return expResin + moraResin + ascResin + primaryTalResin + secondaryTalResin;
}

const weaponMatsToResin = (ar, wl, mats) => {
    const expResin = matToResin(ar, wl, 'exp', mats['exp']);
    const moraResin = matToResin(ar, wl, 'mora', mats['mora']);

    const ascResin = mats['weaponAsc']
        .map(phase => matToResin(ar, wl, 'weaponAsc', phase.quantity, phase.rarity))
        .reduce((cur, acc) => cur + acc, 0);

    return expResin + moraResin + ascResin;
}

const resinToDays = resin => Math.ceil(resin/180);

const charStatesToResin = (ar, wl, charStates) => {
    const values = Object.values(charStates);
    return values.length === 0 ? 0 : values
        .map(charState => charStatesToMats(charState))
        .map(mats => charMatsToResin(ar, wl, mats))
        .reduce((cur, acc) => cur + acc, 0);
}

const weaponStatesToResin = (ar, wl, weaponStates) => {
    const values = Object.values(weaponStates);
    return values.length === 0 ? 0 : values
        .map(weaponState => weaponStatesToMats(weaponState))
        .map(mats => weaponMatsToResin(ar, wl, mats))
        .reduce((cur, acc) => cur + acc, 0);
}

const toResin = (ar, wl, selectedChars, selectedWeapons, charStates, weaponStates) => {
    const cs = {};
    selectedChars.forEach(name => {
        if (charStates[name] !== undefined) {
            cs[name] = charStates[name];
        }
    });

    const ws = {};
    selectedWeapons.forEach(name => {
        if (weaponStates[name] !== undefined) {
            ws[name] = weaponStates[name];
        }
    });


    return charStatesToResin(ar, wl, cs) + weaponStatesToResin(ar, wl, ws);
}

export {toResin, resinToDays};