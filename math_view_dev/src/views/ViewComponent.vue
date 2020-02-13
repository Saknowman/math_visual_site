<template>
    <node-viewer></node-viewer>
</template>

<script>
    import NodeViewerConstantVelocityLinearMotion
        from "../components/organisms/viewer/node/NodeViewerConstantVelocityLinearMotion";

    export default {
        name: "ViewComponent",
        components: {
            'node-viewer': NodeViewerConstantVelocityLinearMotion
        },
    }
</script>

<style scoped>

</style>