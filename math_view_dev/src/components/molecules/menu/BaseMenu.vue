<template>
    <div class="menu">
        <slot name="config"></slot>
        <slot name="current-value-viewer"></slot>
        <div class="motion-controller">
            <i
                    v-if="!is_running"
                    class="control-button start-button fas fa-play-circle"
                    @click="$emit('start')">
            </i>
            <i
                    v-else
                    class="control-button stop-button fas fa-stop-circle"
                    @click="$emit('stop')">
            </i>

            <i
                    class="control-button reset-button fas fa-redo-alt"
                    @click="$emit('reset')">
            </i>
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
            font-size: 2em;
            color: $theme-color-main-primary;
        }
        .control-button:first-child {
            margin-left: 0;
        }
    }

</style>