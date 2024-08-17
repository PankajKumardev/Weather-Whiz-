import './App.css';
import { WeatherBox } from './components/WeatherBox';

function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-4 bg-[#08090A]'>
      <h2 className="my-10 sm:my-16 text-2xl sm:text-3xl lg:text-5xl text-center font-bold">
  <span className='text-[#00aaff]'>Weather Whiz</span><br />
  <span className='text-[#ffbb00]'>Your Climate Companion</span> 🌤️
</h2>
      <div className='w-full max-w-lg px-4'>
        <WeatherBox />
      </div>
    </div>
  );
}

export default App;
