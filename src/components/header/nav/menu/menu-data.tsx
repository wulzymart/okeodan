export type MenuItemProps = {
  label: string
  href?: string
  items?: MenuItemProps[]
}

export const menuData: MenuItemProps[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    items: [
      {
        label: 'About Oke-Odan',
        href: '/about-oke-odan',
      },
      {
        label: 'Oke-Odan History',
        href: '/history-of-oke-odan',
      },
    ],
  },
  {
    label: 'News & Articles',
    href: '/oke-odan-news',
  },
  {
    label: 'Our Communities',
    items: [
      {
        label: 'Ago-Ilaro',
        href: '/communities/ago-ilaro',
      },
      {
        label: 'Ago-Eyo',
        href: '/communities/ago-eyo',
      },
      {
        label: 'Ago-Ilobi',
        href: '/communities/ago-ilobi',
      },
      {
        label: 'Ago-Irinja',
        href: '/communities/ago-irinja',
      },
      {
        label: 'Prides of Oke-Odan',
        href: '/prides-of-oke-odan',
      },
    ],
  },
  {
    label: 'Gallery',
    items: [
      { label: 'Places', href: '/oke-odan-galleries/places' },
      {
        label: 'Events',
        href: '/oke-odan-galleries/events',
      },
      {
        label: 'Festivals',
        href: '/oke-odan-galleries/festivals',
      },
      {
        label: 'Developments',
        href: '/oke-odan-galleries/developments',
      },
    ],
  },
  {
    label: 'OKD-G30',
    href: '/oke-odan-g30',
  },
]
