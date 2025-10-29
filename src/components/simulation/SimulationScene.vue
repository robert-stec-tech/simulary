<template>
  <div class="scene">
    <slot />
  </div>
</template>

<style scoped>
.scene {
  position: relative;
  width: 100%;
  max-width: clamp(320px, 90vw, 640px);
  aspect-ratio: 3/4;
  background-color: #1f2937;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}

@media (orientation: landscape) {
  .scene {
    aspect-ratio: 4/3;
    max-height: 90dvh;
  }
}
</style>
