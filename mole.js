window.addEventListener('DOMContentLoaded', () => {

//     setInterval(() => {
//       const moleHeads = document.querySelectorAll('.wgs__mole-head');
//       for (let moleHead of moleHeads) {
//         moleHead.classList.toggle('wgs__mole-head--hidden');
//       }
//     }, 1000);
    let count = 30;
    let score = 0;

    function popUpRandomMole() {
        if (count === 0) {
            const gameStatus = document.getElementById('gameStatus');
            gameStatus.innerText = `You whacked ${score} moles!`
            return;
        }
        count--;
        console.log(count);
        const moleElements = document.querySelectorAll('.wgs__mole-head');
        const arr = Array.from(moleElements);
        const random = Math.floor(Math.random()*8);
        let current = arr[random];
        current.classList.toggle('wgs__mole-head--hidden');
        setTimeout(() => {
            hideMole(current);
        }, 1000 - (score*30));
    }
    function hideMole(current) {
        console.log(current.classList);
        if (!current.classList.value.includes('wgs__mole-head--hidden')) {
        current.classList.toggle('wgs__mole-head--hidden');
        }
        const random = Math.floor(Math.random()*1000);
        setTimeout(popUpRandomMole, 250 + random);
    }
    setTimeout(popUpRandomMole, 0);

    const moleElements = document.querySelectorAll('.wgs__mole-head');
    const arr = Array.from(moleElements); 
    arr.forEach(moleHead => {
        moleHead.addEventListener('click', event => {
            score += 1;
            const scoreDisplay = document.getElementById('score');
            scoreDisplay.innerText = `Score: ${score}`;
            const prev = moleHead.classList;
            moleHead.classList.add('wgs__mole-head--death');
            setTimeout(() => {
                console.log('made it')
                moleHead.classList.remove('wgs__mole-head--death');
                // moleHead.classList.toggle('wgs__mole-head--hidden');
                } , 400)
    })
    })
})
