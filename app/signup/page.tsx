import Image from "next/image"
import Link from "next/link"

const Page = () => {
  return (
    <div className="h-screen flex justify-center items-center w-full bg-hover">
      <div className="bg-background flex flex-col items-center px-6 lg:px-12 py-6 rounded-md max-w-[400px] w-[90%]">
        <Image src="/images/logo.png" alt="logo" width={300} height={300} className="w-11 h-11" />
        <h2 className="text-2xl font-bold text-white my-2 mb-8 text-center">Sign Up to Spotify</h2>
        <form>
          <input type="text" placeholder="Your Name" className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
          <input type="text" placeholder="Your Email" className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
          <input type="text" placeholder="Your Password" className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
          <button className="bg-primary py-3 rounded-full w-full font-bold cursor-pointer">Continue</button>
          <div className="text-secondary-text text-center my-6">
            <span>Already have an account?</span>
            <Link href="/login" className="ml-2 text-white underline hover:text-primary">Login now</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page