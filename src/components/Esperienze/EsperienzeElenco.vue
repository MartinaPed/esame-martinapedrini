<script setup>
import BarraEsperienza from './BarraEsperienza.vue'
</script>

<template>
  <section class="flex flex-col px-8 py-10 w-full max-w-[1200px] mx-auto">
    <hr class="border-t-2 border-black mb-4" />
    <BarraEsperienza
      titolo="Volo all'alba"
      minuti="60 min"
      colore="#FFDD32"
      to="/alba"
    />
    <hr class="border-t-2 border-black my-4" />
    <BarraEsperienza
      titolo="Love is in the air"
      minuti="90 min"
      colore="#FF7FD4"
      to="/love"
    />
    <hr class="border-t-2 border-black my-4" />
    <BarraEsperienza
      titolo="Enjoint flight"
      minuti="75 min"
      colore="#00D312"
      to="/enjoint"
    />
    <hr class="border-t-2 border-black my-4" />
    <BarraEsperienza
      titolo="Jump no scare"
      minuti="45 min"
      colore="#3DD8FC"
      to="/jump"
    />
    <hr class="border-t-2 border-black mt-4" />

  </section>
</template>

<style scoped>
</style>
