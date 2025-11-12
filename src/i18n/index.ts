import { createI18n } from 'vue-i18n'

const messages = {
  pl: {
    header: {
      about: 'O mnie',
      services: 'Usługi',
      resume: 'CV',
      github: 'GitHub',
      contact: 'Kontakt',
    },
    about: {
      badge: 'O mnie',
      heading: 'Projektuję i tworzę dopracowane aplikacje, które konwertują.',
      pitch:
        'Jestem starszym frontend inżynierem i projektantem produktów specjalizującym się w szybkim, dostępnym i eleganckim doświadczeniu webowym. Od strategii i UX po nowoczesne stacki frontendowe — współpracuję z klientami by wdrażać z jakością i szybkością.',
      buttons: { work: 'Współpracuj ze mną', view: 'Zobacz usługi', github: 'GitHub' },
      github_user: 'm-wrona',
    },
    stats: {
      projects_label: 'PROJEKTY',
      projects_value: '120+',
      uplift_label: 'ŚR. WZROST',
      uplift_value: '32%',
      years_label: 'LATA',
      years_value: '8',
    },
    buttons: { send: 'Wyślij zapytanie' },
    services: {
      title: 'Usługi',
      description: 'Kompleksowy design produktu i nowoczesne inżynieria frontendowa.',
    },
    products: {
      title: 'Produkty',
      description: 'Miejsca, gdzie dzielę się treściami i prowadzę szkolenia.',
      youtube_title: 'Big Mike Labs — YouTube',
      unlock_title: 'UnlockIT — E‑learning',
    },
    cta: {
      title: 'Masz projekt? Zróbmy go błyszczącym.',
      subtitle: 'Od MVP po dojrzałe produkty — współpracuję z zespołami, by dostarczać wartość.',
      button: 'Rozpocznij projekt',
    },
    contact: {
      title: 'Rozpocznij projekt',
      description: 'Opowiedz o swoich celach i harmonogramie. Odpowiem w 1–2 dni robocze.',
      preferEmail: 'Wolisz e‑mail? Napisz na',
    },
    footer: { explore: 'Odkryj', contact: 'Kontakt', start: 'Rozpocznij projekt' },
    resume: {
      name: 'Michał Wroński',
      title: 'Senior Frontend Engineer & Product Designer',
      linkedin: 'https://www.linkedin.com/in/michal-wronski-b389a988/',
      summary_heading: 'Podsumowanie',
      summary:
        'Starszy frontend inżynier i projektant produktów z doświadczeniem w tworzeniu skalowalnych aplikacji webowych, UX i wydajnych interfejsów. Specjalizuję się w Vue, TypeScript i Tailwind.',
      experience_heading: 'Doświadczenie',
      education_heading: 'Edukacja',
      skills_heading: 'Umiejętności',
      tech_heading: 'Technologie',
      tech_subtitle: 'Technologie, których używam oraz lata doświadczenia z każdą z nich.',
      years: 'lat doświadczenia',
      companies_heading: 'Firmy',
      companies_subtitle: 'Wybrane firmy i projekty, z którymi współpracowałem.',
      projects_heading: 'Projekty',
      projects_subtitle: 'Wybrane projekty z opisem technologii i odpowiedzialności.',
      role1_title: 'Senior Frontend Engineer',
      role1_company: 'Freelance / Various',
      role1_dates: '2018 – obecnie',
      role1_description:
        'Projektowanie i implementacja interfejsów użytkownika, systemów designu oraz migracje do nowoczesnych frameworków.',
      role2_title: 'Frontend Engineer',
      role2_company: 'Past Company',
      role2_dates: '2016 – 2018',
      role2_description: 'Budowa skalowalnych aplikacji SPA oraz optymalizacja wydajności.',
      education_1: 'M.Sc. in Computer Science, University X',
      total_experience_big: '8+',
      total_experience_label: 'Lata doświadczenia',
      education_subtitle: 'Moje wykształcenie i istotne kwalifikacje.',
      certificates_heading: 'Certyfikaty',
      certificates_subtitle: 'Wybrane certyfikaty i szkolenia.'
    },
  },
  en: {
    header: {
      about: 'About',
      services: 'Services',
      resume: 'Resume',
      github: 'GitHub',
      contact: 'Contact',
    },
    about: {
      badge: 'About Me',
      heading: 'I design and build polished apps that convert.',
      pitch:
        "I'm a senior frontend engineer and product designer specializing in fast, accessible, and elegant web experiences. From strategy and UX to modern frontend stacks, I partner with clients to ship with quality and speed.",
      buttons: { work: 'Work with me', view: 'View services', github: 'GitHub' },
      github_user: 'm-wrona',
    },
    stats: {
      projects_label: 'PROJECTS',
      projects_value: '120+',
      uplift_label: 'AVG. UPLIFT',
      uplift_value: '32%',
      years_label: 'YEARS',
      years_value: '8',
    },
    buttons: { send: 'Send inquiry' },
    services: {
      title: 'Services',
      description: 'Full-service product design and modern frontend engineering.',
    },
    products: {
      title: 'Products',
      description: 'Places where I share content and teach.',
      youtube_title: 'Big Mike Labs — YouTube',
      unlock_title: 'UnlockIT — E‑learning',
    },
    cta: {
      title: "Have a project? Let's make it shine.",
      subtitle:
        'From MVPs to mature products, I partner with teams to deliver results with clarity and craft.',
      button: 'Start a project',
    },
    contact: {
      title: 'Start a project',
      description: "Tell me about your goals and timeline. I'll get back within 1–2 business days.",
      preferEmail: 'Prefer email? Reach me at',
    },
    footer: { explore: 'Explore', contact: 'Contact', start: 'Start a project' },
    resume: {
      name: 'Michał Wroński',
      title: 'Senior Frontend Engineer & Product Designer',
      linkedin: 'https://www.linkedin.com/in/michal-wronski-b389a988/',
      summary_heading: 'Summary',
      summary:
        'Senior frontend engineer and product designer experienced in building scalable web applications, UX and performant interfaces. Specializes in Vue, TypeScript and Tailwind.',
      experience_heading: 'Experience',
      education_heading: 'Education',
      skills_heading: 'Skills',
      tech_heading: 'Technologies',
      tech_subtitle: 'Technologies I use and years of experience with each.',
      years: 'years',
      companies_heading: 'Companies',
      companies_subtitle: 'Selected companies and collaborations I worked with.',
      projects_heading: 'Projects',
      projects_subtitle: 'Selected projects with technologies used and responsibilities.',
      role1_title: 'Senior Frontend Engineer',
      role1_company: 'Freelance / Various',
      role1_dates: '2018 – Present',
      role1_description:
        'Designing and implementing user interfaces, design systems, and migrations to modern frameworks.',
      role2_title: 'Frontend Engineer',
      role2_company: 'Past Company',
      role2_dates: '2016 – 2018',
      role2_description: 'Building scalable SPA applications and performance optimization.',
      education_1: 'M.Sc. in Computer Science, University X',
      total_experience_big: '8+',
      total_experience_label: 'Years of experience',
      education_subtitle: 'My formal education and relevant qualifications.',
      certificates_heading: 'Certificates',
      certificates_subtitle: 'Selected certifications and trainings.'
    },
  },
}

export const i18n = createI18n({ legacy: false, locale: 'pl', fallbackLocale: 'en', messages })

export default i18n
