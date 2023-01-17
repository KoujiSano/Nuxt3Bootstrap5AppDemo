<template>
  <div class="container">
    <div class="row"> 
      <div class="col">
        Column
      </div>
      <div class="col">
        Column
      </div>
      <div class="col">
        Column
      </div>
    </div>
  </div>

</template>
<script setup>
 const state = useGameState()
 const game = useGame();
 game.Init();
</script>
