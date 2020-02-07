<template>
    <div class="count">
        <h1>This is an count page</h1>
        {{ $store.state.count }}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="increment_api">++</button>
    </div>
</template>

<script>
    export default {
        name: "Count",
        methods: {
            increment() {
                this.$store.commit('increment')
            },
            decrement() {
                this.$store.commit('decrement')
            },
            increment_api() {
                this.$store.dispatch('increment')
            }
        }
    }
</script>

<style scoped>

</style>