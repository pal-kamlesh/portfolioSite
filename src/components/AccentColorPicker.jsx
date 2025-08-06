// components/AccentColorPicker.jsx
import { useState } from 'react'

export default function AccentColorPicker({ colors, selectedColor, onColorChange }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50">
      <div className="relative">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-slate-800 rounded-full shadow-lg border-2 border-slate-700 flex items-center justify-center hover:bg-slate-700 transition-colors"
          title="Choose accent color"
        >
          <svg className="w-6 h-6 text-[--accent-color]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        </button>

        {/* Color Palette */}
        {isOpen && (
          <div className="absolute right-16 top-0 bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-4 min-w-[200px]">
            <h3 className="text-sm font-medium text-slate-300 mb-3">Choose Theme Color</h3>
            <div className="grid grid-cols-5 gap-2">
              {Object.entries(colors).map(([colorName, colorValue]) => (
                <button
                  key={colorName}
                  onClick={() => {
                    onColorChange(colorName)
                    setIsOpen(false)
                  }}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                    selectedColor === colorName 
                      ? 'border-white shadow-lg' 
                      : 'border-transparent hover:border-slate-400'
                  }`}
                  style={{ backgroundColor: colorValue.hsl }} // ✅ use .hsl here
                  title={colorName.charAt(0).toUpperCase() + colorName.slice(1)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
