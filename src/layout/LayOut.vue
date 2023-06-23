<template>
    <div>
        <header>
            <v-header />
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <v-footer />
        </footer>
    </div>
</template>
<script>
import header from '../components/layouts/header.vue';
import footer from '../components/layouts/footer.vue';
export default {
    components: {
        'v-header': header,
        'v-footer': footer
    }
}
</script>
<style></style>