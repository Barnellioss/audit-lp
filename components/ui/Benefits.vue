<template>
    <div :style="{marginTop: marginTop}">
      <ul>
        <li v-for="(item, index) in benefits" :key="index" class="text-black font-semibold mb-6 benefit-item">
          <Icon :name="item.icon" class="mr-3 icon" />
          {{ item.title }}
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { defineProps } from 'vue';
    import type { Ibenefit } from '~/data/benefits';
  
  const props = defineProps<{
    benefits: Ibenefit[];
    marginTop: string;
  }>();
  </script>
  
  <style scoped>
  /* Add your styles here if needed */
  .benefit-item {
    /* Example styles */
    display: flex;
    align-items: center;
  }

  .icon{
    background: #6BBC13;
  }

  
  </style>  