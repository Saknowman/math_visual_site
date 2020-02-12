<template>
    <div style="width: 250px;">
        <range-input-list-section :key="keys['range-input-list-section']"
                                  :config_list="range_input_config_list"></range-input-list-section>
        <current-value-viewer-list-section
                :values_list="current_values_list"
                :config_list="current_values_config_list"></current-value-viewer-list-section>
        <div @click="start">Start</div>
        <div @click="stop">Stop</div>
        <div @click="reset">Reset</div>
    </div>
</template>

<script>
    import runner from "../logics/main_categories/runner"
    import logic from "../logics/main_categories/constant_velocity_linear_motion"
    import RangeInputListSection from "../components/molecules/forms/RangeInputListSection";
    import CurrentValueViewerListSection from "../components/molecules/viewer/CurrentValueViewerListSection";

    export default {
        name: "ViewComponent",
        components: {
            'range-input-list-section': RangeInputListSection,
            'current-value-viewer-list-section': CurrentValueViewerListSection,
        },
        data() {
            return {
                keys: {
                    'range-input-list-section': Math.random(),
                    'current-value-viewer-list-section': Math.random()
                },
                range_input_config_list: [
                    Object.assign({label: "Sample", min: -20, max: 20, step: 2}, {
                        change: function (value) {
                            console.log(value);
                        }
                    }),
                    Object.assign(this.$store.state.main_categories.constant_velocity_linear_motion.config.speed, {
                        value: this.$store.state.main_categories.constant_velocity_linear_motion.speed,
                        change: this.change_speed
                    })
                ],
                current_values_list: [],
                current_values_config_list: [
                    {label: 'X', is_constant: false},
                    {label: 'Speed', is_constant: true}
                ],
            }
        },
        mounted() {
            this.reset();
        },
        methods: {
            start() {
                runner.start(logic, this.$store.state.main_categories.constant_velocity_linear_motion, () => {
                    this.current_values_list.splice(0, 1, this.$store.state.main_categories.constant_velocity_linear_motion.current_x);
                })
            },
            stop() {
                runner.stop()
            },
            reset() {
                runner.reset(logic, this.$store.state.main_categories.constant_velocity_linear_motion);
                Object.keys(this.keys).forEach((key) => this.keys[key]++);
                this.current_values_list = [
                    this.$store.state.main_categories.constant_velocity_linear_motion.current_x,
                    this.$store.state.main_categories.constant_velocity_linear_motion.speed
                ];

            },
            change_speed(value) {
                this.$store.state.main_categories.constant_velocity_linear_motion.speed = value;
                this.current_values_list.splice(1, 1, value);
            }
        }
    }
</script>

<style scoped>

</style>