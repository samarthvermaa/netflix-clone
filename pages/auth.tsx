const Auth = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black h-full w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex flex-row justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl font-semibold mb-8">Sign In</h2>
            <div className="flex flex-col gap-4">
              <div className="bg-red-100">A</div>
              <div className="bg-red-100">D</div>
              <div className="bg-red-100">C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
