<template>
    <base-simulation-viewer>
        <svg
                class="svg-canvas"
                width="100%"
                height="100%"
                viewBox="0, 0, 2000, 1000">
            <g class="bg-grid">
                <line class="horizontal-line" x1="0" y1="50%" x2="2000" y2="50%"></line>
                <line class="horizontal-line" x1="50%" y1="0" x2="50%" y2="100%"></line>
                <text class="grid-text" x="51%" y="50%">0</text>
            </g>

            <g>
                <circle class="target-circle" r="50" cy="50%" :cx="current_x"></circle>
            </g>
        </svg>
    </base-simulation-viewer>
</template>

<script>
    import BaseSimulationViewer from "../../molecules/viewer/BaseSimulationViewer";

    export default {
        name: "SimulationViewerConstantVelocityLinearMotion",
        components: {
            'base-simulation-viewer': BaseSimulationViewer
        },
        computed: {
            current_x: function () {
                const current_x = this.$store.state.main_categories.constant_velocity_linear_motion.current_x;
                const center_pos_x = this.width / 2.0;
                const is_minus = current_x < 0;
                let distance_from_center_x = (Math.abs(current_x) / this.$store.state.main_categories.constant_velocity_linear_motion.config.current_x.max) * center_pos_x;
                distance_from_center_x *= is_minus ? -1 : 1;
                return center_pos_x + distance_from_center_x;
            }
        },
        data() {
            return {
                width: 2000,
                height: 1000,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .svg-canvas {
        .bg-grid {
            font-size: 5.0em;

            .horizontal-line {
                stroke: $grid-color-main;
                stroke-width: 1px;
            }

            .grid-text {
                fill: $grid-color-main;
            }
        }

        .target-circle {
            fill: $theme-color-accent-primary;
        }
    }

</style>