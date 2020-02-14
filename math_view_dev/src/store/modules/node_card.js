export default {
    getters: {
        node_card_static_default_width: () => 40,
        node_card_title_height: () => 5,
        node_card_contents_side_padding:() => 1,
        node_card_contents_top_padding:() => 1,
        node_card_attribute_height: () => 3,
        node_card_attribute_each_space: () => 1,
        node_card_attribute_circle_radius: () => 1,
        node_card_attribute_types: () => {
            return {
                'int': {'color': '#00f'},
                'float': {'color': '#55f'},
                'vector2': {'color': '#0f0'}
            }
        }
    }
}