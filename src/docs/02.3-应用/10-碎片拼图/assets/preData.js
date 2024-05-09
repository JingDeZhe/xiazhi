import { uid } from '@/utils'

export const _picture = {
  title: '见鹿',
  fragments: [
    {
      id: uid(),
      fill: '#D66576',
      points: [
        [30, 30],
        [60, 60],
        [90, 30],
      ],
    },
    {
      id: uid(),
      fill: '#CD9B62',
      points: [
        [50, 30],
        [80, 40],
        [100, 20],
      ],
    },
  ],
}
