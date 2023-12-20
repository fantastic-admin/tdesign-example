<script setup lang="ts">
import { merge } from 'lodash-es'
import zhCN from 'tdesign-vue-next/es/locale/zh_CN'
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()

watch(() => settingsStore.settings.app.colorScheme, (colorScheme) => {
  if (colorScheme === '') {
    colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  switch (colorScheme) {
    case 'light':
      document.documentElement.removeAttribute('theme-mode')
      break
    case 'dark':
      document.documentElement.setAttribute('theme-mode', 'dark')
      break
  }
}, {
  immediate: true,
})
</script>

<template>
  <TConfigProvider :global-config="merge(zhCN)">
    <slot />
  </TConfigProvider>
</template>
