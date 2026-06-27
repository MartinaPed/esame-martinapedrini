<script setup>
import { ref } from 'vue'

const aperto = ref(false)
const inviato = ref(false)

function toggle() {
  aperto.value = !aperto.value
}

function invia() {
  inviato.value = true
}
</script>

<template>
  <section class="px-8 py-20 w-full max-w-[1800px] mx-auto">
    <!-- Riga titolo + icona +/× -->
    <div
      class="flex items-center justify-between cursor-pointer border-b-4 border-black pb-4"
      @click="toggle"
    >
      <h2 class="font-grande text-[64px] leading-none text-[#ff0000]">
        facci sapere cosa ne pensi tu
      </h2>

      <!-- Icona + / × fatta con due linee -->
      <div class="relative w-[60px] h-[60px] shrink-0">
        <!-- linea orizzontale: sparisce quando aperto -->
        <span
          class="absolute top-1/2 left-0 w-full h-[6px] bg-[#ff0000] -translate-y-1/2 transition-all duration-300"
          :class="aperto ? 'opacity-0' : 'opacity-100'"
        ></span>
        <!-- linea verticale: ruota di 45° quando aperto -->
        <span
          class="absolute left-1/2 top-0 h-full w-[6px] bg-[#ff0000] -translate-x-1/2 transition-all duration-300"
          :class="aperto ? 'rotate-45' : 'rotate-0'"
        ></span>
        <!-- seconda barra della ×: appare solo quando aperto -->
        <span
          class="absolute left-1/2 top-0 h-full w-[6px] bg-[#ff0000] -translate-x-1/2 transition-all duration-300"
          :class="aperto ? 'rotate-[-45deg] opacity-100' : 'rotate-0 opacity-0'"
        ></span>
      </div>
    </div>

    <!-- Contenuto: appare solo quando aperto -->
    <div v-if="aperto" class="flex flex-col gap-8 pt-10">

      <!-- Modulo: visibile solo se NON ancora inviato -->
      <template v-if="!inviato">
        <textarea
          placeholder="Scrivi qui la tua opinione..."
          class="font-testo text-[32px] w-full h-[200px] border-4 border-black rounded-[40px] p-8 resize-none outline-none"
        ></textarea>

        <button
          @click="invia"
          class="self-end font-grande text-[150px] leading-none text-white bg-[#ff0000] rounded-full px-16 py-2 cursor-pointer"
        >
          invia
        </button>
      </template>

      <!-- Messaggio: visibile solo DOPO l'invio -->
      <p v-if="inviato" class="font-grande text-[150px] leading-none text-[#ff0000] text-center">
        grazie per la tua opinione
      </p>

    </div>
  </section>
</template>