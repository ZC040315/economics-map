import { useCallback, useEffect, useState } from 'react'

const THEME_KEY = 'economics-map:v1:theme'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // ignore
  }
  return 'system'
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => {
      const resolved =
        theme === 'system' ? (media.matches ? 'dark' : 'light') : theme
      document.documentElement.setAttribute('data-theme', resolved)
    }
    apply()
    if (theme === 'system') {
      media.addEventListener('change', apply)
      return () => media.removeEventListener('change', apply)
    }
    return undefined
  }, [theme])

  const setMode = useCallback((mode) => {
    setTheme(mode)
    try {
      localStorage.setItem(THEME_KEY, mode)
    } catch {
      // ignore
    }
  }, [])

  const toggle = useCallback(() => {
    setMode(
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'light'
        : 'dark',
    )
  }, [setMode])

  return { theme, setMode, toggle }
}
