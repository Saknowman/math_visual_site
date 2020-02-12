<template>
    <base-menu
            class="menu"
            :is_running="is_running"
            @start="start"
            @stop="stop"
            @reset="reset"
    >
        <template v-slot:config>
            <range-input-list-section
                    :key="keys['range-input-list-section']"
                    :config_list="range_input_config_list"></range-input-list-section>
        </template>
        <template v-slot:current-value-viewer>
            <current-value-viewer-list-section
                    :values_list="current_values_list"
                    :config_list="current_values_config_list"></current-value-viewer-list-section>
        </template>
    </base-menu>
</template>

<script>
    import runner from "../../../logics/main_categories/runner"
    import logic from "../../../logics/main_categories/constant_velocity_linear_motion"
    import RangeInputListSection from "../../molecules/forms/RangeInputListSection";
    import CurrentValueViewerListSection from "../../molecules/viewer/CurrentValueViewerListSection";
    import BaseMenu from "../../molecules/menu/BaseMenu";

    export default {
        name: "MenuConstantVelocityLinearMotion",
        components: {
            'base-menu': BaseMenu,
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
                is_running: false
            }
        },
        mounted() {
            this.reset();
            this.start();
        },
        methods: {
            start() {
                runner.start(logic, this.$store.state.main_categories.constant_velocity_linear_motion, () => {
                    this.current_values_list.splice(0, 1, this.$store.state.main_categories.constant_velocity_linear_motion.current_x);
                });
                this.is_running = true
            },
            stop() {
                runner.stop();
                this.is_running = false;
            },
            reset() {
                runner.reset(logic, this.$store.state.main_categories.constant_velocity_linear_motion);
                Object.keys(this.keys).forEach((key) => this.keys[key]++);
                this.current_values_list = [
                    this.$store.state.main_categories.constant_velocity_linear_motion.current_x,
                    this.$store.state.main_categories.constant_velocity_linear_motion.speed
                ];
                if(this.is_running) this.start();
            },
            change_speed(value) {
                this.$store.state.main_categories.constant_velocity_linear_motion.speed = value;
                this.current_values_list.splice(1, 1, value);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>