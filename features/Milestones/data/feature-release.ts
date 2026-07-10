import { type Category, CATEGORY_NAME, type Milestone } from '../'
import { type Optional } from '@/types'

const data: Optional<Milestone, 'category' | 'categoryName'>[] = [
  /* =======================================
   * Portfolio
   * ======================================= */

  {
    date: '2024-06-07',
    event: 'Shipped updated CV 2024',
    url: 'https://x.com/joonassandell/status/1801885988580442466',
  },
  {
    date: '2024-05-20',
    event: 'Shipped Milestones page',
    url: 'https://x.com/joonassandell/status/1792539982311153927',
  },

  /* =======================================
   * Freepress
   * ======================================= */

  {
    date: '2026-05-01',
    event:
      'Polished various Freepress mobile core features: audio player, story swiping, announcements and pull to refresh',
    url: 'https://freepress.ai/download',
  },
  {
    date: '2026-04-08',
    event: 'Shipped Freepress Just Now short news for mobile',
    major: true,
    url: 'https://freepress.ai/download',
  },
  {
    date: '2026-05-26',
    event: 'Shipped Freepress mobile compact views',
    url: 'https://freepress.ai/download',
  },
  {
    date: '2026-02-15',
    event: 'Shipped Freepress Premium Stories',
    major: true,
    url: 'https://freepress.ai/premium',
  },
  {
    date: '2025-12-11',
    event: 'Shipped Freepress Daily Brief notifications',
    major: true,
    url: 'https://x.com/freepressai/status/2061455512307224990',
  },

  /* =======================================
   * Biocode
   * ======================================= */

  {
    date: '2024-09-22',
    event: 'Rewrote the Biocode case study',
    url: 'https://x.com/joonassandell/status/1848620149613433220',
  },
  {
    categoryName: 'Feature WIP',
    date: '2024-04-20',
    event: 'Designed new Biocode application UI',
    major: true,
  },
  {
    date: '2024-01-01',
    event: 'Shipped stable Biocode Design System (BDS)',
    url: 'https://twitter.com/joonassandell/status/1733608503040741621',
  },
  {
    date: '2023-08-17',
    event: "Shipped light mode for Biocode's website",
    url: 'https://twitter.com/joonassandell/status/1733608503040741621',
  },
  {
    date: '2022-10-04',
    event: 'Shipped Biocode Carbon Footprint label',
  },
  {
    date: '2021-02-18',
    event: 'Shipped Biocode Design System MVP',
    url: 'https://github.com/biocodeio',
  },
  {
    date: '2021-07-21',
    event: 'Redesigned Valio Carbo® calculator app',
    url: 'https://www.valio.fi/uutiset/valio-ottaa-kayttoon-maitotiloille-raataloidyn-ymparistolaskurin-tavoitteena-pienentaa-paastoja-30-lla-5-vuodessa/',
  },

  /* =======================================
   * Mediasignal
   * ======================================= */

  {
    date: '2019-09-26',
    event: 'Shipped enhanced Podium web app UI',
  },
  {
    date: '2019-01-09',
    event: 'Re-engineered Dictum website faster',
  },
  {
    date: '2017-06-26',
    event: 'Shipped enhanced Ekovilla website UI',
  },
  {
    date: '2016-01-19',
    event: 'Shipped Mackays campaign for Finefoods website',
  },
  {
    date: '2015-09-12',
    event: 'Shipped enhanced SOS-Lapsikylä website',
  },
  {
    date: '2014-09-16',
    event: 'Shipped enhanced Kanto marketing page',
  },
]

export const FEATURE_RELEASE: Milestone[] = data.map(m => ({
  ...m,
  category: 'feature-release' as Category,
  categoryName: m.categoryName ?? CATEGORY_NAME['feature-release'],
}))
