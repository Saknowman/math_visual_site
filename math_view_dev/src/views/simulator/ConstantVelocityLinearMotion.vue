<template>
    <logic-runner-template>
        <template v-slot:menu>
            <menu-constant-velocity-linear-motion></menu-constant-velocity-linear-motion>
        </template>
        <template v-slot:viewer>
            <simulation-viewer-constant-velocity-linear-motion></simulation-viewer-constant-velocity-linear-motion>
        </template>
    </logic-runner-template>
</template>

<script>
    import LogicRunnerTemplate from "../../components/templates/LogicRunnerTemplate";
    import MenuConstantVelocityLinearMotion from "../../components/organisms/menus/MenuConstantVelocityLinearMotion";
    import SimulationViewerConstantVelocityLinearMotion
        from "../../components/organisms/viewer/SimulationViewerConstantVelocityLinearMotion";

    export default {
        name: "ConstantVelocityLinearMotion",
        components: {
            'logic-runner-template': LogicRunnerTemplate,
            'menu-constant-velocity-linear-motion': MenuConstantVelocityLinearMotion,
            'simulation-viewer-constant-velocity-linear-motion': SimulationViewerConstantVelocityLinearMotion
        },
    }
</script>

<style scoped>

</style>