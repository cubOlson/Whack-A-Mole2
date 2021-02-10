window.addEventListener('DOMContentLoaded', () => {

//     setInterval(() => {
//       const moleHeads = document.querySelectorAll('.wgs__mole-head');
//       for (let moleHead of moleHeads) {
//         moleHead.classList.toggle('wgs__mole-head--hidden');
//       }
//     }, 1000);

    function popUpRandomMole() {
        const moleElements = document.querySelectorAll('.wgs__mole-head');
        const arr = Array.from(moleElements);
        const random = Math.floor(Math.random()*8);
        let current = arr[random];
        current.classList.toggle('wgs__mole-head--hidden');
        setTimeout(() => {
            hideMole(current);
        }, 1000);
    }
    function hideMole(current) {
        current.classList.toggle('wgs__mole-head--hidden');
        setTimeout(popUpRandomMole, 1000);
    }
    setTimeout(popUpRandomMole, 0);
});
