import type { ResumeCompany } from './types'

/**
 * Employment / company history (newest first).
 * Localized role, summary and impact bullets live in i18n under `resume.companies.<i18nKey>`.
 */
export const resumeCompanies: ResumeCompany[] = [
  {
    id: 'shell-recharge',
    i18nKey: 'shellRecharge',
    name: 'Shell Recharge',
    url: 'https://www.shell.com',
    start: '2021-05',
    end: '2025-05',
    stack: {
      backend: [
        'Go',
        'PostgreSQL',
        'Kafka',
        'Flink',
        'GraphQL',
        'Apollo Federation',
        'gRPC',
        'REST',
        'Node.js',
      ],
      devops: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitLab CI', 'Vault', 'Python'],
    },
  },
  {
    id: 'herolynx',
    i18nKey: 'herolynx',
    name: 'HeroLynx',
    start: '2015-01',
    end: '2021-11',
    stack: {
      frontend: ['React'],
      backend: ['Go', 'PostgreSQL', 'FaunaDB', 'GraphQL', 'Firebase'],
      devops: ['GCP', 'Kubernetes', 'Terraform'],
      mobile: ['Kotlin', 'Android'],
    },
  },
  {
    id: 'form3',
    i18nKey: 'form3',
    name: 'Form3',
    url: 'https://www.form3.tech',
    start: '2018-12',
    end: '2021-04',
    stack: {
      backend: ['Java', 'Spring', 'Go', 'PostgreSQL', 'NATS', 'PACT'],
      devops: [
        'Docker',
        'Kubernetes',
        'Consul',
        'Vault',
        'Kong',
        'Linkerd',
        'AWS',
        'Terraform',
        'GitHub Actions',
        'Prometheus',
        'Grafana',
        'ELK',
      ],
    },
  },
  {
    id: 'huuuge-games',
    i18nKey: 'huuugeGames',
    name: 'Huuuge Games',
    url: 'https://huuugegames.com',
    start: '2017-11',
    end: '2018-11',
    stack: {
      backend: ['Scala', 'Akka', 'Go', 'ScyllaDB', 'PostgreSQL', 'NATS'],
      devops: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS'],
    },
  },
  {
    id: 'siili',
    i18nKey: 'siili',
    name: 'Siili Solutions Poland',
    url: 'https://www.siili.com',
    start: '2014-04',
    end: '2017-06',
    stack: {
      backend: ['Java', 'Spring', 'Scala', 'Akka', 'Kotlin', 'Go', 'PostgreSQL', 'NATS', 'Kafka'],
      devops: ['Docker', 'Kubernetes', 'Terraform', 'GitLab CI', 'Ansible', 'AWS', 'Azure'],
      mobile: ['Android'],
    },
  },
  {
    id: 'credit-suisse',
    i18nKey: 'creditSuisse',
    name: 'Credit Suisse',
    url: 'https://www.credit-suisse.com',
    start: '2013-11',
    end: '2014-04',
    stack: {
      backend: ['Java', 'Spring', 'Oracle'],
    },
  },
  {
    id: 'rec-global',
    i18nKey: 'recGlobal',
    name: 'REC Global',
    start: '2011-12',
    end: '2013-10',
    stack: {
      backend: ['Java', 'Spring', 'Scala', 'PostgreSQL'],
      devops: ['Ansible', 'AWS', 'Bash'],
    },
  },
  {
    id: 'capgemini',
    i18nKey: 'capgemini',
    name: 'Capgemini',
    url: 'https://www.capgemini.com',
    start: '2010-09',
    end: '2011-11',
    stack: {
      frontend: ['JavaScript', 'GWT'],
      backend: ['Java', 'Spring', 'Hibernate', 'Oracle', 'PL/SQL', 'Maven', 'Weblogic'],
    },
  },
  {
    id: 'nokia',
    i18nKey: 'nokia',
    name: 'Nokia Solutions and Networks',
    url: 'https://www.nokia.com',
    start: '2007-10',
    end: '2010-08',
    stack: {
      backend: ['Java', 'Spring', 'C++', 'Oracle', 'PL/SQL', 'Python', 'Perl', 'ANTLR', 'XML', 'XSLT'],
      devops: ['Bash'],
    },
  },
]
