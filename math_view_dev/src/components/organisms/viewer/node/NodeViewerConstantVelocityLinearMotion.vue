<template>
    <div>
        <svg :viewBox="[0, 0, viewer_width, viewer_height].join(',')"
             style="background: #eee">
            <g>
                <node-card-in-out
                        v-for="node_config in node_config_list"
                        :key="node_config.id"
                        :title="node_config.title"
                        :pos_x="node_config.pos.x"
                        :pos_y="node_config.pos.y"
                        :in_attributes="node_config.in_attributes"
                        :out_attributes="node_config.out_attributes"
                ></node-card-in-out>
            </g>
        </svg>
    </div>
</template>

<script>
    import NodeCardInOut from "../../../molecules/node/NodeCardInOut";

    export default {
        name: "NodeViewerConstantVelocityLinearMotion",
        components: {
            'node-card-in-out': NodeCardInOut
        },
        data() {
            return {
                node_config_list:[
                    {
                        id: 0,
                        title: 'Circle',
                        pos: {x: 10, y: 20},
                        in_attributes: [],
                        out_attributes: [
                            {label: 'X', type: 'float'},
                            {label: 'Y', type: 'float'},
                        ]
                    },
                    {
                        id: 1,
                        title: 'Speed',
                        pos: {x: 10, y: 70},
                        in_attributes: [],
                        out_attributes: [
                            {label: 'value', type: 'int'},
                        ]
                    },
                ],
                viewer_width: this.$store.getters.layout_node_viewer_width * ((this.$store.getters.node_card_static_default_width * 6) / this.$store.getters.layout_node_viewer_width),
                viewer_height: this.$store.getters.layout_node_viewer_height * ((this.$store.getters.node_card_static_default_width * 6) / this.$store.getters.layout_node_viewer_width),
            }
        }
    }
</script>

<style scoped>

</style>