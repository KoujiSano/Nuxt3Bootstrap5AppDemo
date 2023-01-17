<template>
  <div class="container">
    <div class="row"> 
      <div class="col" v-for="item in state.messeges">{{ item }}</div>
    </div>
  </div>

</template>
<script setup>
 const state = useGameState()
 const game = useGame();
 game.Init();
</script>
