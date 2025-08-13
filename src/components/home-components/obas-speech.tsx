import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
const oba = {
  name: 'HRM OBA DR. O. O. FAGBENRO',
  title: 'OLOKEODAN OF OKEODAN-YEWA',
}
const ObasSpeech = () => {
  return (
    <div className="w-full bg-orange-200/50">
      <div className="w-full md:w-[90%] mx-auto lg:h-[600px] px-10 py-8 md:px-20 overflow-hidden sm:grid sm:grid-cols-2 gap-10 items-center relative">
        <div className="w-full md:w-[90%] h-[400px] md:h-[400px] lg:h-[500px] border-2 border-solid border-[var(--accent)] flex flex-col gap-2 items-center">
          <div
            style={{ backgroundImage: 'url(/Okeodan-king.png)' }}
            className="w-[100%] md:w-[90%] lg:w-[300px] h-[80%] border-2 border-solid border-[var(--accent)] rounded-full bg-cover bg-top mx-auto"
          ></div>
          <div className="bg-slate-50 border-2 border-solid border-[var(--accent)] w-fit px-8 space-y-4 py-4">
            <h4 className="font-playfair text-gray-800 leading-none text-xl font-bold">
              {oba.name}
            </h4>
            <p className="poppins-semibold text-gray-800 leading-none">{oba.title}</p>
          </div>
        </div>

        <div className="max-sm:mt-10 w-full h-[400px] md:h-[400px] lg:h-[500px]">
          <ScrollArea className="w-full h-full overflow-hidden mx-auto">
            <h4 className="font-playfair font-bold text-xl">Kabiyesi&apos;s Speech</h4>
            <p className="tracking-wider leading-6 text-lg">
              On behalf of the good people of Oke-Odan and myself, the Oloke-Odan of Oke-Odan Land,
              I want to welcome you to this website and to Oke-Odan Yewa, one of the fast growing
              towns in Ogun State, Nigeria in West Africa. Oke-Odan is an ancient town established
              far back in the early 1800. We are peaceful, friendly, culture oriented people, and
              fast growing to meet the economic and social pace in Nigeria. Our people are very
              welcoming and we always make our visitors our own in Oke-Odan. The landmark of
              Oke-Odan is a unique one, it is one of the major towns along the international road
              that connects our country Nigeria to the Republic of Benin. We are one of the major
              border towns along Idiroko – Ota – Lagos road. The Nigeria-Republic of Benin
              international road cuts across Oke-Odan town right in the middle. We have many tourism
              attractions to visit when you stop by. We have very nice hotels with security when you
              want to spend the night or rest. We have so much fresh farm produce to stop and buy
              along the road at Oke-Odan. You can visit Oke-Odan to witness our internationally
              recognized celebration of Oke-Odan Cultural Festival. We encourage you to come and
              join us in developing Oke-Odan further by starting and raising your family at Oke-Odan
              or by growing your business at Oke-Odan. Our lands acquisition are very affordable.
              We, the good people of Oke-Odan says, Thank you for visiting this website and for
              visiting Oke-Odan..
            </p>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export default ObasSpeech
