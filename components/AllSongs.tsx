import Image from "next/image"

const AllSongs = () => {
  return (
    <div className="min-h-[90vh] bg-background my-15 p-4 lg:ml-80 rounded-lg mx-4">
      <h2 className="text-2xl text-white mb-3 font-semibold">New songs</h2>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
          <Image src="/images/cover-1.jpeg" alt="cover 1" width={500} height={500} className="w-full h-50 object-cover rounded-md" />
          <div className="mt-2">
            <p className="text-primary-text font-semibold">Rain on Marble Streets</p>
            <p className="text-secondary-text text-sm">By the Lanterns</p>
          </div>
        </div>
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
          <Image src="/images/cover-1.jpeg" alt="cover 1" width={500} height={500} className="w-full h-50 object-cover rounded-md" />
          <div className="mt-2">
            <p className="text-primary-text font-semibold">Rain on Marble Streets</p>
            <p className="text-secondary-text text-sm">By the Lanterns</p>
          </div>
        </div>
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
          <Image src="/images/cover-1.jpeg" alt="cover 1" width={500} height={500} className="w-full h-50 object-cover rounded-md" />
          <div className="mt-2">
            <p className="text-primary-text font-semibold">Rain on Marble Streets</p>
            <p className="text-secondary-text text-sm">By the Lanterns</p>
          </div>
        </div>
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
          <Image src="/images/cover-1.jpeg" alt="cover 1" width={500} height={500} className="w-full h-50 object-cover rounded-md" />
          <div className="mt-2">
            <p className="text-primary-text font-semibold">Rain on Marble Streets</p>
            <p className="text-secondary-text text-sm">By the Lanterns</p>
          </div>
        </div>
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
          <Image src="/images/cover-1.jpeg" alt="cover 1" width={500} height={500} className="w-full h-50 object-cover rounded-md" />
          <div className="mt-2">
            <p className="text-primary-text font-semibold">Rain on Marble Streets</p>
            <p className="text-secondary-text text-sm">By the Lanterns</p>
          </div>
        </div>
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
          <Image src="/images/cover-1.jpeg" alt="cover 1" width={500} height={500} className="w-full h-50 object-cover rounded-md" />
          <div className="mt-2">
            <p className="text-primary-text font-semibold">Rain on Marble Streets</p>
            <p className="text-secondary-text text-sm">By the Lanterns</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllSongs