const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK'; 
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

const enteredValue = prompt('Maximum life for you and the monster.','100');

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || enteredValue <= 0 ) {
    chosenMaxLife= 100;
}

let curentMonsterLife = chosenMaxLife;
let curentPlayerLife = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars (chosenMaxLife);

function reset() {
    curentMonsterLife = chosenMaxLife;
    curentPlayerLife = chosenMaxLife;
    resetGame(chosenMaxLife);
}

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

    if(curentMonsterLife <= 0 || curentPlayerLife <= 0) {
        reset();
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const damage = dealMonsterDamage(maxDamage);
    curentMonsterLife -= damage;
    endRound();
}

function attackHeandler () {
    attackMonster(ATTACK_VALUE);
}

function strongAttackHandler () {
    attackMonster(MODE_STRONG_ATTACK);
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