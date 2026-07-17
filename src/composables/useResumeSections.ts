import type { InjectionKey } from 'vue'
import { ref } from 'vue'

export type ResumeSectionController = {
  register: (id: string, expand: () => void) => void
  unregister: (id: string) => void
  expandForTarget: (targetId: string) => void
  onLayoutChange: (callback: () => void) => () => void
  notifyLayoutChange: () => void
}

export const resumeSectionsKey: InjectionKey<ResumeSectionController> =
  Symbol('resumeSections')

function sectionIdsForTarget(targetId: string): string[] {
  if (targetId.startsWith('company-')) return ['experience']
  if (targetId.startsWith('internship-')) return ['internships']
  if (targetId === 'tech-others') return ['tech', 'tech-others']
  return [targetId]
}

export function createResumeSectionController(): ResumeSectionController {
  const expanders = ref(new Map<string, () => void>())
  const layoutListeners = new Set<() => void>()

  return {
    register(id, expand) {
      expanders.value.set(id, expand)
    },
    unregister(id) {
      expanders.value.delete(id)
    },
    expandForTarget(targetId) {
      for (const id of sectionIdsForTarget(targetId)) {
        expanders.value.get(id)?.()
      }
      layoutListeners.forEach((cb) => cb())
    },
    onLayoutChange(callback) {
      layoutListeners.add(callback)
      return () => layoutListeners.delete(callback)
    },
    notifyLayoutChange() {
      layoutListeners.forEach((cb) => cb())
    },
  }
}
