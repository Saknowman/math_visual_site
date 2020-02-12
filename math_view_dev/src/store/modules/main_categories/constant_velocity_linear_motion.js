export default {
    state: {
        current_x: 0,
        speed: 5,
        config: {
            speed: {
                label: 'Speed',
                min: -20,
                max: 20,
                step: 1,
                default: 5
            },
            current_x: {
                min: -500,
                default: 0,
                max: 500
            }
        }
    }
}