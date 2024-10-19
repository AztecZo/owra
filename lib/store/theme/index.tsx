import { create } from "zustand"

interface State {
  primaryColor: string | null
  secondaryColor: string | null
  setColors: (primary: string | null, secondary: string | null) => void
}

export const useStore = create<State>((set) => ({
  primaryColor: "#ffffff",
  secondaryColor: "#000000",
  setColors: (primary, secondary) => {
    set({ primaryColor: primary, secondaryColor: secondary })
  },
}))

export const useTheme = useStore
