import { Palette, Globe, Code, Megaphone, Smartphone, Gamepad2 } from 'lucide-react'

export default function Component() {
  const services = [
    { icon: Palette, title: "GRAPHIC DESIGN", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus," },
    { icon: Globe, title: "WEB DESIGN", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus," },
    { icon: Code, title: "WEB DEVELOPMENT", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus," },
    { icon: Megaphone, title: "DIGITAL MARKETING", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus," },
    { icon: Smartphone, title: "APP DESIGN", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus," },
    { icon: Gamepad2, title: "GAME DESIGN", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus," }
  ]

  return (
    <div className="py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-emerald-500 text-base mb-2.5">Services</h2>
          <h1 className="text-[41px] font-bold text-gray-800">We Provide The Best Solution</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 text-center transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                <div className="transition-transform duration-300 group hover:scale-110">
                  <service.icon className="w-9 h-9 text-emerald-500 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
              </div>
              <h3 className="text-[15px] font-semibold text-gray-800 mb-2 uppercase">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}