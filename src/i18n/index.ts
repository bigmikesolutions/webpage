import { createI18n } from 'vue-i18n'

const messages = {
  pl: {
    header: { about: 'O mnie', services: 'Usługi', github: 'GitHub', contact: 'Kontakt' },
    about: {
      badge: 'O mnie',
      heading: 'Projektuję i tworzę dopracowane aplikacje, które konwertują.',
      pitch:
        'Jestem starszym frontend inżynierem i projektantem produktów specjalizującym się w szybkim, dostępnym i eleganckim doświadczeniu webowym. Od strategii i UX po nowoczesne stacki frontendowe — współpracuję z klientami by wdrażać z jakością i szybkością.',
      buttons: { work: 'Współpracuj ze mną', view: 'Zobacz usługi', github: 'GitHub' },
      github_user: 'm-wrona',
    },
    stats: { projects_label: 'PROJEKTY', projects_value: '120+', uplift_label: 'ŚR. WZROST', uplift_value: '32%', years_label: 'LATA', years_value: '8' },
    services: { title: 'Usługi', description: 'Kompleksowy design produktu i nowoczesne inżynieria frontendowa.' },
    products: { title: 'Produkty', description: 'Miejsca, gdzie dzielę się treściami i prowadzę szkolenia.', youtube_title: 'Big Mike Labs — YouTube', unlock_title: 'UnlockIT — E‑learning' },
    cta: { title: 'Masz projekt? Zróbmy go błyszczącym.', subtitle: 'Od MVP po dojrzałe produkty — współpracuję z zespołami, by dostarczać wartość.', button: 'Rozpocznij projekt' },
    contact: { title: 'Rozpocznij projekt', description: 'Opowiedz o swoich celach i harmonogramie. Odpowiem w 1–2 dni robocze.', preferEmail: 'Wolisz e‑mail? Napisz na' },
    footer: { explore: 'Odkryj', contact: 'Kontakt', start: 'Rozpocznij projekt' },
  },
  en: {
    header: { about: 'About', services: 'Services', github: 'GitHub', contact: 'Contact' },
    about: {
      badge: 'About Me',
      heading: 'I design and build polished apps that convert.',
      pitch:
        "I'm a senior frontend engineer and product designer specializing in fast, accessible, and elegant web experiences. From strategy and UX to modern frontend stacks, I partner with clients to ship with quality and speed.",
      buttons: { work: 'Work with me', view: 'View services', github: 'GitHub' },
      github_user: 'm-wrona',
    },
    stats: { projects_label: 'PROJECTS', projects_value: '120+', uplift_label: 'AVG. UPLIFT', uplift_value: '32%', years_label: 'YEARS', years_value: '8' },
    services: { title: 'Services', description: 'Full-service product design and modern frontend engineering.' },
    products: { title: 'Products', description: 'Places where I share content and teach.', youtube_title: 'Big Mike Labs — YouTube', unlock_title: 'UnlockIT — E‑learning' },
    cta: { title: "Have a project? Let's make it shine.", subtitle: 'From MVPs to mature products, I partner with teams to deliver results with clarity and craft.', button: 'Start a project' },
    contact: { title: 'Start a project', description: "Tell me about your goals and timeline. I'll get back within 1–2 business days.", preferEmail: 'Prefer email? Reach me at' },
    footer: { explore: 'Explore', contact: 'Contact', start: 'Start a project' },
  },
}

export const i18n = createI18n({ legacy: false, locale: 'pl', fallbackLocale: 'en', messages })

export default i18n
