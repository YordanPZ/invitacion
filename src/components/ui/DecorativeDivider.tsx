

export default function DiseReloj({className}:{className?:string}) {

    return (
         <div className={`w-[200px] ${className}`}>
        <div className="flex items-center">
          <div className="h-[2px] w-[200px] bg-gradient-to-l  from-[#c8a97e] to-transparent rounded-full"></div>
          <div className="h-[2px] w-2/3 bg-gradient-to-r from-[#c8a97e] to-transparent rounded-full"></div>
          <div className="flex items-center space-x-2 ml-4">
            <div className="w-[4px] h-[4px] bg-[#c8a97e] rounded-full"></div>
            <div className="w-[6px] h-[6px] bg-[#c8a97e] rounded-full"></div>
            <div className="w-[4px] h-[4px] bg-[#c8a97e] rounded-full"></div>
          </div>
        </div>
        </div>

    )
}