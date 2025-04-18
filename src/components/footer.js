import React from 'react'
// import BusAnimation from './bus/BusAnimation'

export default function footer() {
  return (<>
    <footer className="relative z-10 text-center px-3 text-sm bg-white/70 backdrop-blur border-t border-orange-300 mt-10">
        {/* <BusAnimation/> */}
    <div className="font-bold text-blue-800">
      Ant Bus Transport Pvt. Ltd.
    </div>
    <div>
      Address: 106, Suncity Trade Tower, Sector-21, Near Signature Tower, Gurugram, Haryana-122001 India
    </div>
    <div>Email: <a href="mailto:support@antbus.in" className="text-blue-700 hover:underline">support@antbus.in</a> &bull; Phone: <a href="tel:9111622055" className="text-orange-600 hover:underline">9111-622-055</a></div>
    <div className="pt-1 text-blue-700 font-medium">© 2018-2024 ANT BUS TRANSPORT PVT. LTD. All rights reserved.</div>
</footer>
</>
  )
}
