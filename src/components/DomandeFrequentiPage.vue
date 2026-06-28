<script setup>
import { useRouter } from 'vue-router'
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()

onMounted(async () => {
  await nextTick()
  gsap.utils.toArray('.faq-item').forEach((el) => {
    gsap.set(el, { opacity: 0, y: 60 })
    gsap.to(el, {
      opacity: 1,
      y: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        end: 'top 50%',
        scrub: 1,
      }
    })
  })
})
</script>

<template>
  <section class="px-16 py-10 pb-[400px] max-w-[1200px] mx-auto">

    <!-- Header: freccia + torna alle esperienze -->
    <div class="flex items-center justify-between mb-10">
      <button @click="router.go(-1)" class="font-grande text-[48px] cursor-pointer">←</button>
      <router-link to="/esperienze">
        <div class="bg-[#3DD8FC] rounded-full px-8 py-3">
          <span class="font-testo text-[24px]">Torna alle esperienze</span>
        </div>
      </router-link>
    </div>

    <!-- Titolo -->
    <h1 class="text-[120px] leading-tight text-[#00D312] italic mb-16 uppercase" style="font-family: 'Arial Narrow', Arial, sans-serif;">
      Domande che ci fate sempre
    </h1>

    <!-- FAQ -->
    <div class="flex flex-col gap-10">

      <div class="faq-item">
        <p class="font-testo text-[28px] text-[#FF7FD4] font-bold">Devo essere in forma per volare?</p>
        <p class="font-testo text-[24px]">No. Dovete essere vivi, il che presumiamo sia già il caso. La mongolfiera non richiede sforzo fisico — salite, state in piedi, guardate il mondo dall'alto e vi sentite invincibili. L'unico requisito è riuscire a stare in piedi per 60 minuti, cosa che sospettiamo facciate già ogni giorno.</p>
      </div>

      <div class="faq-item">
        <p class="font-testo text-[28px] text-[#FF7FD4] font-bold">Ho paura delle altezze. Posso venire lo stesso?</p>
        <p class="font-testo text-[24px]">Dipende. Se la paura è quella sana che vi fa apprezzare il fatto di essere ancora vivi, sì. Se è quella che vi fa bloccare sul terzo gradino di una scala, forse parlatene prima con qualcuno. Con noi, per esempio.</p>
      </div>

      <div class="faq-item">
        <p class="font-testo text-[28px] text-[#FF7FD4] font-bold">Posso portare qualcuno con me?</p>
        <p class="font-testo text-[24px]">Assolutamente sì. Un amico, un partner, un rivale di una vita con cui fare pace in quota. La mongolfiera è un posto strano — lassù si perdonano cose che a terra sembrano imperdonabili.</p>
      </div>

      <div class="faq-item">
        <p class="font-testo text-[28px] text-[#FF7FD4] font-bold">Cosa succede se il tempo è brutto?</p>
        <p class="font-testo text-[24px]">Si rimanda, senza discussioni e senza costi aggiuntivi. Il vento decide la rotta, il meteo decide il giorno. Noi decidiamo solo di non portarvi su con una tempesta.</p>
      </div>

      <div class="faq-item">
        <p class="font-testo text-[28px] text-[#FF7FD4] font-bold">Posso portare la macchina fotografica?</p>
        <p class="font-testo text-[24px]">Non solo potete — è quasi obbligatorio. Portatela, usatela, fateci vedere le foto. Le uniche cose vietate sono i selfie stick perché sono oggettivamente imbarazzanti a qualsiasi età.</p>
      </div>

      <div class="faq-item">
        <p class="font-testo text-[28px] text-[#FF7FD4] font-bold">E se mi viene il mal di pancia per l'emozione?</p>
        <p class="font-testo text-[24px]">Succede. È normale. È un buon segno — significa che state ancora sentendo le cose. Il cestino della colazione è lì anche per questo.</p>
      </div>

      <div class="faq-item">
        <p class="font-testo text-[28px] text-[#FF7FD4] font-bold">Quanto devo prenotare in anticipo?</p>
        <p class="font-testo text-[24px]">Prima prenoti, meglio è — i posti sono limitati e i voli dipendono dal meteo. Detto questo, non aspettate troppo: a una certa età l'unico momento giusto è adesso.</p>
      </div>

      <div class="faq-item">
        <p class="font-testo text-[28px] text-[#FF7FD4] font-bold">C'è un limite di età?</p>
        <p class="font-testo text-[24px]">Il limite minimo è 60 anni. Il limite massimo non esiste — finché avete voglia di salire, noi vi portiamo su.</p>
      </div>

    </div>
  </section>
</template>
