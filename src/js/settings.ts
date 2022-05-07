export const settings = {
    sprite: './src/img/feathers.png',
    feathers: {
        frame1: {
            sx: 14,
            sy: 54,
            sw: 104,
            sh: 125,
            dx: 0,
            dy: 0,
            dw: 40,
            dh: 45
        },
        frame2: {
            sx: 161,
            sy: 7,
            sw: 131,
            sh: 179,
            dx: 0,
            dy: 0,
            dw: 40,
            dh: 45
        },
        frame3: {
            sx: 314,
            sy: 65,
            sw: 72,
            sh: 127,
            dx: 0,
            dy: 0,
            dw: 40,
            dh: 45
        },
        positionY: {min: -400, max:-50},
        speedY: {min: 1, max:3},
        angle: {min: 0, max:360}
    }
}

export function random(min: number, max: number) {
    return random2({min: min, max: max});
}

export function random2(param: {min: number, max: number}) {
    return param.min + Math.random()*(param.max-param.min) | 0;
}