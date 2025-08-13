import PageHeading from '@/components/page-heading'
import Link from 'next/link'
import React from 'react'

const AboutOkeOdanPage = () => {
  return (
    <>
      <PageHeading
        bigText="Oke-odan"
        smallText="About Our Community"
        bgImg="/okeodan-nav-bg.jpeg"
      />
      <main className="my-10 text-center">
        <section className="container mx-auto my-14 max-sm:w-[90%]">
          <h2 className="font-playfair text-3xl">Oke-Odan people</h2>
          <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <p className="poppins-regular">
                <strong>Oke-Odan</strong> a prominent ancient town of Yewa land of Ogun state,
                Nigeria, established far back in the early 1800. We are peaceful, friendly, culture
                oriented people, and fast growing to meet the economic and social pace in Nigeria.
                Our people are very welcoming and we always make our visitors our own in Oke-Odan.
                The landmark of Oke-Odan is a unique one, it is one of the major towns along the
                international road that connects our country Nigeria to the Republic of Benin.
              </p>
            </div>
            <div
              className="w-full md:w-1/2 h-[300px] bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: 'url(/Okeodan-logo.png)' }}
            ></div>
          </div>
        </section>
        <section className="container mx-auto my-14 max-sm:w-[90%] space-y-4">
          <h3 className="font-playfair text-3xl">History of Oke-Odan</h3>
          <p className="poppins-regular md:w-[700px] mx-auto">
            Oke-Odan town originated from immigrants of north central Yewa towns. The name derives
            from the landscape, “Oke arin Odan,” meaning hill in the grass field. The town evolved
            into four major quarters: Ago Lobi, Ago Erinja, Ago Eyo, and Ago Ilaro.
          </p>
          <p className="poppins-regular">
            <Link
              className="no-underline text-white bg-orange-500 hover:bg-orange-700 px-2 py-1 rounded"
              href="/history-of-oke-odan"
            >
              Read more...
            </Link>
          </p>
        </section>

        <section className="container mx-auto my-14 max-sm:w-[90%] space-y-4">
          <h2 className="font-playfair text-3xl">Oke-Odan Culture & Community</h2>
          <p className="poppins-regular">
            Oke-Odan boasts a rich tapestry of cultural practices and beliefs. The town’s original
            inhabitants practiced traditional religions, which continue to thrive alongside the more
            recently introduced Christianity and Islam. This blend of faiths contributes to the
            town’s vibrant religious diversity.
          </p>
          <p className="poppins-regular">
            Historically, Oke-Odan played a significant role as a bustling trade hub, particularly
            during the slave trade era. Its strategic location made it a focal point for commerce
            and economic activity.
          </p>
          <p className="poppins-regular">
            Today, Oke-Odan’s economy is characterized by the entrepreneurial spirit of its people.
            They engage in various forms of trade and business, contributing to the town’s
            reputation as a center of enterprise and economic growth.
          </p>
          <p className="poppins-regular">
            Despite the variety of religious beliefs, Oke-Odan is known for its atmosphere of
            religious harmony, where followers of different faiths coexist peacefully and contribute
            to the town’s unique cultural identity.
          </p>
        </section>
        <section className="container mx-auto my-14 max-sm:w-[90%] space-y-4">
          <h2 className="font-playfair text-3xl">Oke-Odan Anthem</h2>
          <div className="flex flex-col justify-center gap-10 items-center">
            <div className="w-fit flex flex-col items-center">
              <p className="poppins-regular w-fit">
                Ilu mi <br />
                Ilu Oke-Odan
              </p>
              <p className="poppins-regular w-fit">
                O dara
                <br />O lewa
                <br />
                Ilu oloyin
              </p>
              <p className="poppins-regular w-fit">
                Ko si bi ki bi
                <br />
                Ti mo lewa,
                <br />
                Lori le aiye
              </p>
              <p className="poppins-regular w-fit">
                Ti mo le gbagbe
                <br />
                Ilu Oke-Odan
              </p>
            </div>
            <div className="w-fit">
              <audio controls>
                <source src="assets/oke-odan-anthem.m4a" type="audio/mp4" />
              </audio>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AboutOkeOdanPage

export const metadata = {
  title: 'About Oke-Odan',
  description:
    'Learn about Oke-Odan, a fast-growing town in Ogun State, Nigeria. Discover our peaceful and culture-oriented community, explore our tourism attractions, and enjoy fresh farm produce. Visit Oke-Odan, a major border town along the Nigeria-Republic of Benin international road. Join us for the Oke-Odan Cultural Festival and consider raising your family or growing your business here.',
  'og:title': 'About Oke-Odan',
  'og:url': 'https://oke-odan.org/about-oke-odan',
  'og:description':
    'Learn about Oke-Odan, a fast-growing town in Ogun State, Nigeria. Discover our peaceful and culture-oriented community, explore our tourism attractions, and enjoy fresh farm produce. Visit Oke-Odan, a major border town along the Nigeria-Republic of Benin international road. Join us for the Oke-Odan Cultural Festival and consider raising your family or growing your business here.',
  'og:image':
    'https://res.cloudinary.com/olawale-mart/image/upload/v1635730000/oke-odan/oke-odan-landscape.jpg',
  'og:image:alt': 'Oke-Odan Landscape',
  'og:image:width': '1200',
  'og:image:height': '630',
}
