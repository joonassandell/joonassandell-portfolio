import { type Category, CATEGORY_NAME, type Milestone } from '../'
import { type Optional } from '@/types'

const data: Optional<Milestone, 'category' | 'categoryName'>[] = [
  /* =======================================
   * Portfolio
   * ======================================= */

  {
    date: '2024-08-06',
    event: 'Launched UI Laboratory',
    major: true,
    url: 'https://x.com/joonassandell/status/1820739735939146047',
  },
  {
    date: '2023-07-10',
    event: 'Launched my portfolio',
    major: true,
    url: 'https://twitter.com/joonassandell/status/1678358514350137344',
  },

  /* =======================================
   * Freepress
   * ======================================= */

  {
    date: '2026-06-15',
    event: 'New Freepress marketing materials including Series A deck',
    url: '/feed',
  },
  {
    date: '2025-08-01',
    event: 'Shipped Freepress iOS & Android app',
    highlight: true,
    major: true,
    url: 'https://freepress.ai/download',
  },
  {
    date: '2025-04-01',
    event: 'Shipped Freepress web app',
    highlight: true,
    major: true,
    url: 'https://freepress.ai',
  },
  {
    date: '2025-05-03',
    event: 'Launched Freepress pre-launch landing website',
    url: 'https://freepress.ai',
  },
  {
    date: '2025-02-10',
    event: 'Designed initial Freepress brand & design system',
    url: '/feed',
  },

  /* =======================================
   * Biocode
   * ======================================= */

  {
    date: '2023-03-07',
    event: 'Launched Biocode website 2.0',
    major: true,
    url: '/biocode',
  },
  {
    date: '2022-08-01',
    event: 'Launched Biocode for producers',
    major: true,
    url: 'https://biocode.io/producers-and-farmers',
  },
  {
    date: '2022-01-26',
    event: 'Launched Biocode for reporting service',
    major: true,
    url: 'https://report.biocode.io',
  },
  {
    date: '2021-05-01',
    event: 'Launched Biocode for products MVP',
    major: true,
    url: 'https://biocode.io/sustainable-food-production/',
  },
  {
    date: '2021-01-26',
    event: 'Launched Biocode website',
    url: 'https://twitter.com/joonassandell/status/1757856709563785723',
  },

  /* =======================================
   * Mediasignal
   * ======================================= */

  {
    date: '2020-07-10',
    event: 'Launched Hankkija website',
    url: '/more-work#hankkija',
  },
  {
    date: '2020-08-31',
    event: 'Launched Katepal website',
  },
  {
    date: '2020-09-26',
    event: 'Launched SOS-Lapsikylä website',
  },
  {
    date: '2019-12-05',
    event: 'Launched Ursa website',
  },
  {
    date: '2019-11-19',
    event: 'Launched Hukka Food Waste web app',
    url: '/more-work#hukkas',
  },
  {
    date: '2019-09-27',
    event: 'Launched SEY website',
  },
  {
    date: '2019-09-06',
    event: 'Launched Medetter OmaKlinikka web app',
  },
  {
    date: '2019-07-19',
    event: 'Launched redesigned Mediasignal website',
    major: true,
    url: '/mediasignal',
  },
  {
    categoryName: 'Project proposal',
    date: '2019-03-15',
    event: 'Proposed NCC Smart Choices concept',
  },
  {
    categoryName: 'Project proposal',
    date: '2019-01-09',
    event: 'Proposed new SOS-Lapsikylä website UI',
  },
  {
    date: '2018-10-05',
    event: 'Launched HW-Company e-commerce websites',
  },
  {
    categoryName: 'Project delivery',
    date: '2018-09-18',
    event: 'Delivered NCC Asphalt project',
  },
  {
    date: '2018-05-29',
    event: 'Launched Katepal Warranty Certificate web app',
  },
  {
    date: '2018-03-27',
    event: 'Launched Enervent website',
  },
  {
    date: '2018-03-10',
    event: 'Launched Dahl website',
  },
  {
    date: '2018-02-16',
    event: 'Launched Fair Trade website',
  },
  {
    date: '2018-02-12',
    event: 'Launched Jetecon website',
  },
  {
    date: '2017-11-09',
    event: 'Launched TAKK website',
    url: '/more-work#takk',
  },
  {
    date: '2017-10-23',
    event: 'Launched Messukeskus Document Generator web app',
  },
  {
    date: '2017-06-30',
    event: 'Launched Coxa Pro web service',
  },
  {
    date: '2017-05-19',
    event: 'Launched Rubik PIM web app',
    url: '/more-work#rubik',
  },
  {
    date: '2017-04-20',
    event: 'Launched Coxa website',
  },
  {
    date: '2017-02-15',
    event: 'Launched Kariplast website',
  },
  {
    date: '2017-11-08',
    event: 'Launched Tietotaito Group website',
  },
  {
    categoryName: 'Project proposal',
    date: '2016-12-12',
    event: 'Proposed new Jatke website UI',
  },
  {
    date: '2016-10-25',
    event: 'Launched Kia Business website',
  },
  {
    date: '2016-07-06',
    event: 'Launched Oras website',
    highlight: true,
    major: true,
    url: '/oras',
  },
  {
    categoryName: 'Project proposal',
    date: '2016-06-01',
    event: 'Proposed Ratina native app UI',
  },
  {
    date: '2016-03-17',
    event: 'Launched Lukupassi web application',
    url: '/more-work#academic-bookstore',
  },
  {
    date: '2016-03-07',
    event: 'Launched Academic Bookstore website',
    highlight: true,
    major: true,
    url: '/more-work#academic-bookstore',
  },
  {
    date: '2016-02-10',
    event: 'Launched Puhdaspalvelu website',
  },
  {
    date: '2016-01-05',
    event: 'Launched Jollas website',
  },
  {
    date: '2015-12-04',
    event: 'Launched Movere website',
  },
  {
    date: '2015-11-25',
    event: 'Launched Tampereen Steinerkoulu website',
  },
  {
    date: '2015-10-09',
    event: 'Launched Finnpark website',
  },
  {
    date: '2015-08-20',
    event: 'Launched Avecra website',
  },
  {
    category: 'feature-release',
    categoryName: 'Feature release',
    date: '2015-05-13',
    event: 'Launched Finnpark Parking Reservation portal',
  },
  {
    date: '2015-05-04',
    event: 'Launched Finnpark Parking Guidance web app',
    url: '/more-work#finnpark',
  },
  {
    date: '2015-03-15',
    event: 'Launched Finnpark Parking Administration web app',
  },
  {
    date: '2015-03-09',
    event: 'Launched Finnpark Campus Parking web app',
  },
  {
    date: '2015-01-15',
    event: 'Launched Finnpark Parking Benefit web app',
  },
  {
    date: '2015-06-16',
    event: 'Launched Dahl Extranet web app',
  },
  {
    date: '2015-06-08',
    event: 'Launched Tampereen vuokra-asunnot website',
  },
  {
    date: '2015-04-07',
    event: 'Launched Mediasignal website',
  },
  {
    date: '2014-12-12',
    event: 'Launced Paunu website',
  },
  {
    date: '2014-12-25',
    event: 'Launched Hotelzon website',
  },
  {
    date: '2014-12-23',
    event: 'Launched Meiranova website',
  },
  {
    date: '2014-12-04',
    event: 'Launched Huhtahyvät website',
  },
  {
    date: '2014-11-21',
    event: 'Launched Finnpark Parking Pre-reservation web app',
  },
  {
    date: '2014-10-30',
    event: 'Launched Kesla website',
  },
  {
    date: '2014-10-17',
    event: 'Launched Valli website',
  },

  /* =======================================
   * Personal company / Personal
   * ======================================= */

  {
    date: '2020-08-27',
    event: 'Launched Omoroi website',
    url: '/more-work#omoroi',
  },
  {
    date: '2016-12-21',
    event: 'Launched Rebirth UI',
    url: 'https://github.com/joonassandell/rebirth',
  },
  {
    date: '2014-03-21',
    event: 'Launched Tampere Paikkatieto web service',
  },
  {
    date: '2013-10-17',
    event: 'Launched Adoptoi monumentti website',
  },
  {
    date: '2013-05-14',
    event: 'Launched City of Tampere website',
    highlight: true,
    major: true,
  },
  {
    date: '2013-04-30',
    event: 'Launched Museoiden Yö website',
  },
  {
    date: '2013-02-11',
    event: 'Launched Kulttuuripalvelut website',
  },
  {
    date: '2013-01-04',
    event: 'Launched Pala Taivasta website',
  },
  {
    date: '2012-11-07',
    event: 'Launched Fullsize website',
  },
  {
    date: '2012-12-06',
    event: 'Launched Pirfest website',
  },
  {
    date: '2011-05-30',
    event: 'Launched SF3D website',
  },
  {
    date: '2011-06-04',
    event: 'Launched Aktiivi-Fysioterapia website',
  },
  {
    date: '2011-02-01',
    event: 'Launched Tampere Jazz Happening 2011 website',
  },
  {
    date: '2011-01-01',
    event: 'Launched Tampereen Sävel 2011 website',
  },
  {
    date: '2010-11-29',
    event: 'Launched 3D Tammerkoski web experience',
  },
  {
    date: '2010-09-01',
    event: 'Launched Museokompassi website',
  },
  {
    date: '2010-03-01',
    event: 'Launched Tampere Biennale 2010 website',
  },
  {
    date: '2010-02-16',
    event: 'Launched Vaka website',
  },
  {
    date: '2010-02-01',
    event: 'Launched Tampere Jazz Happening 2010 website',
  },
  {
    date: '2010-01-01',
    event: 'Launched Tampere Music Festivals website',
  },
  {
    date: '2009-04-05',
    event: 'Launched Yhteisötanssi website',
  },
  {
    date: '2008-04-05',
    event:
      'Launched various Tampere Music Festival websites and graphic material',
    major: true,
  },

  /* =======================================
   * Vapriikki
   * ======================================= */

  {
    date: '2014-06-25',
    event: 'Launched Vapriikki website',
    major: true,
  },
  {
    date: '2014-03-10',
    event: 'Launched ICEE website',
  },
  {
    date: '2013-10-25',
    event: 'Launched Siiri Photo Gallery web service',
  },
  {
    date: '2013-10-08',
    event: 'Launched Museokauppa website',
  },
  {
    date: '2013-07-07',
    event: 'Launched and curated Vapriikki Exhibition Guide mobile web app',
  },
  {
    date: '2013-02-21',
    event: 'Launched Vapriikki Twitter Wall application',
  },
  {
    date: '2012-02-28',
    event: 'Launched Lennossa exhibition website and graphic material',
  },
  {
    date: '2012-10-10',
    event: 'Launched redesigned Amuri museokortteli website',
  },
  {
    date: '2012-11-22',
    event: 'Launched Museum Guide kiosk web app',
  },
  {
    date: '2012-11-10',
    event: 'Launched Muumilaakso website',
  },
  {
    date: '2011-11-25',
    event: 'Launched Nuorisokulttuuri Nyt website',
  },
  {
    date: '2011-09-29',
    event: 'Launched Täyttä Kaasua website',
  },
  {
    date: '2011-11-28',
    event: 'Launched Suomalainen Talvipäivä web experience',
  },
]

export const PROJECT: Milestone[] = data.map(e => ({
  ...e,
  category: 'project' as Category,
  categoryName: e?.categoryName ?? CATEGORY_NAME.project,
}))
