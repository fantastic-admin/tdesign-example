declare interface Window {
  webkitDevicePixelRatio: any
  mozDevicePixelRatio: any
}

declare const __SYSTEM_INFO__: {
  pkg: {
    dependencies: Recordable<string>
    devDependencies: Recordable<string>
  }
  lastBuildTime: string
}
