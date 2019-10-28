const VW = [
  {
    path: 'no-vw',
    name: 'NOVw',
    component: () => import('@/vw-views/no-vw')
  },
  {
    path: 'w-h',
    name: 'WH',
    component: () => import('@/vw-views/w-h')
  },
  {
    path: 'demo-1px',
    name: 'Demo1px',
    component: () => import('@/vw-views/demo-1px')
  }
]
export default VW