<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <section class="px-6 md:px-16 py-8 md:py-10 max-w-[1200px] mx-auto">

    <!-- Header -->
    <div class="flex items-center justify-between mb-6 md:mb-10">
      <button @click="router.go(-1)" class="font-grande text-[32px] md:text-[48px] text-[#ff0000] cursor-pointer">←</button>
      <router-link to="/esperienze">
        <div class="bg-[#3DD8FC] rounded-full px-5 md:px-8 py-2 md:py-3">
          <span class="font-testo text-[16px] md:text-[24px]">Torna alle esperienze</span>
        </div>
      </router-link>
    </div>

    <!-- Titolo -->
    <h1 class="text-[42px] md:text-[80px] lg:text-[120px] leading-tight text-[#00D312] italic mb-6 md:mb-10 uppercase" style="font-family: 'Arial Narrow', Arial, sans-serif;">
      Liberatoria e esonero di responsabilità
    </h1>

    <!-- Testo -->
    <div class="font-testo text-[17px] md:text-[22px] lg:text-[24px] leading-relaxed flex flex-col gap-4">
      <p><strong>Salendo su una nostra mongolfiera accetti una verità semplice: voli a tuo rischio e pericolo, esattamente come hai vissuto finora.</strong></p>
      <p>Il partecipante dichiara di prendere parte alle esperienze Nadamás in piena consapevolezza e in modo volontario, riconoscendo che ogni attività comporta rischi intrinseci — inclusi, nei casi più estremi, lesioni gravi o morte.</p>
      <p>Con la sottoscrizione, il partecipante (e i suoi eredi, aventi causa e chiunque venga dopo) esonera Nadamás, i suoi collaboratori, piloti e quel branco di ragazzi tra i 18 e i 20 anni da ogni responsabilità civile e penale per danni, infortuni, malori o decesso occorsi prima, durante o dopo il volo, salvo i casi di dolo o colpa grave non derogabili per legge.</p>
      <p>Il partecipante dichiara inoltre di essere in condizioni psicofisiche idonee all'attività e di non aver taciuto patologie rilevanti. Se decidi di volare a una certa età sapendo come sei messo, quella scelta è tua.</p>
      <p>In caso di decesso, nessun erede potrà rivalersi su Nadamás. Andrai via come hai vissuto: in alto e senza permesso.</p>
      <p><strong>Firma qui sotto. Poi sali.</strong></p>
    </div>

  </section>
</template>
