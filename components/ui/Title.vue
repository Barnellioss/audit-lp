<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import type { CSSProperties } from 'vue';

const props = defineProps<{
  textAlign?: string;
  margin?: string;
  fontSize?: string;
  lineHeight?: string;
  maxWidth?: string; // Add maxWidth as a prop
  fontWeight?: string; 
}>();

const style = computed<CSSProperties>(() => ({
  textAlign: props.textAlign || undefined,
  margin: props.margin || undefined,
  fontSize : props.fontSize,
  lineHeight: props.lineHeight,
  fontWeight: props.fontWeight,
  maxWidth: props.maxWidth || undefined, // Apply maxWidth to the style
}));
</script>

<template>
    <h2 class="font-bold title"  :style="style">
        <slot></slot>
    </h2>
</template>

<style scoped>
.title {
    color: #080809;
}

@media screen and (max-width: 1200px) {
    .title {
        font-size: 2.5rem;
        line-height: 60px;
    }
}

@media screen and (max-width: 480px) {
    .title {
        font-size: 2rem !important;
        line-height: 48px !important;
        text-align: center;
    }
}
</style>