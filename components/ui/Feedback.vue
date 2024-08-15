<script lang="ts" setup>
    import { defineProps } from 'vue';
    import type { Ifeedback } from '~/data/feedback';

    const props = defineProps<{
        feedback: Ifeedback
    }>();
</script>

<template>
    <div class="lg:mt-0 xl:mt-0 mt-24">
        <div class="comment text-black p-8">
            {{ feedback.text }} <span class="pink-text">čítať viac</span>
        </div>
        <div class="author flex flex-row lg:mt-10 mt-4 ml-2">
            <div>
                <NuxtImg :src="feedback.logo" width="4rem" class="logo"/>
            </div>

            <div class="ml-4">
                <h4 class="text-black font-black">{{ feedback.name }}</h4>
                <p class="text-black">{{ feedback.jobTitle }} <span class="pink-text">{{ feedback.web }}</span></p>
            </div>
        </div>
    </div>
</template>


<style>
.pink-text {
    color: #EE325C;
    font-weight: 700;
}

.comment{
    border: 1px solid #D6D8DD;
    font-weight: 400;
    font-size: 1.35rem;
    line-height: 2rem;
    position: relative;
}

.comment::before{
    content: '';
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/comas.svg');
    position: absolute;
    height: 43px;
    width: 46px;
    top: -25px;
    left: 30px;
}

.logo {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
}
</style>