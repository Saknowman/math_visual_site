<template>
    <div class="controller-menu">
        <tab-layout class="value-controller" :headers="['Controller', 'Viewer', 'Config']">
            <template v-slot:header_0>
                <i class="tab-icon fas fa-sliders-h"></i>
            </template>
            <template v-slot:content_0>
                <slot name="config"></slot>
            </template>

            <template v-slot:header_1>
                <i class="tab-icon fas fa-info"></i>
            </template>
            <template v-slot:content_1>
                <slot name="current-value-viewer"></slot>
            </template>

            <template v-slot:header_2>
                <i class="tab-icon fas fa-cog"></i>
            </template>
            <template v-slot:content_2>

            </template>
        </tab-layout>
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
    import TabLayout from "../layout/TabLayout";

    export default {
        name: "BaseControllerMenu",
        components: {
            'tab-layout': TabLayout
        },
        props: {
            is_running: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .controller-menu {
        display: flex;
        flex-direction: column;
        height: 100%;

        .value-controller {
            flex: 1;
            overflow: auto;

            .tab-icon {
                font-size: 1em;
                color: $theme-color-accent-primary;
                align-self: center;
            }
        }

        .motion-controller {
            display: flex;
            justify-content: space-around;
            height: 50px;

            .control-button {
                border-left: solid $space-small;
                flex: 1;
                text-align: center;
                align-self: center;
                font-size: 2em;
                color: $theme-color-main-primary;
            }

            .control-button:first-child {
                border-left: none;
            }
        }
    }

</style>