<template>
    <div>
        <svg width="500px" height="250px" viewBox="0 0 100 50">
            <node-card-out></node-card-out>
        </svg>
    </div>
</template>

<script>
    import NodeCardOut from "../../../molecules/node/NodeCardOut";

    export default {
        name: "NodeViewerConstantVelocityLinearMotion",
        components: {
            'node-card-out': NodeCardOut
        }
    }
</script>

<style scoped>

</style>