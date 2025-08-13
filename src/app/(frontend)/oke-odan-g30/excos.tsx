import React from 'react'

const ExcoMember = ({
  img,
  position,
  zone,
  name,
}: {
  img: string
  position: string
  zone: string
  name: string
}) => {
  const defaultImage = '/male-placeholder.jpeg'
  return (
    <div className="w-[350px] h-[350px] py-2 border-2 border-solid border-[var(--accent)] flex flex-col gap-2 items-center">
      <div
        className="!w-[80%] h-[300px] border-2 border-solid border-[var(--accent)] rounded-full bg-cover bg-top mx-auto"
        style={{ backgroundImage: 'url(' + img || defaultImage + ')' }}
      ></div>
      <div className="bg-slate-50 border-2 border-solid border-[var(--accent)] w-[90%] px-8 text-center capitalize">
        <h4 className="font-playfair text-gray-800 leading-none my-2">{name}</h4>
        <p className="poppins-medium text-gray-700 leading-none my-1">{position}</p>
        <small className="poppins-light text-gray-600 leading-none my-1">{zone}</small>
      </div>
    </div>
  )
}

const Excos = () => {
  const excos = [
    {
      name: 'Hon. Chief Abayomi Oluyomi',
      position: 'Chairman',
      img: '/okd30/excos/abayomi-oluyomi.jpg',
    },
    {
      name: 'Alhaji Mukaila Bashorun',
      position: 'Vice Chairman',
      zone: 'Oke-Odan',
      img: '/okd30/excos/mukaila-bashorun.jpg',
    },
    {
      name: 'Chief Mrs. Kemilola Adeeko',
      position: 'Vice Chairman',
      zone: 'Diaspora',
      img: '/okd30/excos/kemilola-adeeko.jpg',
    },
    {
      name: 'Chief Aliyu Fagbohun',
      position: 'Vice Chairman',
      zone: 'Owode',
      img: '/okd30/excos/aliyu-fagbohun.jpg',
    },
    {
      name: 'Dr. Haruna Ajibode',
      position: 'Vice Chairman',
      zone: 'Abeokuta/Sagamu',
      img: '/okd30/excos/haruna-ajibode.jpg',
    },
    {
      name: 'Chief Dr. Adebisi Odunlami',
      position: 'Vice Chairman',
      zone: 'Lagos',
      img: '/okd30/excos/adebisi-odunlami.jpg',
    },
    {
      name: 'Prof. Idowu Adegbite',
      position: 'General Secretary',
      img: '/okd30/excos/idowu-adegbite.jpg',
    },
    {
      name: 'Akin Olakunle',
      position: 'Asst. Secretary',
      img: '/okd30/excos/akin-olakunle.jpg',
    },
    {
      name: 'Mr. Oluyemi Adebesin',
      position: 'Treasurer / Financial Secretary',
      img: '/okd30/excos/yemi-adebesin.jpg',
    },
    {
      name: 'Chief Sina Aderohunmu',
      position: 'Public Relations Officer',
      img: '/okd30/excos/sina-aderohunmu.jpg',
    },
    {
      name: 'Chief Barr. Israel Talabi',
      position: 'Legal Adviser',
      img: '/okd30/excos/israel-talabi.jpg',
    },
    {
      name: 'Mr Olufemi Dokunmu',
      position: 'Media Consultant',
      img: '/okd30/excos/femi-dokunmu.jpg',
    },
  ]
  return (
    <section className="bg-orange-200/50 mt-8 py-10">
      <div className="w-[90%] mx-auto text-center">
        <h3 className="font-playfair text-3xl font-bold my-6">Our Executives</h3>
        <div className="flex flex-wrap gap-10 justify-center my-10">
          {excos.map((exco) => (
            <ExcoMember
              key={exco.name}
              name={exco.name}
              position={exco.position}
              zone={exco.zone || ''}
              img={exco.img || '/male-placeholder.jpeg'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Excos
