export interface Ifeedback {
	text: string;
	name: string;
	jobTitle: string;
	web: string;
    color: string;
    logo: string;
}

export const feedbacks: Ifeedback[] = [
	{
		text: "Pravidelné UX audity a postupné vylepšovanie nášho internetového obchodu je už niekoľko rokov súčasťou našej dlhodobej stratégie v predaji. UX tím v Riešeniach odvádza skvelú prácu, ktorú sprevádzajú viditeľné výsledky a spokojnosť našich zákazníkov. Okrem ich prístupu k nášmu biznisu … ",
		name: "Jozef Korman",
		jobTitle: "Konateľ",
		web: "SvetNápojov.sk",
        color: "#E1D18A",
        logo: "svetNapojov.svg"
	},
	{
		text: "S UX tímom Riešení úzko spolupracujeme už dlhé roky a sú dôležitým partnerom nášho biznisu. Vďaka ich know-how pre nás od samého začatku správne nastavili zdravý pomer prvotriedneho dizajnu a funkčnosti webu, ktorý následne vylepšovali pomocou relevantných analýz a dát. Aj ich zásluhou … ",
		name: "Richard Wohlstein",
		jobTitle: "Retail manager",
		web: "AlainDelon.sk",
        color: '#FF0D2B',
        logo: 'alainDelon.svg'
	},
];
