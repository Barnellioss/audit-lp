import{_ as B}from"./DVNH70Fp.js";import{f as g,o as c,c as r,r as j,M as C,_ as v,N as M,a as e,b as o,w as d,d as i,t as f,H as n,A as X,O as F,P as N,K as z,i as $,Q as Z,R as U,S as H,T as A,g as O,L as J,p as K,e as G}from"./BCl_HUxi.js";import Q from"./CsEScCtY.js";const q=g({__name:"Button",props:{width:{},fontSize:{},lineHeight:{},marginTop:{},handler:{type:Function}},setup(l){const t=l,m=s=>{t.handler&&t.handler(!0)};return(s,p)=>(c(),r("button",{class:"btn__styled bg-buttonBg py-0 px-3.5 hover:scale-102 transition-transform duration-300",style:C({width:s.width,fontSize:s.fontSize,lineHeight:s.lineHeight,marginTop:s.marginTop}),onClick:m},[j(s.$slots,"default",{},void 0,!0)],4))}}),V=v(q,[["__scopeId","data-v-d2c6a3ad"]]),E=M("popupStore",{state:()=>({show:!1}),actions:{set(l){this.$patch({show:l})}}}),R={degrees:165,colors:["#3D2E80","#DC1969"],positions:[45,110]},Y={title:"Zvýšte svoje zisky optimalizáciou vášho eshopu."},I={title:"Máte otázky? Jednoducho sa spýtajte.",phone:"+421 (02) 555 65 726",email:"uxdesign@riesenia.com"},ee={class:"xl:max-w-1230 md:max-w-3xl sm:max-w-xl max-w-md",style:{padding:"0 15px",width:"100%",margin:"0 auto","min-height":"100vh",display:"flex","flex-direction":"column"}},te={class:"flex justify-between align-middle my-12"},ne={class:"title"},oe=g({__name:"Header",setup(l){const t=E(),m=s=>{t.set(s)};return(s,p)=>{const _=B,x=V;return c(),r("div",ee,[e("div",te,[o(_,{src:"/smallLogo.png",class:"logo-img"}),o(x,{lineHeight:"42px",fontSize:"14px",onClick:m},{default:d(()=>[i("Mám záujem o UX audit")]),_:1})]),e("h1",ne,f(n(Y).title),1)])}}}),se=v(oe,[["__scopeId","data-v-91ce701f"]]),le=g({__name:"Banner",setup(l){return(t,m)=>(c(),r("div",{style:C({background:`linear-gradient(${n(R).degrees}deg, ${n(R).colors[0]} ${n(R).positions[0]}%, ${n(R).colors[1]} ${n(R).positions[1]}%)`,minHeight:"100vh",minWidth:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}),class:"xl:max-w-lg lg:max-w-4xl"},[j(t.$slots,"default")],4))}}),ae=g({__name:"Title",props:{textAlign:{},margin:{},fontSize:{},lineHeight:{},maxWidth:{},fontWeight:{}},setup(l){const t=l,m=X(()=>({textAlign:t.textAlign||void 0,margin:t.margin||void 0,fontSize:t.fontSize,lineHeight:t.lineHeight,fontWeight:t.fontWeight,maxWidth:t.maxWidth||void 0}));return(s,p)=>(c(),r("h2",{class:"font-bold title",style:C(m.value)},[j(s.$slots,"default",{},void 0,!0)],4))}}),P=v(ae,[["__scopeId","data-v-9a94a790"]]),ie={},ce={class:"text-style py-4"};function re(l,t){return c(),r("p",ce,[j(l.$slots,"default")])}const de=v(ie,[["render",re]]),me={class:"logo-list"},pe=["src","alt"],_e=g({__name:"Logolist",props:{logos:{}},setup(l){return(t,m)=>(c(),r("div",me,[(c(!0),r(F,null,N(t.logos,(s,p)=>(c(),r("div",{key:p,class:"logo-item"},[e("img",{src:s.src,alt:s.alt},null,8,pe)]))),128))]))}}),ue=v(_e,[["__scopeId","data-v-cafe4980"]]),fe=g({__name:"Benefits",props:{benefits:{},marginTop:{}},setup(l){return(t,m)=>{const s=Q;return c(),r("div",{style:C({marginTop:t.marginTop})},[e("ul",null,[(c(!0),r(F,null,N(t.benefits,(p,_)=>(c(),r("li",{key:_,class:"text-black font-semibold mb-6 benefit-item"},[o(s,{name:p.icon,class:"mr-3 icon"},null,8,["name"]),i(" "+f(p.title),1)]))),128))])],4)}}}),he=v(fe,[["__scopeId","data-v-38a0ec81"]]),ge={},xe={class:"bg-white"},ve={class:"flex flex-col lg:flex-row xl:my-36 my-20 mx-auto xl:max-w-1230 lg:max-w-4xl md:max-w-3xl max-w-md",style:{padding:"0 15px",width:"100%"}},ke={class:"w-full lg:w-1/2 xl:pr-8"},be={class:"w-full lg:w-1/2 xl:pl-8 lg:pl-6"};function ye(l,t){return c(),r("div",xe,[e("div",ve,[e("div",ke,[j(l.$slots,"left")]),e("div",be,[j(l.$slots,"right")])])])}const we=v(ge,[["render",ye]]),$e={class:"lg:mt-0 xl:mt-0 mt-24"},ze={class:"comment text-black p-8"},je=e("span",{class:"pink-text"},"čítať viac",-1),Se={class:"author flex flex-row lg:mt-10 mt-4 ml-2"},Te={class:"ml-4"},Ue={class:"text-black font-black"},He={class:"text-black"},Ae={class:"pink-text"},Re=g({__name:"Feedback",props:{feedback:{}},setup(l){return(t,m)=>{const s=B;return c(),r("div",$e,[e("div",ze,[i(f(t.feedback.text)+" ",1),je]),e("div",Se,[e("div",null,[o(s,{src:t.feedback.logo,width:"4rem",class:"logo"},null,8,["src"])]),e("div",Te,[e("h4",Ue,f(t.feedback.name),1),e("p",He,[i(f(t.feedback.jobTitle)+" ",1),e("span",Ae,f(t.feedback.web),1)])])])])}}}),Ie={class:"logo-list flex flex-col my-24 mx-auto xl:max-w-1230 lg:max-w-4xl md:max-w-3xl max-w-md",style:{padding:"0 15px"}},Ce={class:"ml-10"},We={class:"font-black mb-2",style:{"font-size":"1.5rem","line-height":"30px"}},Be=["innerHTML"],De=g({__name:"Roadmap",props:{roadmap:{}},setup(l){return(t,m)=>{const s=B;return c(),r("div",Ie,[(c(!0),r(F,null,N(t.roadmap,(p,_)=>(c(),r("div",{key:_,class:z(["roadmap-item text-black flex flex-row mb-10 max-w-full lg:max-w-half",_!=t.roadmap.length-1&&_%2===0?"roadmap-item-left":"roadmap-item-right"]),style:C({alignSelf:_%2===0?"flex-start":"flex-end"})},[o(s,{src:p.step,alt:"step",width:"50px",style:{"min-width":"50px"}},null,8,["src"]),e("div",Ce,[e("h4",We,f(p.title),1),e("p",{innerHTML:p.text,style:{"font-size":"1rem","max-width":"400px"}},null,8,Be)])],6))),128))])}}}),Fe=v(De,[["__scopeId","data-v-88f56f36"]]),Ne={class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},Ve=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"},null,-1),Ee={class:"fixed inset-0 z-10 w-screen overflow-auto"},Le={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},Pe={class:"relative transform overflow-y-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl"},Me={class:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},Xe={key:0,class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left relative"},Ze={key:1,class:"sm:flex sm:items-start"},Oe={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left relative"},Je={class:"flex flex-col"},Ke=e("label",{for:"name",class:"block mt-3 font-black leading-6 text-gray-900 text-left pb-3"},[i("Meno: "),e("span",{class:"pink-text"},"*")],-1),Ge={class:"flex sm:flex-row flex-col"},Qe={class:"sm:w-1/2 w-full pr-2 flex flex-col"},qe=e("label",{for:"email",class:"block font-black mt-3 leading-6 text-gray-900 text-left pb-3"},[i("Email: "),e("span",{class:"pink-text"},"*")],-1),Ye={class:"sm:w-1/2 w-full pl-2 flex flex-col"},et=e("label",{for:"tel",class:"block mt-3 font-black leading-6 text-gray-900 text-left pb-3"},[i("Tel. čislo: "),e("span",{class:"pink-text"},"*")],-1),tt={class:"flex flex-col"},nt=e("label",{for:"web",class:"block mt-3 font-black leading-6 text-gray-900 text-left pb-3"},[i("Webstránka: "),e("span",{class:"pink-text"},"*")],-1),ot={class:"flex flex-col"},st=e("label",{for:"price",class:"block mt-3 font-black leading-6 text-gray-900 text-left pb-3"},[i("Poznámka: "),e("span",{class:"pink-text"},"*")],-1),lt={class:"flex items-center justify-center gap-5 mt-8"},at=g({__name:"Popup",setup(l){const t=E(),m=()=>{t.set(!1)};let s=!1;const p=$(""),_=$(""),x=$(""),k=$(""),b=$(""),a=$({}),W=()=>{a.value={},p.value.trim()||(a.value.name="Meno je povinné.");const y=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;_.value.trim()?y.test(_.value)||(a.value.email="Email má nesprávny formát."):a.value.email="Email je povinný.";const u=/^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;x.value.trim()?u.test(x.value)||(a.value.phone="Tel. číslo má nesprávny formát."):a.value.phone="Tel. číslo je povinné.";const w=/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;return k.value.trim()?w.test(k.value.trim())||(a.value.web="Neplatná webová adresa."):a.value.web="Webstránka je povinná.",b.value.trim()||(a.value.info="Poznámka je povinná."),Object.keys(a.value).length===0},T=()=>{W()?(s=!0,console.log("Form submitted successfully.")):console.log("Form validation failed:",a.value)};return(y,u)=>{const w=P,D=V;return c(),r("div",Ne,[Ve,e("div",Ee,[e("div",Le,[e("div",Pe,[e("div",Me,[n(s)?(c(),r("div",Xe,[e("button",{class:"close-btn",onClick:m}," x "),o(w,{fontSize:"30px",lineHeight:"44px",fontWeight:"900",maxWidth:"75%",margin:"0 auto 15px"},{default:d(()=>[i("Formulár je uložený ")]),_:1})])):(c(),r("div",Ze,[e("div",Oe,[e("button",{class:"close-btn",onClick:m}," x "),o(w,{fontSize:"30px",lineHeight:"44px",fontWeight:"900",maxWidth:"75%",margin:"0 auto 15px"},{default:d(()=>[i("Jednoducho nám napíšte a my sa vám ozveme. ")]),_:1}),e("form",{onSubmit:Z(T,["prevent"])},[e("div",Je,[Ke,U(e("input",{placeholder:"",type:"name",class:"block w-full py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6","onUpdate:modelValue":u[0]||(u[0]=h=>A(p)?p.value=h:null)},null,512),[[H,n(p)]]),e("span",{class:z([n(a).info?"text-red-500":"text-white","mr-auto"])},f(n(a).name),3)]),e("div",Ge,[e("div",Qe,[qe,U(e("input",{placeholder:"",type:"email",class:"block w-full py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6","onUpdate:modelValue":u[1]||(u[1]=h=>A(_)?_.value=h:null)},null,512),[[H,n(_)]]),e("span",{class:z([n(a).info?"text-red-500":"text-white","mr-auto"])},f(n(a).email),3)]),e("div",Ye,[et,U(e("input",{placeholder:"",type:"tel",class:"block w-full py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6","onUpdate:modelValue":u[2]||(u[2]=h=>A(x)?x.value=h:null)},null,512),[[H,n(x)]]),e("span",{class:z([n(a).info?"text-red-500":"text-white","mr-auto"])},f(n(a).phone),3)])]),e("div",tt,[nt,U(e("input",{placeholder:"",type:"web",class:"block w-full py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6","onUpdate:modelValue":u[3]||(u[3]=h=>A(k)?k.value=h:null)},null,512),[[H,n(k)]]),e("span",{class:z([n(a).info?"text-red-500":"text-white","mr-auto"])},f(n(a).web),3)]),e("div",ot,[st,U(e("textarea",{placeholder:"Je niečo čo by ste sa nás chceli spýtat?",type:"name",class:"block w-full py-3 pl-3 pr-20 h-32 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6","onUpdate:modelValue":u[4]||(u[4]=h=>A(b)?b.value=h:null)},null,512),[[H,n(b)]]),e("span",{class:z([n(a).info?"text-red-500":"text-white","mr-auto"])},f(n(a).info),3)]),e("div",lt,[o(D,{type:"button",width:"100%",fontSize:"20px",lineHeight:"72px",onClick:T},{default:d(()=>[i(" Login ")]),_:1})])],32)])]))])])])])])}}}),it={class:"xl:max-w-1230 lg:max-w-4xl md:max-w-3xl max-w-md",style:{padding:"0 15px",width:"100%",margin:"0 auto","min-height":"60vh",display:"flex","flex-direction":"column","justify-content":"space-evenly","align-items":"center"}},ct={class:"title"},rt={class:"flex md:flex-row items-center justify-center flex-col"},dt={class:"font-bold mr-6",style:{"font-size":"1.875rem"}},mt=["href"],pt={class:"font-bold md:ml-6 ml-0",style:{"font-size":"1.875rem",color:"#EE325C"}},_t=["href"],ut={class:"flex flex-row items-center justify-center"},ft=g({__name:"Footer",setup(l){return(t,m)=>{const s=B;return c(),r("div",it,[e("h1",ct,f(n(I).title),1),e("ul",rt,[e("li",dt,[e("a",{href:`tel:${n(I).phone}`},f(n(I).phone),9,mt)]),e("li",pt,[e("a",{href:`mailto:${n(I).email}`},f(n(I).email),9,_t)])]),e("div",ut,[o(s,{src:"/bigLogo.svg",width:"275px"})])])}}}),ht=v(ft,[["__scopeId","data-v-6b6e527c"]]),gt=[{icon:"ant-design:check-circle-filled",title:"Odhalíme nedostatky na vašej stránke"},{icon:"ant-design:check-circle-filled",title:"Zvýšime konverzný pomer vašich stránok"},{icon:"ant-design:check-circle-filled",title:"Zvýšime výkon marketingových kampaní"},{icon:"ant-design:check-circle-filled",title:"Znížime vaše náklady na vývoj"},{icon:"ant-design:check-circle-filled",title:"Zvýšime návštevnosť vašich stránok"}],xt=[{icon:"ant-design:check-circle-filled",title:"Informačnú architektúru a štruktúru kategórií"},{icon:"ant-design:check-circle-filled",title:"Správanie návštevníkov na kľúčových stránkach"},{icon:"ant-design:check-circle-filled",title:"Rýchlosť a dostupnosť stránok, SEO nastavenia"},{icon:"ant-design:check-circle-filled",title:"Váš biznis a vašich zákazníkov"},{icon:"ant-design:check-circle-filled",title:"Ciele, ktoré chcete dosiahnuť"},{icon:"ant-design:check-circle-filled",title:"Webovú analytiku "}],L=[{text:"Pravidelné UX audity a postupné vylepšovanie nášho internetového obchodu je už niekoľko rokov súčasťou našej dlhodobej stratégie v predaji. UX tím v Riešeniach odvádza skvelú prácu, ktorú sprevádzajú viditeľné výsledky a spokojnosť našich zákazníkov. Okrem ich prístupu k nášmu biznisu … ",name:"Jozef Korman",jobTitle:"Konateľ",web:"SvetNápojov.sk",color:"#E1D18A",logo:"svetNapojov.svg"},{text:"S UX tímom Riešení úzko spolupracujeme už dlhé roky a sú dôležitým partnerom nášho biznisu. Vďaka ich know-how pre nás od samého začatku správne nastavili zdravý pomer prvotriedneho dizajnu a funkčnosti webu, ktorý následne vylepšovali pomocou relevantných analýz a dát. Aj ich zásluhou … ",name:"Richard Wohlstein",jobTitle:"Retail manager",web:"AlainDelon.sk",color:"#FF0D2B",logo:"alainDelon.svg"}],vt=[{src:"/googlePartner.png",alt:"Google Partner"},{src:"/adma_logo.png",alt:"Adma partner"}],kt=[{step:"/1.svg",title:"Ciele auditu",text:'Určíme si <span class="font-bold">spoločné ciele</span>, nastavíme očakávania a definujeme <span class="font-bold">cieľovú skupinu a jej potreby.</span>'},{step:"/2.svg",title:"Zbieranie dát",text:'Zvolíme vhodné metodiky a nástroje na <span class="font-bold">sledovanie správania používateľov a zbieranie dát.</span>'},{step:"/3.svg",title:"Vyhodnotenie",text:'<span class="font-bold">Vyhodnotíme nazbierané dáta</span>, zosumarizujeme všetky naše zistenia a <span class="font-bold">navrhneme riešenia.</span>'},{step:"/4.svg",title:"Výsledky auditu",text:'<span class="font-bold">Osobná prezentácia výsledkov a navrhnutých riešení</span> s podrobnou dokumentáciou.'}],S=l=>(K("data-v-264fbe06"),l=l(),G(),l),bt={style:{"min-height":"100vh","overflow-x":"hidden"}},yt=S(()=>e("span",{class:"border__pink"},"výsledky",-1)),wt=S(()=>e("span",{class:"font-black"},"zvýšite ich spokojnosť a hlavne vaše zisky.",-1)),$t=S(()=>e("span",{class:"font-black"},"pomocou UX auditu.",-1)),zt={class:"sm:block flex flex-col items-center"},jt={class:"xl:max-w-1230 lg:max-w-4xl md:max-w-3xl max-w-md",style:{padding:"0 15px",margin:"30px auto"}},St=S(()=>e("span",{class:"border__pink"},"výsledkom",-1)),Tt={class:"sm:block flex flex-col items-center"},Ut=S(()=>e("span",{class:"border__pink"},"najdôležitejšie.",-1)),Ht=S(()=>e("span",{class:"font-black"},"pomocou UX auditu.",-1)),At=g({__name:"default",setup(l){const t=E(),m=s=>{t.set(s)};return(s,p)=>{const _=se,x=le,k=P,b=de,a=ue,W=he,T=V,y=we,u=Re,w=Fe,D=at,h=ht;return c(),r("section",bt,[o(x,null,{default:d(()=>[o(_)]),_:1}),o(y,null,{left:d(()=>[o(k,{fontSize:"3rem",lineHeight:"4rem"},{default:d(()=>[i(" Rýchle "),yt,i(" pomocou UX auditu. ")]),_:1}),o(b,{class:"mb-16 mt-8"},{default:d(()=>[i(" UX auditom vášho riešenia lepšie pochopíte, ako vaši zákazníci používajú váš produkt, "),wt]),_:1}),o(b,{class:"my-12"},{default:d(()=>[i(" Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu "),$t]),_:1})]),right:d(()=>[e("div",zt,[o(a,{logos:n(vt)},null,8,["logos"]),o(W,{benefits:n(gt),marginTop:"64px"},null,8,["benefits"]),o(T,{width:"90%",fontSize:"20px",lineHeight:"72px",marginTop:"55px",handler:m},{default:d(()=>[i(" Mám záujem o UX audit ")]),_:1})])]),_:1}),o(y,{class:"lg:my-48 my-20"},{left:d(()=>[o(u,{feedback:n(L)[0]},null,8,["feedback"])]),right:d(()=>[o(u,{feedback:n(L)[1]},null,8,["feedback"])]),_:1}),e("div",jt,[o(k,{textAlign:"center",margin:"auto",maxWidth:"600px",fontSize:"3rem",lineHeight:"4rem"},{default:d(()=>[i(" Rýchla a jednoduchá cesta k "),St,i(". ")]),_:1})]),o(w,{roadmap:n(kt)},null,8,["roadmap"]),o(y,null,{left:d(()=>[e("div",Tt,[o(k,{fontSize:"3rem",lineHeight:"4rem"},{default:d(()=>[i(" Zameriame sa na to "),Ut]),_:1}),o(b,{class:"mb-16 mt-8",style:{"max-width":"75%"}},{default:d(()=>[i(" Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu "),Ht]),_:1}),o(T,{class:"sm:w-4/5 w-5/6",fontSize:"20px",lineHeight:"72px",handler:m},{default:d(()=>[i(" Mám záujem o UX audit ")]),_:1})])]),right:d(()=>[o(W,{benefits:n(xt),marginTop:"145px"},null,8,["benefits"])]),_:1}),n(t).show?(c(),O(D,{key:0})):J("",!0),o(x,{class:"mt-48"},{default:d(()=>[o(h)]),_:1})])}}}),Wt=v(At,[["__scopeId","data-v-264fbe06"]]);export{Wt as default};
