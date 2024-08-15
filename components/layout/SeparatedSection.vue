<script lang="ts" setup>

</script>

<template>
    <div class="bg-white ">
        <div class="flex flex-col lg:flex-row  xl:my-36 my-20 mx-auto xl:max-w-1230 lg:max-w-4xl md:max-w-3xl max-w-md" style="padding: 0 15px; width: 100%; ">
            <div class="w-full lg:w-1/2  xl:pr-8">
                <slot name="left"></slot>
            </div>
            <div class="w-full lg:w-1/2 xl:pl-8 lg:pl-6">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>