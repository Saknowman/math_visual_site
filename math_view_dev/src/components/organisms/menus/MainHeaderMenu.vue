<template>
    <header class="main-header">
        <div class="main-header-contents">
            <div class="left-header-menu">
                <a href="/" class="main-logo fas fa-snowman">
                    <span>Easy Math</span>
                </a>
            </div>
            <div class="right-header-menu">
                <i
                        class="page-link-menu fas fa-bars"
                        @click="toggle_drop_down_menu"
                ></i>
            </div>
        </div>

        <main-drop-down-menu
                :class="{
                'main-drop-down-menu':true,
                'toggled': is_toggle_drop_down_menu
                }"
                :is_toggle="is_toggle_drop_down_menu"></main-drop-down-menu>
    </header>
</template>

<script>
    import MainDropDownMenu from "./MainDropDownMenu";

    export default {
        name: "MainHeaderMenu",
        components: {
            'main-drop-down-menu': MainDropDownMenu
        },
        data() {
            return {
                is_toggle_drop_down_menu: false
            }
        },
        methods: {
            toggle_drop_down_menu() {
                this.is_toggle_drop_down_menu = !this.is_toggle_drop_down_menu
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-header {
        height: $header-height;
        .main-header-contents {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 $space-x-large;
            border-bottom: solid $space-medium rgba($theme-color-main-primary, 1);

            .fas {
                font-size: $header-height * 0.7;
                color: $theme-color-main-primary;
            }

            .main-logo {
                text-decoration: none;

                span {
                    font-weight: bolder;
                }
            }
        }

        .main-drop-down-menu {
            width: 100%;
            position: absolute;
        }
    }
</style>