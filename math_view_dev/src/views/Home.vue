<template>
  <div class="home">
    Welcome to Easy Math
    <simulation-link-list></simulation-link-list>
  </div>
</template>

<script>
import SimulationLinkList from "../components/organisms/menus/SimulationLinkList";

export default {
  name: 'home',
  components: {
    'simulation-link-list': SimulationLinkList
  }
}
</script>
