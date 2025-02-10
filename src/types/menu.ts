// types/menu.ts
export interface MenuItem {
  title: string;
  path?: string;
  subItems?: MenuItem[];
}