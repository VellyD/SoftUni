function solve(steps, footprintMeter, speed) {
    let distance = steps * footprintMeter;
    speed = speed / 3.6;

    let time = distance / speed;
    let breaks = Math.trunc(distance / 500)

    time += (breaks * 60);

    let h = Math.trunc(time / 3600);
    let m = Math.trunc((time % 3600) / 60);
    let s = Math.round(time % 60);


    console.log(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
};

solve(2564, 0.70, 5.5);