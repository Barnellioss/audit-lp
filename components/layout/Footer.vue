<script lang="ts" setup>
import { FOOTER_DATA } from '~/data/menu.data';




</script>

<template>
    <div class="xl:max-w-1230 lg:max-w-4xl md:max-w-3xl max-w-md"
        style="padding: 0 15px; width: 100%; margin: 0 auto; min-height: 60vh; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center">
        <h1 class="title "> {{ FOOTER_DATA.title }}</h1>
        <ul class="flex md:flex-row items-center justify-center flex-col">
            <li class="font-bold mr-6" style="font-size: 1.875rem;">
                <a :href="`tel:${FOOTER_DATA.phone}`">{{ FOOTER_DATA.phone }}</a>
            </li>
            <li class="font-bold md:ml-6 ml-0" style="font-size: 1.875rem; color: #EE325C">
                <a :href="`mailto:${FOOTER_DATA.email}`">{{ FOOTER_DATA.email }}</a>
            </li>
        </ul>
        <div class="flex flex-row items-center justify-center">
            <NuxtImg src="/bigLogo.svg" width="275px" />
        </div>
    </div>
</template>

<style scoped>
.title {
    color: #fff;
    font-size: 3rem;
    text-align: center;
    font-weight: 900;
    max-width: 700px;
    line-height: 80px;
}

@media screen and (max-width: 1200px) {
    .title {
        font-size: 2.5rem;
        line-height: 60px;
    }
}

@media screen and (max-width: 480px) {
    .title {
        font-size: 2rem;
        line-height: 48px;
    }
}
</style>