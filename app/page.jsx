import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">discover & share
        <br className='max-md:hidden'/>
      <span className="orange_gradient text-center"> ai-powered prompts</span>
      </h1>
      <p className="desc text-center">
        promptopia is an open-source ai prompting tool for modern world to discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  )
}

export default Home;
