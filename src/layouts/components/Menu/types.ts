import { createInjectionKey } from '@/utils/injectionKeys'
import type { Menu } from '#/global'

export interface MenuItem {
  index: string
  indexPath: string[]
  active?: boolean
}

export interface MenuProps {
  menu: Menu.recordRaw[]
  value: string
  accordion?: boolean
  defaultOpeneds?: string[]
  mode?: 'horizontal' | 'vertical'
  collapse?: boolean
  showCollapseName?: boolean
}

export interface MenuInjection {
  props: MenuProps
  items: Record<string, MenuItem>
  subMenus: Record<string, MenuItem>
  activeIndex: MenuProps['value']
  openedMenus: string[]
  mouseInMenu: string[]
  isMenuPopup: boolean
  openMenu: (index: string, indexPath: string[]) => void
  closeMenu: (index: string | string[]) => void
  handleMenuItemClick: (index: string, meta?: Menu.recordRaw['meta']) => void
  handleSubMenuClick: (index: string, indexPath: string[]) => void
}

export const rootMenuInjectionKey = createInjectionKey<MenuInjection>('rootMenu')
