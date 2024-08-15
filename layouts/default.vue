<script lang="ts" setup>
import { benefits, benefits2 } from '~/data/benefits';
import { feedbacks } from '~/data/feedback';
import { logos } from '~/data/logos';
import { roadmap } from '~/data/roadmap';
import { usePopupStore } from '~/store/popupStore';

const popupStore = usePopupStore();

const popupHandler = (flag: boolean) => {
    popupStore.set(flag);
}
//
</script>

<template>

    <section style="min-height: 100vh; overflow-x: hidden;">
        <LayoutBanner>
            <LayoutHeader />
        </LayoutBanner>

        <LayoutSeparatedSection>
            <template #left>
                <UiTitle fontSize="3rem" lineHeight="4rem">
                    Rýchle <span class="border__pink">výsledky</span> pomocou UX auditu.
                </UiTitle>
                <UiText class="mb-16 mt-8">
                    UX auditom vášho riešenia lepšie pochopíte, ako vaši zákazníci používajú váš produkt, <span
                        class="font-black">zvýšite ich
                        spokojnosť
                        a hlavne vaše zisky.</span>
                </UiText>
                <UiText class="my-12">
                    Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu <span class="font-black">pomocou UX
                        auditu.</span>
                </UiText>
            </template>

            <template #right>
                <div class="sm:block flex flex-col items-center">
                    <UiLogolist :logos="logos" />
                    <UiBenefits :benefits="benefits" marginTop="64px" />
                    <UiButton width="90%" fontSize="20px" lineHeight="72px" marginTop="55px" :handler="popupHandler">
                        Mám záujem o UX audit
                    </UiButton>
                </div>
            </template>
        </LayoutSeparatedSection>

        <LayoutSeparatedSection class="lg:my-48 my-20">
            <template #left>
                <UiFeedback :feedback="feedbacks[0]" />
            </template>
            <template #right>
                <UiFeedback :feedback="feedbacks[1]" />
            </template>
        </LayoutSeparatedSection>

        <div class="xl:max-w-1230 lg:max-w-4xl md:max-w-3xl max-w-md" style="padding: 0 15px; margin: 30px auto;">
            <UiTitle textAlign="center" margin="auto" maxWidth="600px" fontSize="3rem" lineHeight="4rem">
                Rýchla a jednoduchá cesta k <span class="border__pink">výsledkom</span>.
            </UiTitle>
        </div>
        <UiRoadmap :roadmap="roadmap" />
        <LayoutSeparatedSection>
            <template #left>
                <div class="sm:block flex flex-col items-center">

                    <UiTitle fontSize="3rem" lineHeight="4rem">
                        Zameriame sa na to <span class="border__pink">najdôležitejšie.</span>
                    </UiTitle>
                    <UiText class="mb-16 mt-8" style="max-width: 75%">
                        Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu <span class="font-black">pomocou UX
                            auditu.</span>
                    </UiText>
                    <UiButton class="sm:w-4/5 w-5/6" fontSize="20px" lineHeight="72px" :handler="popupHandler">
                        Mám záujem o UX audit
                    </UiButton>
                </div>
            </template>

            <template #right>
                <UiBenefits :benefits="benefits2" marginTop="145px" />
            </template>
        </LayoutSeparatedSection>

        <UiPopup v-if="popupStore.show" />

        <LayoutBanner class="mt-48">
            <LayoutFooter />
        </LayoutBanner>
    </section>
</template>

<style scoped>
.border__pink {
    position: relative;
    z-index: 2;
    padding: 0px;
    background-color: white;
    border: 1px solid transparent;
    display: inline-block;
}

.border__pink::before {
    position: absolute;
    width: 100%;
    height: 14px;
    z-index: -1;
    bottom: 0px;
    left: 0;
    background: #FCD6DE;
    content: "";
}
</style>