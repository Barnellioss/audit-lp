<template>
  <div class="logo-list flex flex-col my-24 mx-auto xl:max-w-1230 lg:max-w-4xl md:max-w-3xl max-w-md"
    style="padding: 0 15px;">
    <div v-for="(item, index) in roadmap" :key="index"
      class="roadmap-item text-black flex flex-row mb-10 max-w-full lg:max-w-half"
      :style="{ alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end' }"
      :class="index != (roadmap.length - 1) && (index % 2 === 0 ? 'roadmap-item-left' : 'roadmap-item-right')">
      <NuxtImg :src="item.step" alt="step" width="50px" style="min-width: 50px;" />
      <div class="ml-10">
        <h4 class="font-black mb-2" style="font-size: 1.5rem; line-height: 30px;">
          {{ item.title }}
        </h4>
        <p v-html="item.text" style="font-size: 1rem; max-width: 400px;"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { roadmap, type Iroadmap } from '~/data/roadmap';

const props = defineProps<{
  roadmap: Iroadmap[];
}>();

console.log(roadmap.length)
</script>

<style scoped>
.roadmap-item {
  position: relative;
}

.roadmap-item-right::before,
.roadmap-item-left::after {
  position: absolute;
  content: "";
  width: 80px;
  height: 80px;
  background-size: contain;
  background-repeat: no-repeat;
}

.roadmap-item-left::after {
  left: 100%;
  top: 100%;
  transform: translateY(-50%);
  background-image: url("arrow-right.svg");
}

.roadmap-item-right::before {
  right: 102%;
  top: 100%;
  transform: translateY(-50%);
  background-image: url("arrow-left.svg");
}

@media screen and (max-width: 768px) {

  .roadmap-item-right::before,
  .roadmap-item-left::after {
    display: none;
  }
}
</style>