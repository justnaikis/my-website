export default function Home() {

  const repeats = 150;
  const itemsLookAtMe = Array.from({ length: repeats }).map((_, i) => (
    <div key={i} className="text-2xl font-bold marquee-item">Look at Me!</div>
  ));
  const itemsAboutMe = Array.from({ length: repeats }).map((_, i) => (
    <div key={i} className="text-2xl font-bold marquee-item">About Me!</div>
  ));

  return (
    <div className="h-screen">
      <h1>Welcome to the Home Page</h1>
      <div className="flex justify-center items-center">

        <div className="group relative h-25 w-full border-t-2 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
            <div className="marquee w-full">
              <div className="marquee-track">
                {itemsLookAtMe}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black flex items-center justify-center p-4 transition-transform duration-300 group-hover:-translate-y-full">
            <div className="text-2xl font-bold">
              Look at Me!
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">

        <div className="group relative h-25 w-full border-t-2 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
            <div className="marquee w-full">
              <div className="marquee-track">
                {itemsAboutMe}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black flex items-center justify-center p-4 transition-transform duration-300 group-hover:-translate-y-full">
            <div className="text-2xl font-bold">
              About Me!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
