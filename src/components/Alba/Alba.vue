<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import ContattaciOra from '../ContattaciOra.vue'
import DomandeFrequenti from '../DomandeFrequenti.vue'
import Footer from '../Homepage/Footer.vue'

// assets apertura
import albaorizzontale from '../../assets/alba/albaorizzontale.png'
import cerchio from '../../assets/alba/cerchio.png'
import persone from '../../assets/alba/persone.png'

// assets rettangolo (nessuno)

onMounted(() => {
  gsap.set('.alba-rettangolo', { opacity: 0, x: 200 })
  gsap.to('.alba-rettangolo', {
    opacity: 1,
    x: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.alba-rettangolo',
      start: 'top 90%',
      end: 'top 65%',
      scrub: 1,
    }
  })

  gsap.set('.alba-rettangolo-giallo', { opacity: 0, x: -200 })
  gsap.to('.alba-rettangolo-giallo', {
    opacity: 1,
    x: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.alba-rettangolo-giallo',
      start: 'top 90%',
      end: 'top 65%',
      scrub: 1,
    }
  })

  gsap.set('.alba-foto-dx', { opacity: 0, x: 200 })
  gsap.to('.alba-foto-dx', {
    opacity: 1,
    x: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.alba-foto-dx',
      start: 'top 90%',
      end: 'top 65%',
      scrub: 1,
    }
  })
})

// assets testo (nessuno)

// assets stilevolo
import peperoncino from '../../assets/alba/peperoncino.png'
import bustina from '../../assets/alba/bustina.png'
import manocorna from '../../assets/alba/manocorna.png'

// assets foto orizzontale
import foreveryoung from '../../assets/alba/foreveryoung.png'

// assets finale
import foto1 from '../../assets/alba/vecchifesta.png'
import foto2 from '../../assets/alba/f57e201c-7236-4342-82a8-25e752f173ea.png'
import foto3 from '../../assets/alba/foreveryoung.png'
import faccia2 from '../../assets/alba/faccia2.png'
import faccia5 from '../../assets/alba/faccia5.png'
import logogiallo from '../../assets/logocolorato/logogiallo.png'

// accordion
const voci = [
  { titolo: 'Cosa è incluso', testo: 'Volo in mongolfiera della durata di 60 minuti, brindisi di benvenuto a bordo, cestino con colazione al sacco preparata per l\'occasione, foto ricordo del volo e certificato ufficiale di volo rilasciato dall\'equipaggio. La nostra crew giovane e impreparata a gestire i vostri aneddoti sarà presente per tutta la durata dell\'esperienza.' },
  { titolo: 'Cosa non è incluso', testo: 'Trasferimento da/per il punto di decollo, assicurazione personale, eventuali danni causati da eccessivo entusiasmo.' },
  { titolo: 'Info pratiche', testo: 'Il volo si svolge all\'alba, ritrovo un\'ora prima del decollo. Abbigliamento consigliato: strati, scarpe comode, spirito d\'avventura. Età minima 60 anni.' },
  { titolo: 'Dicono di noi', testo: '"Lassù mi sono sentita di nuovo una ragazzina. Non so cosa mettono nel cestino del pic-nic ma voglio la ricetta." — Maria, 74 anni' },
]
const aperto = ref(null)
function toggle(i) { aperto.value = aperto.value === i ? null : i }
</script>

<template>

  <!-- ── APERTURA ── -->
  <section class="relative w-full h-screen">
    <img :src="albaorizzontale" alt="" class="absolute inset-0 w-full h-full object-cover" />
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="relative flex items-center justify-center w-[500px] h-[300px]">
        <img :src="cerchio" alt="" class="absolute inset-0 w-full h-full object-fill" />
        <p class="relative font-grande text-[96px] leading-none text-center text-white">VOLO<br />ALL'ALBA</p>
      </div>
    </div>
    <div class="absolute bottom-10 left-10">
      <div class="flex items-center gap-4 bg-[#FFDD32] rounded-full px-8 py-4">
        <img :src="persone" alt="" class="w-[50px] h-auto" />
        <span class="font-testo text-[28px]">Viaggio aperto per <strong>60-99</strong></span>
      </div>
    </div>
  </section>

  <!-- ── RETTANGOLO PREZZO ── -->
  <div class="alba-rettangolo flex justify-end px-16 -mt-[300px] relative z-10">
    <div class="relative flex flex-col rounded-[32px] border-2 border-black overflow-hidden w-[320px] bg-[#FFFCE0]">
      <div class="flex flex-col items-center gap-3 px-6 py-12">
        <span class="font-testo text-[16px] border border-black rounded-full px-4 py-1">polizza annullamento</span>
        <router-link to="/date-viaggi" class="bg-[#FFDD32] rounded-[16px] px-8 py-3 font-fuck text-[64px] w-full text-center border-2 border-black block">scopri le date</router-link>
        <p class="font-grande text-[32px] leading-none">190 €</p>
        <p class="font-testo text-[16px] -mt-4">paga a rate senza interessi</p>
        <p class="font-grande text-[32px] leading-none">60min</p>
      </div>
      <div class="bg-[#FFDD32] py-1 text-center border-t-2 border-black">
        <span class="font-fuck text-[80px] leading-none">RELAX</span>
      </div>
    </div>
  </div>

  <!-- ── TESTO ── -->
  <section class="px-16 py-10 max-w-[1100px] -mt-[150px]">
    <h2 class="font-grande text-[117px] leading-tight mb-8">IL VOLO IN BREVE</h2>
    <p class="font-testo text-[24px] leading-relaxed">
      Si riparte all'alba, quando il mondo dorme e le articolazioni scricchiolano come vinili usurati.
      Saliremo sulle nostre mongolfiere con lo spirito di chi ha già vissuto tutto… e ha deciso di rifarlo dall'alto.
      Il sole sorgerà lento, noi pure, tra nuvole, brindisi e ricordi che tornano più lucidi del caffè.
      Sorvoleremo campagne silenziose, galli confusi e sogni rimasti in sospeso per decenni.
      Lassù non contano età, orari o buonsenso: contano solo il vento, le risate e quella sensazione inconfondibile di stare facendo qualcosa che "non è più per la nostra età".
      Atterreremo con storie improbabili, foto mosse e l'orgoglio di chi può dire:
      "Ho visto l'alba da una mongolfiera. E sì, l'ho fatto alla mia età".
      Un volo all'alba per vecchietti leggermente incoscienti e decisamente vivi.
    </p>
  </section>

  <!-- ── STILEVOLO ── -->
  <section class="flex items-center justify-center gap-8 px-16 py-10">
    <div class="flex flex-col items-center justify-center gap-2 border-4 border-[#FFDD32] rounded-[32px] px-6 py-4 w-[280px] h-[280px]">
      <img :src="peperoncino" alt="" class="w-[100px] h-[110px] object-contain" />
      <p class="font-fuck text-[64px]">SESSO</p>
      <div class="flex gap-2">
        <span class="w-[32px] h-[12px] rounded-full bg-[#ff0000]"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-2 border-4 border-[#FFDD32] rounded-[32px] px-6 py-4 w-[280px] h-[280px]">
      <img :src="bustina" alt="" class="w-[100px] h-[110px] object-contain" />
      <p class="font-fuck text-[64px]">DROGA</p>
      <div class="flex gap-2">
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-2 border-4 border-[#FFDD32] rounded-[32px] px-6 py-4 w-[280px] h-[280px]">
      <img :src="manocorna" alt="" class="w-[100px] h-[110px] object-contain" />
      <p class="font-fuck text-[64px]">N ROOL</p>
      <div class="flex gap-2">
        <span class="w-[32px] h-[12px] rounded-full bg-[#ff0000]"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
      </div>
    </div>
  </section>

  <!-- ── FOTO ORIZZONTALE ── -->
  <section class="flex items-end justify-center px-16 py-10 gap-0">
    <div class="alba-rettangolo-giallo bg-[#FFDD32] rounded-[32px] flex flex-col items-center justify-center px-10 py-12 shrink-0 w-[360px] mb-20">
      <p class="font-fuck text-[96px] leading-tight text-center">Volo ALBA</p>
      <p class="font-testo text-[24px] leading-tight mt-4 text-center">Vola<br />nell'esperienza</p>
    </div>
    <div class="w-[600px] shrink-0 -ml-1">
      <img :src="foreveryoung" alt="" class="alba-foto-dx w-full h-auto rounded-[32px] object-cover" />
    </div>
  </section>

  <!-- ── ACCORDION ── -->
  <section class="flex flex-col gap-4 px-16 py-10">
    <div v-for="(voce, i) in voci" :key="i"
      class="bg-[#FFDD32] rounded-[32px] overflow-hidden cursor-pointer"
      @click="toggle(i)"
    >
      <div class="flex items-center justify-between px-10 py-6">
        <span class="font-grande text-[72px] leading-none">{{ voce.titolo }}</span>
        <span class="font-grande text-[52px] leading-none" :class="aperto === i ? 'text-[#ff0000]' : 'text-[#3DD8FC]'">
          {{ aperto === i ? '×' : '+' }}
        </span>
      </div>
      <div v-if="aperto === i" class="px-10 pb-8">
        <p class="font-testo text-[24px] leading-relaxed">{{ voce.testo }}</p>
      </div>
    </div>
  </section>

  <!-- ── CTA + DOMANDE ── -->
  <ContattaciOra />
  <DomandeFrequenti />

  <!-- ── FINALE ── -->
  <section class="flex flex-col px-8 py-10 gap-8">
    <h2 class="font-grande text-[96px] leading-tight text-center uppercase">Ecco un assaggio dei<br />nostri voli</h2>
    <div class="flex gap-2 w-full">
      <img :src="foto1" alt="" class="flex-1 h-[400px] object-cover" />
      <img :src="foto2" alt="" class="flex-1 h-[400px] object-cover" />
      <img :src="foto3" alt="" class="flex-1 h-[400px] object-cover" />
    </div>
    <div class="flex items-center justify-between px-8">
      <img :src="faccia2" alt="" class="w-[200px] h-auto" />
      <img :src="logogiallo" alt="Nadamás" class="w-[200px] h-auto" />
      <img :src="faccia5" alt="" class="w-[200px] h-auto" />
    </div>
  </section>

  <!-- ── FOOTER ── -->
  <Footer />

</template>
