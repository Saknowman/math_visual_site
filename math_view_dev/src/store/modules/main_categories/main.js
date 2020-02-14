import constant_velocity_linear_motion from "./constant_velocity_linear_motion";

export default {
    namespaced: true,

    state: {
        constant_velocity_linear_motion: constant_velocity_linear_motion.state,
        is_shown_simulator: false,
        is_shown_node_graph: true
    }
}