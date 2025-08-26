const Loader = () => {
  return (
  <section className="h-full w-full flex justify-center items-center">

          <div className="text-center">
              <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-white mx-auto"></div>
              <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
          </div>

  </section>
  );
};

export default Loader;