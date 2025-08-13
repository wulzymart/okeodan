import Image from 'next/image'

export const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/Okeodan-logo.png"
        alt="Oke-odan logo"
        width={120}
        height={30}
        className="cursor-pointer"
      />
    </div>
  )
}
export const Icon = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/Okeodan-logo.png"
        alt="Oke-odan logo"
        width={30}
        height={30}
        className="cursor-pointer"
      />
    </div>
  )
}
