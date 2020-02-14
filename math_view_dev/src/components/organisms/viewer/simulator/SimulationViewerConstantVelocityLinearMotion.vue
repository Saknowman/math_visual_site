<template>
    <base-simulation-viewer>
        <svg
                class="svg-canvas"
                width="100%"
                height="100%"
                :viewBox="[0, 0, width, height].join(',')">
            <g class="bg-grid">
                <line class="horizontal-line" x1="0" y1="50%" x2="2000" y2="50%"></line>
                <line class="horizontal-line" x1="50%" y1="0" x2="50%" y2="100%"></line>
                <text class="grid-text" x="51%" y="50%">0</text>
            </g>

            <g class="main-objects">
                <g>
                    <polygon
                            class="angle-arrow"
                            :points="angle_arrow_points"
                            :style="{transform: 'rotate(' + current_rotate_angle + 'deg'}"
                    ></polygon>

                    <line
                            class="angle-line"
                            x1="50%"
                            y1="50%"
                            :x2="this.width / 2 + (line_length * 0.81)"
                            :y2="height / 2"
                            :style="{
                            transform: 'rotate(' + current_rotate_angle + 'deg',
                            'stroke-width': Math.abs(line_length) * 0.1
                            }"
                    ></line>
                </g>
                <g>
                    <circle class="target-circle" r="50" :cy="current_y" :cx="current_x"></circle>
                </g>
            </g>
        </svg>
    </base-simulation-viewer>
</template>

<script>
    import BaseSimulationViewer from "../../../molecules/viewer/BaseSimulationViewer";

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
            },
            current_y: function () {
                const current_y = this.$store.state.main_categories.constant_velocity_linear_motion.current_y;
                const center_pos_y = this.height / 2.0;
                const is_minus = current_y < 0;
                let distance_from_center_y = (Math.abs(current_y) / this.$store.state.main_categories.constant_velocity_linear_motion.config.current_y.max) * center_pos_y;
                distance_from_center_y *= is_minus ? -1 : 1;
                return center_pos_y - distance_from_center_y;
            },
            line_length: function () {
                return (this.width * 0.01) * this.$store.state.main_categories.constant_velocity_linear_motion.speed;
            },
            angle_arrow_points: function() {
                const line_length = (this.width * 0.01) * this.$store.state.main_categories.constant_velocity_linear_motion.speed;
                const edge_x = this.width / 2 + line_length;
                const center_y = this.height / 2;
                const arrow_cali_x = edge_x - line_length * 0.2;
                const result = [
                    [this.width / 2, center_y].join(','),
                    [edge_x, this.height / 2].join(','),
                    [arrow_cali_x, center_y - line_length * 0.2].join(','),
                    [arrow_cali_x, center_y + line_length * 0.2].join(','),
                    [edge_x, this.height / 2].join(',')
                ];
                return result.join(' ');
            },
            current_rotate_angle: function() {
                return -(this.$store.state.main_categories.constant_velocity_linear_motion.angle);
            }
        },
        data() {
            return {
                width: this.$store.getters.layout_simulator_width,
                height: this.$store.getters.layout_simulator_height,
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

        .angle-line {
            transform-origin: center;
            stroke-width: 10px;
            stroke: $theme-color-main-primary;
        }

        .angle-arrow {
            transform-origin: center;
            fill: $theme-color-main-primary;
        }
    }

</style>