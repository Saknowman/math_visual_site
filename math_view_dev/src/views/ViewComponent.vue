<template>
    <node-viewer></node-viewer>
</template>

<script>
    import NodeGraphConstantVelocityLinearMotion
        from "../components/organisms/viewer/node/NodeGraphConstantVelocityLinearMotion";

    export default {
        name: "ViewComponent",
        components: {
            'node-viewer': NodeGraphConstantVelocityLinearMotion
        },
    }
</script>

<style scoped>

</style>