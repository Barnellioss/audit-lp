<template>
    <button
        class="btn__styled bg-buttonBg py-0 px-3.5 hover:scale-102 transition-transform duration-300"
        :style="{ width, fontSize, lineHeight, marginTop }"
        @click="handleClick"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    width?: string;
    fontSize?: string;
    lineHeight?: string;
    marginTop?: string;
    handler?: (flag: boolean) => void; // Function to handle button clicks
}>();


const handleClick = (event: MouseEvent) => {
    if (props.handler) {
        props.handler(true);
    }
};
</script>

<style scoped>
.btn__styled {
    color: #fff;
    font-weight: 900;
    border-radius: 0.5rem;
}
</style>
