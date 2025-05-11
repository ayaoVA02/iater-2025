import { laosFlag, koreanFlag, ukFlag } from '../assets/images'

const LanguageSelector = () => {
  return (
    <div className="flex space-x-4 ">
      <button className="w-8 h-autto rounded overflow-hidden cursor-pointer ">
        <img src={ukFlag} alt="Japanese" className="w-full h-full object-cover" />
      </button>
      <button className="w-8 h-autto rounded overflow-hidden  cursor-pointer ">
        <img src={laosFlag} alt="English" className="w-full h-full object-cover" />
      </button>
      <button className="w-8 h-autto rounded overflow-hidden  cursor-pointer">
        <img src={koreanFlag} alt="Korean" className="w-full h-full object-cover" />
      </button>
    </div>
  )
}

export default LanguageSelector
