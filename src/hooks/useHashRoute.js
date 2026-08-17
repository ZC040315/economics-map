import { useCallback, useEffect, useState } from 'react'

export const ROUTES = {
  home: '/',
  map: '/map',
  review: '/review',
  skills: '/skills',
}

export function parseHash(hash) {
  const clean = hash.replace(/^#/, '') || '/'
  const [path, query] = clean.split('?')
  const segments = path.split('/').filter(Boolean)
  if (segments.length === 0) return { name: 'home', path: '/', params: {}, query }
  if (segments[0] === 'chapter' && segments[1]) {
    return { name: 'chapter', path, params: { id: segments[1] }, query }
  }
  if (segments[0] === 'knowledge' && segments[1]) {
    return { name: 'knowledge', path, params: { id: segments[1] }, query }
  }
  if (segments[0] === 'test' && segments[1] === 'chapter' && segments[2]) {
    return { name: 'test-chapter', path, params: { id: segments[2] }, query }
  }
  if (segments[0] === 'test' && segments[1] === 'weekly') {
    return { name: 'test-weekly', path, params: {}, query }
  }
  const known = {
    map: 'map',
    review: 'review',
    skills: 'skills',
    test: 'test',
  }
  const name = known[segments[0]] ?? 'home'
  return { name, path: `/${segments[0] ?? ''}`.replace(/\/$/, '') || '/', params: {}, query }
}

export default function useHashRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash))

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = useCallback((path) => {
    window.location.hash = path
  }, [])

  return { route, navigate }
}
