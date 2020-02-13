import math_utils from "../math_utils";

export default {
    update(state) {
        state.current_x = math_utils.round(_calc_current_x(state), 2);
        state.current_y = math_utils.round(_calc_current_y(state), 2);
    },
    reset(state) {
        state.current_x = state.config.current_x.default;
        state.current_y = state.config.current_y.default;
        state.speed = state.config.speed.default;
        state.angle = state.config.angle.default;
    }
}

function _calc_current_x(state) {
    const distance_x = Math.cos(math_utils.to_radians(state.angle)) * state.speed;
    const result = state.current_x + distance_x;
    if (result > state.config.current_x.max) {
        return state.config.current_x.min
    }
    if (result < state.config.current_x.min) {
        return state.config.current_x.max
    }
    return result;
}

function _calc_current_y(state) {
    const distance_y = Math.sin(math_utils.to_radians(state.angle)) * state.speed;
    const result = state.current_y + distance_y;
    if (result > state.config.current_y.max) {
        return state.config.current_y.min
    }
    if (result < state.config.current_y.min) {
        return state.config.current_y.max
    }
    return result;
}