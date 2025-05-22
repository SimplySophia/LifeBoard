'use client'

import { useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Settings } from 'lucide-react'

const colors = [
  { name: 'rose', className: 'bg-rose-700' },
  { name: 'green', className: 'bg-green-700' },
  { name: 'blue', className: 'bg-blue-700' },
  { name: 'orange', className: 'bg-orange-700' },
]

export default function ColorSwitcher() {
  const [color, setColor] = useState('rose')

  useEffect(() => {
    const saved = localStorage.getItem("theme-color");
    if (saved) {
      setColor(saved);
      document.documentElement.setAttribute("data-color", saved);
    }
  }, []);
  
  const handleColorChange = (color: string) => {
    setColor(color);
    document.documentElement.setAttribute("data-color", color);
    localStorage.setItem("theme-color", color);
  };
  

  return (
    <Popover>
      <PopoverTrigger className="relative top-0 left-0 z-50 bg-muted p-2 rounded-full shadow-md">
        <Settings className="w-5 h-5 animate-spin" />
      </PopoverTrigger>
      <PopoverContent className="w-60 p-4 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Theme Color</h2>
        <div className="flex gap-3">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => handleColorChange(c.name)}
              className={`w-6 h-6 rounded-full border-2 ${
                color === c.name ? 'border-black dark:border-white' : 'border-transparent'
              } ${c.className}`}
              title={c.name}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
