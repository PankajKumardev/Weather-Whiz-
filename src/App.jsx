import './App.css';
import { WeatherBox } from './components/WeatherBox';

function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-4 bg-[#08090A]'>
      <h1 className='text-4xl font-bold mb-24 text-center'>
        <span className='text-blue-400'>Weather Whiz</span>
        <span className='text-slate-300'> : Your Climate Companion</span>
      </h1>
      <div className='w-full max-w-lg px-4'>
        <WeatherBox />
      </div>
    </div>
  );
}

export default App;
