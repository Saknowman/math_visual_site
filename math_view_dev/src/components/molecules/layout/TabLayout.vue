<template>
    <div class="tab-layout">
        <div class="tab-headers">
            <div
                    :class="{
                        'tab-header': true,
                        'selected': active_tab === header
                    }"
                    v-for="(header, index) in headers"
                    :key="header"
                    @click="active_tab = header"
                    :style="{width: 100 / headers.length + '%'}"
            >
                <slot :name="'header_' + index"></slot>
            </div>
        </div>
        <scroll-area class="tab-contents">
            <div
                    class="tab-content"
                    :class="{'active-tab': active_tab === header}"
                    v-for="(header, index) in headers"
                    :key="header + '_content'"
            >
                <slot :name="'content_' + index"></slot>
            </div>
        </scroll-area>
    </div>
</template>

<script>
    import ScrollArea from "../../atoms/area/ScrollArea";

    export default {
        name: "TabLayout",
        components: {'scroll-area': ScrollArea},
        props: {
            headers: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                active_tab: false
            }
        },
        mounted() {
            if (this.headers.length > 0) {
                this.active_tab = this.headers[0];
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tab-layout {
        display: flex;
        flex-direction: column;

        .tab-headers {
            height: $tab-header-height;
            display: flex;
            flex-direction: row;

            .tab-header {
                display: flex;
                justify-content: center;
                padding: 0 $space-small;
                border: $space-small solid rgba($theme-color-accent-primary, 0.5);
                border-bottom-color: rgba($theme-color-accent-primary, 1);
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }

            .tab-header.selected {
                border-color: rgba($theme-color-accent-primary, 1);
                border-bottom: none;
            }
        }

        .tab-contents {
            flex: 1;
            margin-top: $space-medium;
            padding-right: $space-medium;

            .tab-content {
                display: none;
                height: 0;
            }

            .tab-content.active-tab{
                display: block;
            }
        }
    }
</style>