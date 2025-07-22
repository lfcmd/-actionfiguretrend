'use client'

interface StyleData {
  theme: string
  accessories: string[]
  boxColor: string
  label: string
}

interface StyleSelectorProps {
  selectedStyle: StyleData
  onStyleChange: (style: StyleData) => void
}

const STYLE_TEMPLATES = [
  { id: 'content-creator', name: 'Content Creator', accessories: ['Camera', 'Phone', 'Tripod'] },
  { id: 'gamer', name: 'Gamer Pro', accessories: ['Controller', 'Headset', 'Keyboard'] },
  { id: 'rockstar', name: 'Rockstar', accessories: ['Guitar', 'Sunglasses', 'Microphone'] },
  { id: 'lifestyle', name: 'Lifestyle Queen', accessories: ['Makeup', 'Handbag', 'Perfume'] },
  { id: 'fitness', name: 'Fitness Master', accessories: ['Dumbbells', 'Water Bottle', 'Towel'] },
  { id: 'artist', name: 'Creative Artist', accessories: ['Paintbrush', 'Palette', 'Canvas'] },
  { id: 'chef', name: 'Master Chef', accessories: ['Chef Hat', 'Pan', 'Knife Set'] },
  { id: 'traveler', name: 'World Traveler', accessories: ['Backpack', 'Map', 'Camera'] },
  { id: 'business', name: 'Business Elite', accessories: ['Briefcase', 'Laptop', 'Watch'] },
  { id: 'scientist', name: 'Mad Scientist', accessories: ['Test Tube', 'Microscope', 'Lab Coat'] },
  { id: 'superhero', name: 'Superhero', accessories: ['Mask', 'Cape', 'Badge'] },
  { id: 'pirate', name: 'Space Pirate', accessories: ['Telescope', 'Sword', 'Hat'] }
]

const ACCESSORIES = [
  'Camera', 'Phone', 'Tripod', 'Controller', 'Headset', 'Keyboard', 'Mouse', 'Guitar', 'Sunglasses', 'Microphone',
  'Makeup', 'Handbag', 'Perfume', 'Dumbbells', 'Water Bottle', 'Towel', 'Paintbrush', 'Palette', 'Canvas',
  'Chef Hat', 'Pan', 'Knife Set', 'Backpack', 'Map', 'Briefcase', 'Laptop', 'Watch',
  'Test Tube', 'Microscope', 'Lab Coat', 'Mask', 'Cape', 'Badge', 'Telescope', 'Sword', 'Hat',
  'Books', 'Coffee Cup', 'Glasses', 'Necklace', 'Ring', 'Bracelet', 'Wallet', 'Keys', 'Charger'
]

export default function StyleSelector({ selectedStyle, onStyleChange }: StyleSelectorProps) {
  const handleTemplateSelect = (template: typeof STYLE_TEMPLATES[0]) => {
    onStyleChange({
      ...selectedStyle,
      accessories: [...template.accessories],
      label: template.name
    })
  }

  const handleAccessoryToggle = (accessory: string) => {
    const newAccessories = selectedStyle.accessories.includes(accessory)
      ? selectedStyle.accessories.filter(a => a !== accessory)
      : [...selectedStyle.accessories, accessory]
    
    onStyleChange({
      ...selectedStyle,
      accessories: newAccessories
    })
  }

  return (
    <div className="glass rounded-2xl p-6 card-hover space-y-8">
      <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
          🎨
        </div>
        <span>Customize Your Figure</span>
      </h3>
      
      {/* 主题设置 */}
      <div>
        <label className="block text-sm font-medium mb-3 text-white flex items-center space-x-2">
          <span>🎯</span>
          <span>Theme Description</span>
        </label>
        <input
          type="text"
          value={selectedStyle.theme}
          onChange={(e) => onStyleChange({...selectedStyle, theme: e.target.value})}
          placeholder="Describe your figure theme: Sci-fi warrior, Wizard, Modern urban..."
          className="w-full p-3 bg-black/30 border border-gray-600 rounded-xl focus:outline-none focus:border-purple-400 text-white placeholder-gray-400 transition-all"
        />
        <p className="text-xs text-gray-400 mt-2">This will determine the overall style and appearance of your figure</p>
      </div>
      
      {/* 快速模板 */}
      <div>
        <label className="block text-sm font-medium mb-3 text-white flex items-center space-x-2">
          <span>⚡</span>
          <span>Quick Templates</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {STYLE_TEMPLATES.map(template => {
            const isSelected = selectedStyle.label === template.name
            return (
              <button
                key={template.id}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleTemplateSelect(template)
                }}
                className={`relative z-10 p-4 text-left rounded-xl transition-all group cursor-pointer active:scale-95 ${
                  isSelected 
                    ? 'bg-purple-500/20 border-purple-400 border-2' 
                    : 'bg-black/20 border border-gray-600 hover:border-purple-400 hover:bg-purple-500/10'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full"></div>
                )}
                <div className={`font-medium text-sm transition-colors ${
                  isSelected ? 'text-purple-300' : 'text-white group-hover:text-purple-300'
                }`}>
                  {template.name}
                </div>
                <div className="text-xs text-gray-400 mt-1">{template.accessories.slice(0, 2).join(', ')}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* 配件 */}
      <div>
        <label className="block text-sm font-medium mb-3 text-white flex items-center space-x-2">
          <span>🎒</span>
          <span>Accessories</span>
        </label>
        <div className="bg-black/20 border border-gray-600 rounded-xl p-4 max-h-48 overflow-y-auto">
          <div className="grid grid-cols-2 gap-3">
            {ACCESSORIES.map(accessory => (
              <label 
                key={accessory} 
                className="flex items-center text-sm text-gray-300 hover:text-white cursor-pointer relative z-10 p-1 rounded hover:bg-white/5 transition-all"
                onClick={(e) => {
                  e.preventDefault()
                  handleAccessoryToggle(accessory)
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedStyle.accessories.includes(accessory)}
                  onChange={() => {}} // Handled by label click
                  className="mr-3 w-4 h-4 text-purple-500 bg-black/30 border-gray-600 rounded focus:ring-purple-500 pointer-events-none"
                />
                <span className="select-none">{accessory}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* 包装盒颜色 */}
      <div>
        <label className="block text-sm font-medium mb-3 text-white flex items-center space-x-2">
          <span>📦</span>
          <span>Package Color</span>
        </label>
        <select
          value={selectedStyle.boxColor}
          onChange={(e) => onStyleChange({...selectedStyle, boxColor: e.target.value})}
          className="w-full p-3 bg-black/30 border border-gray-600 rounded-xl focus:outline-none focus:border-purple-400 text-white"
        >
          <option value="pink">Pink</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="gold">Gold</option>
        </select>
      </div>

      {/* 标签名 */}
      <div>
        <label className="block text-sm font-medium mb-3 text-white flex items-center space-x-2">
          <span>🏷️</span>
          <span>Package Label</span>
        </label>
        <input
          type="text"
          value={selectedStyle.label}
          onChange={(e) => onStyleChange({...selectedStyle, label: e.target.value})}
          placeholder="e.g: Gamer Pro, Creative Artist, Space Explorer"
          className="w-full p-3 bg-black/30 border border-gray-600 rounded-xl focus:outline-none focus:border-purple-400 text-white placeholder-gray-400 transition-all"
        />
      </div>
    </div>
  )
}