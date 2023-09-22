<template>
    <button id="baseButton">
        <slot />
    </button>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    type ButtonProps = {
        size?: number,
        color?: string
    }

    const props = withDefaults(defineProps<ButtonProps>(), {
        size: 16,
        color: "skyblue",
    });

    const fontSize = computed(() => `${props.size}px`);
</script>

<style scoped>
    #baseButton {
        padding: 1rem 2rem;
        cursor: pointer;
        border: none;
        background-color: v-bind(color);
        font-size: v-bind(fontSize);
    }
</style>