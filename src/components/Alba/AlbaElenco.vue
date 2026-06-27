<script setup>
import { ref } from 'vue'

const voci = [
  {
    titolo: 'Cosa è incluso',
    testo: 'Volo in mongolfiera della durata di 60 minuti, brindisi di benvenuto a bordo, cestino con colazione al sacco preparata per l\'occasione, foto ricordo del volo e certificato ufficiale di volo rilasciato dall\'equipaggio. La nostra crew giovane e impreparata a gestire i vostri aneddoti sarà presente per tutta la durata dell\'esperienza.',
  },
  {
    titolo: 'Cosa non è incluso',
    testo: 'Trasferimento da/per il punto di decollo, assicurazione personale, eventuali danni causati da eccessivo entusiasmo.',
  },
  {
    titolo: 'Info pratiche',
    testo: 'Il volo si svolge all\'alba, ritrovo un\'ora prima del decollo. Abbigliamento consigliato: strati, scarpe comode, spirito d\'avventura. Età minima 60 anni.',
  },
  {
    titolo: 'Dicono di noi',
    testo: '"Lassù mi sono sentita di nuovo una ragazzina. Non so cosa mettono nel cestino del pic-nic ma voglio la ricetta." — Maria, 74 anni',
  },
]

const aperto = ref(null)

function toggle(i) {
  aperto.value = aperto.value === i ? null : i
}
</script>

<template>
  <section class="flex flex-col gap-4 px-16 py-10">
    <div
      v-for="(voce, i) in voci"
      :key="i"
      class="bg-[#FFDD32] rounded-[32px] overflow-hidden cursor-pointer"
      @click="toggle(i)"
    >
      <!-- Header -->
      <div class="flex items-center justify-between px-10 py-6">
        <span class="font-grande text-[72px] leading-none">{{ voce.titolo }}</span>
        <span class="font-grande text-[52px] leading-none" :class="aperto === i ? 'text-[#ff0000]' : 'text-[#00cfff]'">
          {{ aperto === i ? '×' : '+' }}
        </span>
      </div>

      <!-- Contenuto -->
      <div v-if="aperto === i" class="px-10 pb-8">
        <p class="font-testo text-[24px] leading-relaxed">{{ voce.testo }}</p>
      </div>
    </div>
  </section>
</template>
