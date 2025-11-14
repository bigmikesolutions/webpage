import { h } from 'vue'

// Tech icons as inline components
export const IconVue = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 261 226', fill: 'currentColor' },
      [
        h('path', { d: 'M0 0h261v226H0z', fill: 'none' }),
        h('path', {
          d: 'M130.5 0l-65 112.5L0 0h65L130.5 112.5 196 0h65L196 112.5z',
          fill: 'currentColor',
        }),
      ],
    )
  },
}

export const IconTS = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' },
      [
        h('rect', { x: '2', y: '2', width: '20', height: '20', rx: '2' }),
        h('path', { d: 'M7 6h10v2H9v8H7V6z', fill: '#fff' }),
      ],
    )
  },
}

export const IconTailwind = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' },
      [
        h('path', {
          d: 'M12 5C9.8 5 8 6.5 7 8c3 0 3.8-2 5-2 1.3 0 2.3 1 3.8 1.6 1.5.6 2.6-.2 3.2 0-1.1-2.4-3.7-4-8-4z',
        }),
      ],
    )
  },
}

export const IconAccessibility = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' },
      [h('path', { d: 'M12 2a2 2 0 110 4 2 2 0 010-4zM7 8h10l-1 9H8L7 8z' })],
    )
  },
}

export const IconPerformance = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' },
      [h('path', { d: 'M12 3a9 9 0 100 18 9 9 0 000-18zm1 10l4-4' })],
    )
  },
}

export const IconDesign = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' },
      [h('path', { d: 'M3 3h18v4H3zM3 9h18v12H3z' })],
    )
  },
}

export const IconNode = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' },
      [h('path', { d: 'M12 2l8 4v8l-8 4-8-4V6l8-4z' })],
    )
  },
}

export const IconCloud = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' },
      [h('path', { d: 'M20 17.5A4.5 4.5 0 0015.5 13H13a4 4 0 10-7.9 1.2A3.5 3.5 0 007.5 20H20' })],
    )
  },
}

export const IconAndroid = {
  render() {
    return h(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor' },
      [h('path', { d: 'M17 11v6h-2v-6h2zm-8 0v6H7v-6h2zM8 6l-1-2h10l-1 2H8zM5 11h14v7H5v-7z' })],
    )
  },
}

