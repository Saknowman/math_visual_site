export default {
    state: {
        current_x: 0,
        speed: 1,
        config: {
            speed: {
                label: 'Speed',
                min: -10,
                max: 10,
                step: 1
            },
            current_x: {
                default: 0,
                max: 1000
            }
        }
    }
}