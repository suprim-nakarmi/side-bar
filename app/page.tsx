export default function Page() {
  return (
    <div className="min-h-screen bg-gray-200 p-8">
      
      <div className="bg-gray-100 rounded-3xl shadow-lg w-72 p-6">
        
        <h2 className="text-gray-400 text-sm font-semibold mb-4 uppercase tracking-wide">
          Apps
        </h2>
        
        <div className="space-y-1">
          
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-white text-xl">
            💡  
            </div>
            <span className="text-gray-900 font-medium">Insight</span>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition">
            <div className="w-10 h-10  bg-white rounded-lg flex items-center justify-center text-white text-xl">
            💳
            </div>
            <span className="text-gray-900 font-medium">Cards</span>
          </div>
        
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition">
            <div className="w-10 h-10  bg-white rounded-lg flex items-center justify-center text-white text-xl">
              🛒
            </div>
            <span className="text-gray-900 font-medium">Market Place</span>
          </div>
          
        </div>
      
        <div className="border-2 border-gray-200 my-3"></div>
      
        <div className="space-y-1">
        
          <div className="flex items-center gap-3 p-3 rounded-lg">
            <h2 className="text-gray-400 text-sm font-semibold mb-1 uppercase tracking-wide flex items-center gap-1">
              <span>📕</span> Booking
            </h2>

          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition">
            <div className="w-10 h-10  bg-white rounded-lg flex items-center justify-center text-white font-bold text-lg">
              💰
            </div>
            <span className="text-gray-900 font-medium">Sales Expert</span>
          </div>
     
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white text-xl">
              
            </div>
            <span className="text-gray-900 font-medium">Chartly</span>
          </div>
          
        </div>
       
        <div className="border-2 border-gray-200 my-3"></div>
        <div className="space-y-1">
               
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition">
            <div className="w-10 h-10  bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            <span className="font-extrabold">N</span>
            </div>
            <span className="text-gray-900 font-medium">Newstand</span>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-white text-xl">
              📊
            </div>
            <span className="text-gray-900 font-medium">Golden Bar</span>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}