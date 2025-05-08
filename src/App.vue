<script setup lang="ts">
import newsSmall from './components/newsSmall.vue'
import newsMid from './components/newsMid.vue'
import newsGrid from './components/newsGrid.vue'
import home from './views/home.vue'
</script>

<template>
  <header class="py-2 px-3 bg-teal-500 text-white">
    <div class="container mx-auto">
      <h1 class="font-bold text-2xl tracking-wider">Li'fe</h1>
    </div>
  </header>
  <div class="container mx-auto flex gap-8 justify-between pt-8">
    <div class="flex-1 flex-col gap-5 max-w-sm hidden md:flex">
      <newsSmall title="HOT AI NEWS" query="AI"></newsSmall>
      <newsSmall title="HOT BUSINESS NEWS" query="BUSINESS"></newsSmall>
      <newsSmall title="HOT SPORT NEWS" query="SPORT"></newsSmall>
    </div>
    <home></home>
    <div class="flex-1 flex-col gap-5 max-w-sm hidden lg:flex">
      <newsMid title="Guess you like" query="cycling"></newsMid>
      <newsGrid title="World Changes..." query="US"></newsGrid>
      <newsGrid title="MOVIE" query="MOVIE"></newsGrid>
    </div>
  </div>
</template>
