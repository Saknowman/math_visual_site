<template>
    <div style="width: 250px;">
        <range-input-list-section :config_list="range_input_config_list"></range-input-list-section>
        <div>
            {{ $store.state.main_categories.constant_velocity_linear_motion.current_x }}
        </div>
        <div @click="start"> Start</div>
        <div @click="stop"> Stop</div>
    </div>
</template>

<script>
    import runner from "../logics/main_categories/runner"
    import logic from "../logics/main_categories/constant_velocity_linear_motion"
    import RangeInputListSection from "../components/molecules/forms/RangeInputListSection";

    export default {
        name: "ViewComponent",
        components: {
            'range-input-list-section': RangeInputListSection
        },
        data() {
            return {
                range_input_config_list: [
                    Object.assign({label: "Sample", min: -20, max: 20, step: 2}, {
                        change: function (value) {
                            console.log(value);
                        }
                    }),
                    Object.assign(this.$store.state.main_categories.constant_velocity_linear_motion.config.speed, {
                        change: this.change_speed
                    })
                ]
            }
        },
        mounted() {
            this.start();
        },
        methods: {
            start() {
                runner.start(logic, this.$store.state.main_categories.constant_velocity_linear_motion)
            },
            stop() {
                runner.stop()
            },
            change_speed(value) {
                this.$store.state.main_categories.constant_velocity_linear_motion.speed = value;
            }
        }
    }
</script>

<style scoped>

</style>