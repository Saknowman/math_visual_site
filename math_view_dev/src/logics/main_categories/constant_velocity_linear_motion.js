export default {
    update(state) {
        state.current_x += state.speed;
        if (state.current_x >= state.config.current_x.max) {
            state.current_x = state.config.current_x.default
        }
    },
    reset(state) {
        state.current_x = state.config.current_x.default;
        state.speed = state.config.speed.default;
    }
}