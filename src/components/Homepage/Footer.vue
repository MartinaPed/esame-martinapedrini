<script setup>
import { RouterLink } from 'vue-router'
import logoorizzontale from '../../assets/logoorizzontale.png'
</script>

<template>
  <footer class="bg-[#FFFCE0] px-[40px] py-[40px]">
    <!-- Logo orizzontale -->
    <img
      :src="logoorizzontale"
      alt="Nadamás"
      class="h-[80px] w-auto mb-[16px]"
    />

    <!-- Payoff -->
    <p class="text-[14px] font-testo text-black mb-[12px]">
      too old to die · too high to care
    </p>

    <!-- Navigazione -->
    <p class="text-[14px] font-testo text-black mb-[4px]">
      VOLA CON NOI
      <RouterLink to="/chi-siamo" class="transition-colors hover:text-[#FF0000]">Chi Siamo</RouterLink> ·
      <RouterLink to="/esperienze" class="transition-colors hover:text-[#FF0000]">Esperienze</RouterLink> ·
      <RouterLink to="/" class="transition-colors hover:text-[#FF0000]">Recensioni</RouterLink> ·
      <RouterLink to="/shop" class="transition-colors hover:text-[#FF0000]">Shop</RouterLink>
    </p>

    <!-- Contatti -->
    <p class="text-[14px] font-testo text-black mb-[4px]">
      PARLIAMONE WhatsApp: +39 3319079252 · NADAMAS
      <a href="mailto:ciao@nadamas.it" class="transition-colors hover:text-[#FF0000]">ciao@nadamas.it</a>
      (rispondiamo tra un volo e l'altro)
    </p>

    <p class="text-[14px] font-testo text-black mb-[4px]">
      SEGUICI IN QUOTA Instagram
      <a href="https://instagram.com/nadamas.balloons" target="_blank" rel="noopener" class="transition-colors hover:text-[#FF0000]">@nadamas.balloons</a>
      · TikTok
      <a href="https://tiktok.com/@nadamas" target="_blank" rel="noopener" class="transition-colors hover:text-[#FF0000]">@nadamas</a>
    </p>

    <p class="text-[14px] font-testo text-black mb-[12px]">
      Mongolfiere certificate. Adrenalina non garantita ma probabile.
    </p>

    <!-- Dati legali -->
    <p class="text-[14px] font-testo text-black mb-[4px]">
      Nadamás S.r.l. · P.IVA 0999 0999 099 ·
    </p>
    <p class="text-[14px] font-testo text-black mb-[12px]">
      Sede legale: tra le nuvole, Bergamo
    </p>

    <p class="text-[14px] font-testo text-black">
      © 2026 Nadamás — Viaggi per chi ha smesso di contare gli anni
      <a href="#" class="transition-colors hover:text-[#FF0000]">Privacy Policy</a> ·
      <a href="#" class="transition-colors hover:text-[#FF0000]">Termini &amp; Condizioni</a> ·
      <a href="#" class="transition-colors hover:text-[#FF0000]">Cookie (quelli buoni)</a>
    </p>
  </footer>
</template>