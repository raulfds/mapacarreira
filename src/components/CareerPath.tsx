import React from 'react';
import { Department, CareerPosition } from '../data/career';

interface CareerPathProps {
  department: Department;
  onPositionClick: (position: CareerPosition) => void;
}

const CareerPath: React.FC<CareerPathProps> = ({ department, onPositionClick }) => {
  // Ordena os cargos com nível Sênior no topo
  const sortedPositions = [...department.positions].sort((a, b) => {
    if (a.level === 'Sênior') return -1;
    if (b.level === 'Sênior') return 1;
    if (a.level === 'Pleno' && b.level === 'Junior') return -1;
    if (a.level === 'Junior' && b.level === 'Pleno') return 1;
    return 0;
  });

  return (
    <div className="career-card bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">
        <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          {department.name}
        </span>
      </h2>
      
      <div className="space-y-4">
        {sortedPositions.map((position) => {
          const levelStyles = {
            Sênior: 'bg-gradient-to-r from-secondary-600 to-primary-600 text-white',
            Pleno: 'bg-gradient-to-r from-primary-100 to-secondary-100 text-gray-800',
            Junior: 'bg-gray-50 hover:bg-gray-100 text-gray-700',
          };

          return (
            <button
              key={position.id}
              onClick={() => onPositionClick(position)}
              className={`w-full text-left p-5 rounded-lg ${levelStyles[position.level]}`}
            >
              <h3 className="font-semibold text-lg">{position.title}</h3>
              <p className={`text-sm mt-1 ${position.level === 'Sênior' ? 'text-white/90' : 'text-gray-500'}`}>
                {position.level}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CareerPath;
