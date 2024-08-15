<script lang="ts" setup>
import { BANNER_DATA } from '../../data/menu.data';


</script>

<template>
    
    <div :style="{
        background: `linear-gradient(${BANNER_DATA.degrees}deg, ${BANNER_DATA.colors[0]} ${BANNER_DATA.positions[0]}%, ${BANNER_DATA.colors[1]} ${BANNER_DATA.positions[1]}%)`,   
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'  
    }"
    class="xl:max-w-lg lg:max-w-4xl"
    >
        <slot></slot>
    </div>
</template>

<style scoped>
    
</style>
