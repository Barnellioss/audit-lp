<template>
    <div class="logo-list">
        <div v-for="(logo, index) in logos" :key="index" class="logo-item">
            <img :src="logo.src" :alt="logo.alt" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import type { ILogo } from '~/data/logos';

const props = defineProps<{
    logos: ILogo[];
}>();
</script>

<style scoped>
.logo-list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.logo-item img {
    max-width: 185px;
    height: auto;
}
</style>