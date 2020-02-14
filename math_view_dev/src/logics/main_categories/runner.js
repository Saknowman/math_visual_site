export default {
    frame_per_second: 24,
    interval_id: -1,
    start(logic, state, call_back = () => {
    }) {
        if (this.interval_id !== -1)
            this.stop();

        this.interval_id = setInterval(() => {
            logic.update(state);
            call_back(state)
        }, 1000 / this.frame_per_second)
    },
    stop() {
        if (this.interval_id === -1) return;
        clearInterval(this.interval_id)
    },
    reset(logic, state) {
        this.stop();
        logic.reset(state);
    },
}