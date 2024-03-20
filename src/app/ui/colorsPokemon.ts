const colors: colorsPokemon = {
    normal: 'bg-gray-400',
    fire: 'bg-red-600',
    water: 'bg-blue-500',
    grass: 'bg-green-500',
    electric: 'bg-yellow-500',
    ice: 'bg-blue-200',
    fighting: 'bg-red-700',
    poison: 'bg-purple-600',
    ground: 'bg-yellow-600',
    flying: 'bg-blue-400',
    psychic: 'bg-purple-500',
    bug: 'bg-green-400',
    rock: 'bg-gray-600',
    ghost: 'bg-purple-700',
    dragon: 'bg-red-800',
    dark: 'bg-gray-800',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-300',
  };

 export const getColors = (type: string): string =>{
    return colors[type] || 'bg-gray-600'
  }