<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import freccianerasx from '../assets/date/freccianerasx.png'
import freccianeradx from '../assets/date/freccianeradx.png'

const router = useRouter()

const mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
const meseCorrente = ref(0)

function mesePrecedente() {
  if (meseCorrente.value > 0) meseCorrente.value--
}
function meseSucessivo() {
  if (meseCorrente.value < mesi.length - 1) meseCorrente.value++
}

const date = {
  0: [ // Gennaio
    { data: '2 Gennaio 2027',   orario: '20:00 - 21:09', esperienza: 'Love is in the air', colore: '#FF7FD4' },
    { data: '15 Gennaio 2027',  orario: '04:00 - 05:00', esperienza: "Volo all'alba",      colore: '#FFDD32' },
    { data: '20 Gennaio 2027',  orario: '16:20 - 17:20', esperienza: 'Enjoint flight',      colore: '#00D312' },
    { data: '29 Gennaio 2027',  orario: '15:00 - 15:45', esperienza: 'Jump scare',          colore: '#3DD8FC' },
  ],
  1: [ // Febbraio
    { data: '3 Febbraio 2027',  orario: '20:00 - 21:09', esperienza: 'Love is in the air', colore: '#FF7FD4' },
    { data: '15 Febbraio 2027', orario: '04:00 - 05:00', esperienza: "Volo all'alba",      colore: '#FFDD32' },
    { data: '18 Febbraio 2027', orario: '16:20 - 17:20', esperienza: 'Enjoint flight',      colore: '#00D312' },
    { data: '27 Febbraio 2027', orario: '15:00 - 15:45', esperienza: 'Jump scare',          colore: '#3DD8FC' },
  ],
  2: [ // Marzo
    { data: '1 Marzo 2027',     orario: '20:00 - 21:09', esperienza: 'Love is in the air', colore: '#FF7FD4' },
    { data: '5 Marzo 2027',     orario: '04:00 - 05:00', esperienza: "Volo all'alba",      colore: '#FFDD32' },
    { data: '10 Marzo 2027',    orario: '16:20 - 17:20', esperienza: 'Enjoint flight',      colore: '#00D312' },
    { data: '29 Marzo 2027',    orario: '15:00 - 15:45', esperienza: 'Jump scare',          colore: '#3DD8FC' },
  ],
  3: [ // Aprile
    { data: '2 Aprile 2027',    orario: '20:00 - 21:09', esperienza: 'Love is in the air', colore: '#FF7FD4' },
    { data: '16 Aprile 2027',   orario: '04:00 - 05:00', esperienza: "Volo all'alba",      colore: '#FFDD32' },
    { data: '21 Aprile 2027',   orario: '16:20 - 17:20', esperienza: 'Enjoint flight',      colore: '#00D312' },
    { data: '29 Aprile 2027',   orario: '15:00 - 15:45', esperienza: 'Jump scare',          colore: '#3DD8FC' },
  ],
  4: [ // Maggio
    { data: '3 Maggio 2027',    orario: '20:00 - 21:09', esperienza: 'Love is in the air', colore: '#FF7FD4' },
    { data: '14 Maggio 2027',   orario: '04:00 - 05:00', esperienza: "Volo all'alba",      colore: '#FFDD32' },
    { data: '22 Maggio 2027',   orario: '16:20 - 17:20', esperienza: 'Enjoint flight',      colore: '#00D312' },
    { data: '30 Maggio 2027',   orario: '15:00 - 15:45', esperienza: 'Jump scare',          colore: '#3DD8FC' },
  ],
  5: [ // Giugno
    { data: '3 Giugno 2027',    orario: '20:00 - 21:09', esperienza: 'Love is in the air', colore: '#FF7FD4' },
    { data: '16 Giugno 2027',   orario: '04:00 - 05:00', esperienza: "Volo all'alba",      colore: '#FFDD32' },
    { data: '23 Giugno 2027',   orario: '16:20 - 17:20', esperienza: 'Enjoint flight',      colore: '#00D312' },
    { data: '28 Giugno 2027',   orario: '15:00 - 15:45', esperienza: 'Jump scare',          colore: '#3DD8FC' },
  ],
  6: [ // Luglio
    { data: '1 Luglio 2027',    orario: '20:00 - 21:09', esperienza: 'Love is in the air', colore: '#FF7FD4' },
    { data: '17 Luglio 2027',   orario: '04:00 - 05:00', esperienza: "Volo all'alba",      colore: '#FFDD32' },
    { data: '20 Luglio 2027',   orario: '16:20 - 17:20', esperienza: 'Enjoint flight',      colore: '#00D312' },
    { data: '25 Luglio 2027',   orario: '15:00 - 15:45', esperienza: 'Jump scare',          colore: '#3DD8FC' },
  ],
  7: [ // Agosto
    { data: '5 Agosto 2027',    orario: '20:00 - 21:09', esperienza: 'Love is in the air', colore: '#FF7FD4' },
    { data: '10 Agosto 2027',   orario: '04:00 - 05:00', esperienza: "Volo all'alba",      colore: '#FFDD32' },
    { data: '15 Agosto 2027',   orario: '16:20 - 17:20', esperienza: 'Enjoint flight',      colore: '#00D312' },
    { data: '23 Agosto 2027',   orario: '15:00 - 15:45', esperienza: 'Jump scare',          colore: '#3DD8FC' },
  ],
  8: [ // Settembre
    { data: '1 Settembre 2027', orario: '20:00 - 21:09', esperienza: 'Love is in the air', colore: '#FF7FD4' },
    { data: '11 Settembre 2027',orario: '04:00 - 05:00', esperienza: "Volo all'alba",      colore: '#FFDD32' },
    { data: '20 Settembre 2027',orario: '16:20 - 17:20', esperienza: 'Enjoint flight',      colore: '#00D312' },
    { data: '30 Settembre 2027',orario: '15:00 - 15:45', esperienza: 'Jump scare',          colore: '#3DD8FC' },
  ],
  9: [ // Ottobre
    { data: '3 Ottobre 2027',   orario: '20:00 - 21:09', esperienza: 'Love is in the air', colore: '#FF7FD4' },
    { data: '14 Ottobre 2027',  orario: '04:00 - 05:00', esperienza: "Volo all'alba",      colore: '#FFDD32' },
    { data: '22 Ottobre 2027',  orario: '16:20 - 17:20', esperienza: 'Enjoint flight',      colore: '#00D312' },
    { data: '30 Ottobre 2027',  orario: '15:00 - 15:45', esperienza: 'Jump scare',          colore: '#3DD8FC' },
  ],
  10: [ // Novembre
    { data: '2 Novembre 2027',  orario: '20:00 - 21:09', esperienza: 'Love is in the air', colore: '#FF7FD4' },
    { data: '10 Novembre 2027', orario: '04:00 - 05:00', esperienza: "Volo all'alba",      colore: '#FFDD32' },
    { data: '22 Novembre 2027', orario: '16:20 - 17:20', esperienza: 'Enjoint flight',      colore: '#00D312' },
    { data: '29 Novembre 2027', orario: '15:00 - 15:45', esperienza: 'Jump scare',          colore: '#3DD8FC' },
  ],
  11: [ // Dicembre
    { data: '3 Dicembre 2027',  orario: '20:00 - 21:09', esperienza: 'Love is in the air', colore: '#FF7FD4' },
    { data: '14 Dicembre 2027', orario: '04:00 - 05:00', esperienza: "Volo all'alba",      colore: '#FFDD32' },
    { data: '21 Dicembre 2027', orario: '16:20 - 17:20', esperienza: 'Enjoint flight',      colore: '#00D312' },
    { data: '23 Dicembre 2027', orario: '15:00 - 15:45', esperienza: 'Jump scare',          colore: '#3DD8FC' },
  ],
}
</script>

<template>
  <section class="flex flex-col items-center px-16 py-10 max-w-[900px] mx-auto">

    <!-- Titolo + X -->
    <div class="flex items-center justify-between w-full mb-10">
      <h1 class="font-fuck text-[96px]">DATE DISPONIBILI</h1>
      <button @click="router.go(-1)" class="font-fuck text-[96px] text-[#ff0000] cursor-pointer leading-none">×</button>
    </div>

    <!-- Navigazione mese -->
    <div class="flex items-center gap-8 mb-10">
      <button @click="mesePrecedente" :disabled="meseCorrente === 0" class="cursor-pointer disabled:opacity-30">
        <img :src="freccianerasx" alt="" class="w-[60px] h-auto" />
      </button>
      <span class="font-fuck text-[72px]">{{ mesi[meseCorrente] }}</span>
      <button @click="meseSucessivo" :disabled="meseCorrente === 11" class="cursor-pointer disabled:opacity-30">
        <img :src="freccianeradx" alt="" class="w-[60px] h-auto" />
      </button>
    </div>

    <!-- Card date -->
    <div class="flex flex-col gap-6 w-full">
      <div
        v-for="(d, i) in date[meseCorrente]"
        :key="i"
        class="rounded-[32px] border-4 px-6 py-1"
        :style="{ borderColor: d.colore }"
      >
        <div class="flex items-center justify-between mb-1">
          <div>
            <p class="font-fuck text-[56px]">{{ d.data }}</p>
            <p class="font-fuck text-[48px]">{{ d.orario }}</p>
          </div>
          <button
            class="font-fuck text-[36px] text-white rounded-full px-6 py-2 cursor-pointer"
            :style="{ backgroundColor: d.colore }"
          >
            COMPRA ORA!
          </button>
        </div>
        <p class="font-fuck text-[96px] leading-none text-center" :style="{ color: d.colore }">{{ d.esperienza }}</p>
      </div>

      <!-- Nessuna data -->
      <p v-if="date[meseCorrente].length === 0" class="font-testo text-[28px] text-center text-gray-400 py-10">
        Nessuna data disponibile per questo mese.
      </p>
    </div>

    <!-- Torna alle esperienze -->
    <router-link to="/esperienze" class="mt-12">
      <div class="bg-[#ff0000] rounded-full px-8 py-3">
        <span class="font-testo text-[24px] text-white">Torna alle esperienze</span>
      </div>
    </router-link>

  </section>
</template>
