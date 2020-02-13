<template>
    <ul class="simulator-link-list">
        <li v-for="simulator_route in simulator_route_list" :key="simulator_route.name">
            <a :href="simulator_route.route.path">{{ simulator_route.name }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "SimulationLinkList",
        data() {
            return {
                simulator_route_list: []
            }
        },
        mounted() {
            this.$router.options.routes.forEach((route) => {
                if (!route.name.startsWith('simulator.')) return;
                let simulation_name = route.name.split('.')[1];
                simulation_name = simulation_name
                    .replace(/^.|_(.)/g, function (match) {
                        return match.toUpperCase();
                    }).replace(/_/g, ' ');

                this.simulator_route_list.push({
                    name: simulation_name,
                    route: route
                });
            });

            console.log(this.simulator_route_list);
        }
    }
</script>

<style lang="scss" scoped>
    .simulator-link-list {
        list-style: none;
        padding-left: 0;

        a {
            color: $theme-color-background;
            text-decoration: none;
        }
    }
</style>