function solve(speed, area) {
    let regulations = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    let speeding = speed-regulations[area] ;
    let status = '';

    if (speeding <= 20) {
        status = 'speeding ';
    } else if (speeding > 20 && speeding <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    };

    switch (area) {
        case 'motorway':
            speed <= regulations[area] ?
                console.log(`Driving ${speed} km/h in a ${regulations[area]} zone`) :
                console.log(`The speed is ${speed - regulations[area]} km/h faster than the allowed speed of ${regulations[area]} - ${status}`);
            break;

        case 'interstate':
            speed <= regulations[area] ?
                console.log(`Driving ${speed} km/h in a ${regulations[area]} zone`) :
                console.log(`The speed is ${speed - regulations[area]} km/h faster than the allowed speed of ${regulations[area]} - ${status}`);
            break;

        case 'city':
            speed <= regulations[area] ?
                console.log(`Driving ${speed} km/h in a ${regulations[area]} zone`) :
                console.log(`The speed is ${speed - regulations[area]} km/h faster than the allowed speed of ${regulations[area]} - ${status}`);
            break;

        case 'residential':
            speed <= regulations[area] ?
                console.log(`Driving ${speed} km/h in a ${regulations[area]} zone`) :
                console.log(`The speed is ${speed - regulations[area]} km/h faster than the allowed speed of ${regulations[area]} - ${status}`);
            break;
    };



};
solve(40, 'city');