const Question = ()=>{
        return (
            <div className="relative isolate   overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
  <div className="lg:relative lg:left-[300px] lg:top-[-50px] ">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <div className="max-w-xl lg:max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Have a question?</h2>
        <p className="mt-4 text-lg leading-8 text-gray-300">Our Community will help you like family</p>
        <div className="mt-6 flex max-w-md gap-x-4 w-[1000px] h-[200px]">
          <label for="email-address" className="sr-only"></label>
          <textarea id="email-address" name="email" type="email" required className="lg:w-[900px] min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Question"/>
          <button type="submit" className="lg:h-10 flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Submit</button>
        </div>
      </div>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
       
      </dl>
    </div>
  </div>
 
</div>
        )
}
export default Question