const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let curentMonsterLife = chosenMaxLife;
let curentPlayerLife = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars (chosenMaxLife);
function endRound () {
    const initialPlayerLife  = curentPlayerLife;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    curentPlayerLife -= playerDamage;

    if (curentPlayerLife <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        curentPlayerLife = initialPlayerLife;
        setPlayerHealth(initialPlayerLife);
        alert ('You would be dead but bonus life saved you!');
    }

    if (curentMonsterLife <= 0 && curentPlayerLife > 0) {
        alert('You won!');
    } else if (curentPlayerLife <= 0 && curentMonsterLife > 0) {
        alert ('You lost!');
    } else if ( curentMonsterLife <= 0 && curentPlayerLife <=0) {
        alert ('You have a draw!')
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const damage = dealMonsterDamage(maxDamage);
    curentMonsterLife -= damage;
    endRound();
}

function attackHeandler () {
    attackMonster('ATTACK');
}

function strongAttackHandler () {
    attackMonster('STRONG_ATTACK');
}

function healPlayerHandler () {
    let healValue;
    if (curentPlayerLife >= chosenMaxLife - HEAL_VALUE) {
        healValue = chosenMaxLife - curentPlayerLife;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    curentPlayerLife += healValue;
    endRound();
}

attackBtn.addEventListener('click', attackHeandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);