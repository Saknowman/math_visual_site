<template>
    <logic-runner-template>
        <template v-slot:menu>
            <menu-constant-velocity-linear-motion></menu-constant-velocity-linear-motion>
        </template>
        <div v-if="false">
            <simulation-viewer-constant-velocity-linear-motion></simulation-viewer-constant-velocity-linear-motion>
        </div>
        <template v-slot:viewer>
            <node-viewer-constant-velocity-linear-motion></node-viewer-constant-velocity-linear-motion>
        </template>
    </logic-runner-template>
</template>

<script>
    import LogicRunnerTemplate from "../../components/templates/LogicRunnerTemplate";
    import MenuConstantVelocityLinearMotion from "../../components/organisms/menus/MenuConstantVelocityLinearMotion";
    import SimulationViewerConstantVelocityLinearMotion
        from "../../components/organisms/viewer/simulator/SimulationViewerConstantVelocityLinearMotion";
    import NodeViewerConstantVelocityLinearMotion
        from "../../components/organisms/viewer/node/NodeViewerConstantVelocityLinearMotion";

    export default {
        name: "ConstantVelocityLinearMotion",
        components: {
            'logic-runner-template': LogicRunnerTemplate,
            'menu-constant-velocity-linear-motion': MenuConstantVelocityLinearMotion,
            'simulation-viewer-constant-velocity-linear-motion': SimulationViewerConstantVelocityLinearMotion,
            'node-viewer-constant-velocity-linear-motion': NodeViewerConstantVelocityLinearMotion
        },
    }
</script>

<style scoped>

</style>