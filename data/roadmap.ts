export interface Iroadmap {
	step: string;
	title: string;
	text: string;
}


export const roadmap = [
    {
     step: "/1.svg",   
     title: "Ciele auditu",
     text: `Určíme si <span class="font-bold">spoločné ciele</span>, nastavíme očakávania a definujeme <span class="font-bold">cieľovú skupinu a jej potreby.</span>`
    },
    {
        step: "/2.svg",   
        title: "Zbieranie dát",
        text: `Zvolíme vhodné metodiky a nástroje na <span class="font-bold">sledovanie správania používateľov a zbieranie dát.</span>`
       },
       {
        step: "/3.svg",   
        title: "Vyhodnotenie",
        text: `<span class="font-bold">Vyhodnotíme nazbierané dáta</span>, zosumarizujeme všetky naše zistenia a <span class="font-bold">navrhneme riešenia.</span>`
       },
       {
        step: "/4.svg",   
        title: "Výsledky auditu",
        text: `<span class="font-bold">Osobná prezentácia výsledkov a navrhnutých riešení</span> s podrobnou dokumentáciou.`
       }

]