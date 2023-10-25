<script setup lang="ts">
defineOptions({
  name: 'PageMain',
})

const props = withDefaults(
  defineProps<{
    title?: string
    collaspe?: boolean
    height?: string
  }>(),
  {
    title: '',
    collaspe: false,
    height: '',
  },
)

const titleSlot = !!useSlots().title

const collaspeData = ref(props.collaspe)
function unCollaspe() {
  collaspeData.value = false
}
</script>

<template>
  <div
    class="page-main" :class="{
      'is-collaspe': collaspeData,
    }" :style="{
      height: collaspeData ? height : '',
    }"
  >
    <div v-if="titleSlot || title" class="title-container">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="main-container">
      <slot />
    </div>
    <div v-if="collaspeData" class="collaspe" @click="unCollaspe">
      <SvgIcon name="ep:arrow-down" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-main {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px;
  background-color: var(--g-container-bg);
  transition: background-color 0.3s;

  &.is-collaspe {
    overflow: hidden;

    .collaspe {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 40px 0 10px;
      text-align: center;
      font-size: 24px;
      color: var(--el-text-color-primary);
      background: linear-gradient(to bottom, transparent, var(--g-container-bg));
      transition: background 0.3s, var(--el-transition-color);
      cursor: pointer;

      &:hover {
        color: var(--el-text-color-secondary);
      }
    }
  }

  .title-container {
    padding: 14px 20px;
    border-bottom: 1px solid var(--g-bg);
    transition: var(--el-transition-border);
  }

  .main-container {
    padding: 20px;
  }
}
</style>
