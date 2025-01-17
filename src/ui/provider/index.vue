<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'
import { merge } from 'es-toolkit'
import zhCN from 'tdesign-vue-next/es/locale/zh_CN'

const settingsStore = useSettingsStore()

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
watch(() => settingsStore.settings.app.colorScheme, (colorScheme) => {
  if (colorScheme === '') {
    prefersColorScheme.addEventListener('change', updateTheme)
  }
  else {
    prefersColorScheme.removeEventListener('change', updateTheme)
  }
  nextTick(() => {
    updateTheme()
  })
}, {
  immediate: true,
})
function updateTheme() {
  switch (settingsStore.currentColorScheme) {
    case 'light':
      document.documentElement.removeAttribute('theme-mode')
      break
    case 'dark':
      document.documentElement.setAttribute('theme-mode', 'dark')
      break
  }
}
</script>

<template>
  <TConfigProvider :global-config="merge(zhCN, {})">
    <slot />
  </TConfigProvider>
</template>
