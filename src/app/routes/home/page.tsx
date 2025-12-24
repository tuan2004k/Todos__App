import logo from '@/assets/logo.png'
import { Head } from '@/components/seo'

const Home = () => {
  return (
    <>
      <Head description="Welcome to bulletproof react" />
      <div className="flex h-screen items-center bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <img src={logo} alt="react" />
        </div>
      </div>
    </>
  )
}

export default Home
