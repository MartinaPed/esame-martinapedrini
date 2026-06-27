<script setup>
import { ref } from 'vue'
import frecciarossadx from '../../assets/frecciarossadx.png'
import frecciarossasx from '../../assets/frecciarossasx.png'

import alba from '../../assets/foto sito nada mas/albaverticale.png'
import enjoint from '../../assets/foto sito nada mas/enjointverticale.png'
import love from '../../assets/foto sito nada mas/loveverticale.png'
import jump from '../../assets/foto sito nada mas/jumpverticale2.png'

const foto = [
  { src: alba,    titolo: 'Volo alba',          prezzo: '190€' },
  { src: love,    titolo: 'Love is in the air', prezzo: '269€' },
  { src: enjoint, titolo: 'Enjoint',             prezzo: '240€' },
  { src: jump,    titolo: 'Jump scare',          prezzo: '320€' },
]

const corrente = ref(0)

function precedente() {
  corrente.value = (corrente.value - 1 + foto.length) % foto.length
}

function successiva() {
  corrente.value = (corrente.value + 1) % foto.length
}
</script>

<template>
  <div class="flex flex-col items-center gap-6">

    <!-- Polaroid -->
    <div class="bg-white p-4 pb-8 shadow-lg w-full max-w-[420px]">
      <img
        :src="foto[corrente].src"
        alt=""
        class="w-full h-[480px] object-cover"
      />
      <!-- Titolo e prezzo dentro la polaroid -->
      <div class="text-center mt-4">
        <p class="font-grande text-[48px] leading-tight">{{ foto[corrente].titolo }}</p>
        <p class="font-grande text-[64px] leading-tight">{{ foto[corrente].prezzo }}</p>
      </div>
    </div>

    <!-- Frecce affiancate -->
    <div class="flex items-center justify-between w-full max-w-[420px] px-4">
      <button @click="precedente" class="cursor-pointer">
        <img :src="frecciarossasx" alt="precedente" class="w-[180px] h-auto" />
      </button>
      <button @click="successiva" class="cursor-pointer">
        <img :src="frecciarossadx" alt="successiva" class="w-[180px] h-auto" />
      </button>
    </div>

  </div>
</template>
