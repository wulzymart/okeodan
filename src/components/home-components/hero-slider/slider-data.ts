export type SliderItem = {
  title: string
  bgImage: string
  info: string
  buttonTitle: string
  link: string
}

export const sliderData: SliderItem[] = [
  {
    title: 'A Peaceful and Friendly Community',
    bgImage: '/okeodan-nav-bg.jpeg',
    info: 'Oke-Odan is an ancient town in Ogun state Nigeria. Home to a peaceful, friendly, culture oriented people divided into 4 communities',
    buttonTitle: 'About us',
    link: '/about-oke-odan',
  },
  {
    title: 'Echoes of Oke Odan Legacy',
    bgImage: '/oke-odan-festival.jpg',
    info: 'Oke-Odan`s founding population consisted of immigrants from the north central Yewa towns of Ilobi, Erinja, Eyo-bode, Ilaro, Shaala, Imasayi, Ibese and Isaga.',
    buttonTitle: 'Our History',
    link: '/history-of-oke-odan',
  },
  {
    title: 'Oke-Odan Group of 30',
    bgImage: '/okd-g30.jpeg',
    info: 'Oke-Odan Group of 30 or G30 is the premier forum of Oke-Odan elites ready for the challenge call to Oke-Odan. It is the responsibility of Oke-Odan G30 or Group to secure and strengthen the development of Oke Odan',
    buttonTitle: 'Read more',
    link: '/oke-odan-g30',
  },
]
