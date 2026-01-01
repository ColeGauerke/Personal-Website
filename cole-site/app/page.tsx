import localFont from 'next/font/local';

const panchang = localFont({
  src: '../fonts/Panchang-Bold.otf',
});

export default function Home() {
  return (
    <div>
      <h1 className={`w-full text-6xl p-0 m-0 scale-x-125 origin-left ${panchang.className}`}>
        COLE GAUERKE
      </h1>
      <div className="bg-[#c5c5c5] h-1 w-full"></div>
    </div>
  );
}