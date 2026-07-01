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
  <section class="px-4 md:px-8 py-10 md:py-20 w-full max-w-[1800px] mx-auto">
    <!-- Riga titolo + icona +/× -->
    <div
      class="flex items-center justify-between cursor-pointer border-b-4 border-black pb-4"
      @click="toggle"
    >
      <h2 class="font-grande text-[30px] md:text-[50px] lg:text-[64px] leading-none text-[#ff0000]">
        facci sapere cosa ne pensi tu
      </h2>

      <span class="font-fuck text-[50px] md:text-[80px] leading-none text-[#ff0000]">
        {{ aperto ? 'x' : '+' }}
      </span>
    </div>

    <div v-if="aperto" class="flex flex-col gap-6 md:gap-8 pt-6 md:pt-10">

      <template v-if="!inviato">
        <textarea
          placeholder="Scrivi qui la tua opinione..."
          class="font-testo text-[20px] md:text-[32px] w-full h-[160px] md:h-[200px] border-4 border-black rounded-[40px] p-4 md:p-8 resize-none outline-none"
        ></textarea>

        <button
          @click="invia"
          class="self-end font-grande text-[70px] md:text-[110px] lg:text-[150px] leading-none text-white bg-[#ff0000] rounded-full px-8 md:px-16 py-2 cursor-pointer"
        >
          invia
        </button>
      </template>

      <p v-if="inviato" class="font-grande text-[60px] md:text-[100px] lg:text-[150px] leading-none text-[#ff0000] text-center">
        grazie per la tua opinione
      </p>

    </div>
  </section>
</template>