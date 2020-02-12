<template>
    <div class="menu">
        <slot name="config"></slot>
        <slot name="current-value-viewer"></slot>
        <div class="motion-controller">
            <div
                    v-if="!is_running"
                    class="control-button start-button"
                    @click="$emit('start')">Start
            </div>
            <div
                    v-else
                    class="control-button stop-button"
                    @click="$emit('stop')">Stop
            </div>

            <div
                    class="control-button reset-button"
                    @click="$emit('reset')">Reset
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseMenu",
        props: {
            is_running: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .motion-controller {
        display: flex;

        .control-button {
            width: 50px;
            margin-left: $space-x-large;
        }
        .control-button:first-child {
            margin-left: 0;
        }
    }

</style>