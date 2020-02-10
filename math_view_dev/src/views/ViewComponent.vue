<template>
    <div style="width: 250px;">
        <range-input-with-label @change="change_speed"></range-input-with-label>

        <div>
            {{ $store.state.main_categories.constant_velocity_linear_motion.current_x }}
        </div>
        <div @click="start"> Start</div>
        <div @click="stop"> Stop</div>
    </div>
</template>

<script>
    import RangeInputWithLabel from "../components/molecules/forms/RangeInputWithLabel";
    import runner from "../logics/main_categories/runner"
    import logic from "../logics/main_categories/constant_velocity_linear_motion"

    export default {
        name: "ViewComponent",
        components: {
            'range-input-with-label': RangeInputWithLabel
        },
        data() {
            return {}
        },
        mounted() {
            runner.start(logic, this.$store.state.main_categories.constant_velocity_linear_motion)
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