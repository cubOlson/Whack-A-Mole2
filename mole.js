window.addEventListener('DOMContentLoaded', () => {

//     setInterval(() => {
//       const moleHeads = document.querySelectorAll('.wgs__mole-head');
//       for (let moleHead of moleHeads) {
//         moleHead.classList.toggle('wgs__mole-head--hidden');
//       }
//     }, 1000);

    function popUpRandomMole() {
        const moleElements = document.querySelectorAll('.wgs__mole-head:not(.wgs__mole-head--whacked)');
        const arr = Array.from(moleElements);
        const whacked = document.querySelectorAll('.wgs__mole-head--whacked');
        console.log(whacked.length);
        const whackedArr = Array.from(whacked);
        const random = Math.floor(Math.random()*8);
        let current = arr[random];
        current.classList.toggle('wgs__mole-head--hidden');
        setTimeout(() => {
            hideMole(current);
        }, 3000);
    }
    function hideMole(current) {
        current.classList.toggle('wgs__mole-head--hidden');
        setTimeout(popUpRandomMole, 1000);
    }
    setTimeout(popUpRandomMole, 0);

    const moleElements = document.querySelectorAll('.wgs__mole-head');
    const arr = Array.from(moleElements); 
    arr.forEach(moleHead => {
        moleHead.addEventListener('click', event => {
            event.target.className += ' wgs__mole-head--whacked';
            // event.target.setAttribute('class', 'wgs__mole-head--whacked')
            moleHead.classList.toggle('wgs__mole-head--hidden');
        })
    })
});
