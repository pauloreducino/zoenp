export const SITE = {
  name:      'ZOENP Solutions',
  tagline:   'Technology Solutions in Pompano Beach, FL',
  url:       'https://www.zoenpsolutions.com',
  address:   '2335 E Atlantic BLVD 300-20, Pompano Beach, FL 33062',
  phone:     '(INSERT PHONE)',
  email:     'contact@zoenpsolutions.com',
  instagram: '@zoenpsolutions',
  igUrl:     'https://instagram.com/zoenpsolutions',
  cro:       'ComputerRepairService',
  geo: {
    lat: '26.2379',
    lng: '-80.1248',
  },
  // Parent company
  parent: {
    name:    'Suporte Informática',
    address: 'Rua Fiuza Lima, 25 sala 1, Itajaí/SC — Brasil',
    url:     'https://www.suporteshop.com.br',
    years:   27,
  },
} as const;

export const NAV_LINKS = [
  { label: 'Home',       href: '/'        },
  { label: 'About Us',   href: '/about'   },
  { label: 'Services',   href: '/services'},
  { label: 'Contact',    href: '/contact' },
] as const;

export const SERVICES = [
  {
    id:          'technology',
    title:       'Technology Solutions',
    description: 'End-to-end technology solutions tailored for businesses of all sizes — from hardware procurement to full infrastructure setup.',
    icon:        'Monitor',
    coming:      true,
  },
  {
    id:          'it-support',
    title:       'IT Support',
    description: 'Professional IT support and maintenance services. Computer repairs, notebook servicing, and printer troubleshooting.',
    icon:        'Wrench',
    coming:      true,
  },
  {
    id:          'network',
    title:       'Network Solutions',
    description: 'Structured cabling, Wi-Fi deployment, and network infrastructure design for homes and commercial spaces.',
    icon:        'Network',
    coming:      true,
  },
] as const;

export const DIFFERENTIALS = [
  {
    icon:  'Award',
    title: '27 Years of Expertise',
    desc:  'Backed by our parent company Suporte Informática, founded in 1997 — with nearly three decades of proven excellence in tech solutions.',
  },
  {
    icon:  'Users',
    title: 'Trusted by Hundreds',
    desc:  'Hundreds of satisfied clients across multiple states in Brazil, and now expanding to serve businesses and residents in the United States.',
  },
  {
    icon:  'Zap',
    title: 'Fast & Reliable Support',
    desc:  'We understand that downtime costs money. Our team is committed to fast response times and efficient resolutions.',
  },
  {
    icon:  'Shield',
    title: 'Quality Products',
    desc:  'We source and sell only quality-certified equipment and components, ensuring longevity and performance for every client.',
  },
] as const;
