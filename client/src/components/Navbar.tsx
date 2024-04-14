import Logo from "@assets/ScienceNexus_Logo.svg"

export default function Topbar() {
  return (
    <div className='w-full h-14 flex justify-center items-center '>
      <>
      <img src={Logo} className="w-12 bg-center" />
      <h1 className="ml-1 text-2xl font-bold italic">Science Nexus</h1>
      </>
    </div>
  )
}
