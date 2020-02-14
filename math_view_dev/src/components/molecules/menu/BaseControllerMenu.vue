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
                <i class="tab-icon fas fa-exchange-alt"></i>
            </template>
            <template v-slot:content_2>
                <div class="change-viewer-selection">
                    <div class="viewer-selector"
                         @click="$emit('show_simulator')"
                    >
                        <i class="fas fa-shapes"></i>
                        <span>Simulator</span>
                    </div>
                    <div class="viewer-selector"
                         @click="$emit('show_node_graph')"
                    >
                        <i class="fas fa-project-diagram"></i>
                        <span>Node Graph</span>
                    </div>


                </div>
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

            .change-viewer-selection {
                display: flex;
                flex-direction: column;
                padding-left: $space-medium;

                .viewer-selector {
                    display: flex;
                    margin: $space-medium;

                    i {
                        color: $theme-color-main-primary;
                        width: 1.6em;
                        font-size: 1.5em;
                    }

                    span {
                        font-weight: bolder;
                        font-size: 1.2em;
                    }
                }

                .viewer-selector:hover {
                    opacity: 0.8;
                    cursor: pointer;
                }
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

            .control-button:hover {
                cursor: pointer;
            }

            .control-button:first-child {
                border-left: none;
            }
        }
    }

</style>