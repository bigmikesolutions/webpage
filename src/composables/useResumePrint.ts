import type { InjectionKey, Ref } from 'vue'
import { ref } from 'vue'

export const resumePrintModeKey: InjectionKey<Ref<boolean>> = Symbol('resumePrintMode')

export function createResumePrintMode() {
  return ref(false)
}
