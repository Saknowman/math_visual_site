<template>
    <div :class="{
    'main-drop-down-menu': true,
    'is-toggled': is_toggle
    }">
        <simulation-link-list class="simulation-link-list"></simulation-link-list>
    </div>
</template>

<script>
    import SimulationLinkList from "./SimulationLinkList";

    export default {
        name: "MainDropDownMenu",
        components: {
            'simulation-link-list': SimulationLinkList
        },
        props: {
            is_toggle: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-drop-down-menu {
        background: $theme-color-main-primary;
        transition-duration: 1.0s;
        transform-origin: top left;
        transform: translateY(0) scaleY(0);
        z-index: 90;
    }

    .main-drop-down-menu.is-toggled {
        transform: translateY(0) scaleY(1);
    }
</style>