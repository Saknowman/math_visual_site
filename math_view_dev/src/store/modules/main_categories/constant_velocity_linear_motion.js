export default {
    state: {
        current_x: 0,
        current_y: 0,
        angle: 45,
        speed: 5,
        config: {
            speed: {
                label: 'Speed',
                min: -20,
                max: 20,
                step: 1,
                default: 5
            },
            angle: {
                label: 'Angle',
                min: 0,
                max: 360,
                step: 1,
                default: 45
            },
            current_x: {
                min: -500,
                default: 0,
                max: 500
            },
            current_y: {
                min: -500,
                default: 0,
                max: 500
            }
        }
    }
}