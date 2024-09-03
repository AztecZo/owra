import { NextSeoProps } from "next-seo"

export interface Seo {
  title: NextSeoProps["title"]
  description: NextSeoProps["description"]
}

export interface Filter {
  ui: string
  type: string
}

export interface Social {
  icon: any
  ui: string
  url: string
}

export enum MediaType {
  image = "image",
  video = "video",
}

export enum PageTransitionPhase {
  IDLE = "IDLE",
  APPEAR = "APPEAR",
  IN = "IN",
  OUT = "OUT",
}

export enum Size {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export interface CardBlogProps {
  id?: string
  category: string
  date: string
  description: string
  horizontal?: boolean
  media: MediaProps
  title: string
  time: string
  url: string
}

export interface BlogProps {
  id?: string
  header: Omit<CardBlogProps, "url">
  nextPost: string
  // body: BlockProps
}

export interface SocialProps {
  icon: string
  url: string
}

export interface MediaProps {
  type?: "image" | "video"
  height?: string
  src: string
  width?: string
}

export interface Alignment {
  alignment: "tl" | "tr" | "bl" | "br"
}

export interface OptionProps {
  label: string
  value: string
}

export interface BlockProps {
  id: string
  data: MediaProps[] | HTMLElement | any
  componentName: "Image" | "Text" | "Body"
  [key: string]: unknown
}

export interface Seo {
  title: NextSeoProps["title"]
  description: NextSeoProps["description"]
}

export type CursorType = "default" | "click" | "clickDark" | "menu"
