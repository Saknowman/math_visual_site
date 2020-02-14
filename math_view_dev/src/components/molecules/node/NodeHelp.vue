<template>
    <g class="node-help"
       :class="{'is-visible': is_visible}"
       @click="close_help"
    >
        <base-node-card
                :title="help_title"
                :pos_x="pos_x - my_content_width / 2"
                :pos_y="pos_y - my_content_height / 2"
                :content_height="my_content_height"
                :content_width="my_content_width"
                node_type="help"
                :help="null"
        >
            <text v-for="(formula_line, index) in help_formula"
                  :key="index"
                  :x="side_padding * 2"
                  :y="formula_height * index + formula_height / 2"
                  :font-size="formula_height">
                {{ formula_line }}
            </text>
        </base-node-card>
    </g>
</template>

<script>
    import BaseNodeCard from "./BaseNodeCard";

    export default {
        name: "NodeHelp",
        mixins: [BaseNodeCard],
        components: {
            'base-node-card': BaseNodeCard
        },
        computed: {
            my_content_height: function () {
                if (!this.$store.state.node_card.node_help_content)
                    return 0;
                return (this.$store.state.node_card.node_help_content.formula.length + 2) * this.$store.getters.node_card_help_formula_height;
            },
            my_content_width: function () {
                if (!this.$store.state.node_card.node_help_content)
                    return 0;
                let formula_text_length = 0;
                Object.values(this.$store.state.node_card.node_help_content.formula).forEach(formula_text => {
                    formula_text_length = formula_text_length < formula_text.length ? formula_text.length : formula_text_length;
                })
                formula_text_length *= 0.8;
                return this.calc_text_width(formula_text_length, this.$store.getters.node_card_help_formula_height)
            },
            is_visible: function () {
                return this.$store.state.node_card.is_shown_node_help;
            },
            help_title: function () {
                if (!this.$store.state.node_card.node_help_content)
                    return '';
                return this.$store.state.node_card.node_help_content.title;
            },
            help_formula: function () {
                if (!this.$store.state.node_card.node_help_content)
                    return [];
                return this.$store.state.node_card.node_help_content.formula;
            },
            formula_height: function () {
                return this.$store.getters.node_card_help_formula_height;
            },
        },
        data() {
            return {
                help_content: this.$store.state.node_card.node_help_content
            }
        },
        mounted() {
            if (!this.help_content) {
                this.close_help();
            }
        },
        methods: {
            close_help() {
                this.$store.commit('set_node_card_is_show_help', false);
            }
        }
    }
</script>

<style scoped>
    .node-help {
        visibility: hidden;
    }

    .is-visible {
        visibility: visible;
    }

</style>