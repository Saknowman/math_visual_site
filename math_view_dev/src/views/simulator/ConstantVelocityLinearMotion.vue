<template>
    <logic-runner-template>
        <template v-slot:menu>
            <menu-constant-velocity-linear-motion></menu-constant-velocity-linear-motion>
        </template>
        <template v-if="$store.state.main_categories.is_shown_simulator" v-slot:simulator>
            <simulation-viewer-constant-velocity-linear-motion></simulation-viewer-constant-velocity-linear-motion>
        </template>
        <template v-if="$store.state.main_categories.is_shown_node_graph" v-slot:node_graph>
            <node-viewer-constant-velocity-linear-motion></node-viewer-constant-velocity-linear-motion>
        </template>
    </logic-runner-template>
</template>

<script>
    import LogicRunnerTemplate from "../../components/templates/LogicRunnerTemplate";
    import MenuConstantVelocityLinearMotion from "../../components/organisms/menus/MenuConstantVelocityLinearMotion";
    import SimulationViewerConstantVelocityLinearMotion
        from "../../components/organisms/viewer/simulator/SimulationViewerConstantVelocityLinearMotion";
    import NodeGraphConstantVelocityLinearMotion
        from "../../components/organisms/viewer/node/NodeGraphConstantVelocityLinearMotion";

    export default {
        name: "ConstantVelocityLinearMotion",
        components: {
            'logic-runner-template': LogicRunnerTemplate,
            'menu-constant-velocity-linear-motion': MenuConstantVelocityLinearMotion,
            'simulation-viewer-constant-velocity-linear-motion': SimulationViewerConstantVelocityLinearMotion,
            'node-viewer-constant-velocity-linear-motion': NodeGraphConstantVelocityLinearMotion
        },
    }
</script>

<style scoped>

</style>