import React from 'react';
import { Department, CareerPosition } from '../data/career';

interface CareerPathProps {
  department: Department;
  onPositionClick: (position: CareerPosition) => void;
}

const CareerPath: React.FC<CareerPathProps> = ({ department, onPositionClick }) => {
  // Ordena para mostrar "Supervisor" no topo, seguido por "Sênior" e os demais
  const sortedPositions = [...department.positions].sort((a, b) => {
    const rank = { Supervisor: 3, Sênior: 2, Pleno: 1, Junior: 0 };
    return rank[b.level] - rank[a.level];
  });

  return (
    <div className="career-card bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center">
        <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          {department.name}
        </span>
      </h2>

      <div className="space-y-4">
        {sortedPositions.map((position) => {
          let bgClasses = '';
          let textClasses = '';

          switch (position.level) {
            case 'Supervisor':
              bgClasses = 'bg-gradient-to-r from-gray-900 to-gray-700';
              textClasses = 'text-white';
              break;
            case 'Sênior':
              bgClasses = 'bg-gradient-to-r from-secondary-600 to-primary-600';
              textClasses = 'text-white';
              break;
            case 'Junior':
              bgClasses = 'bg-gray-50 hover:bg-gray-100';
              textClasses = 'text-gray-700';
              break;
            default:
              bgClasses = 'bg-gradient-to-r from-primary-50 to-secondary-50 hover:from-primary-100 hover:to-secondary-100';
              textClasses = 'text-gray-700';
              break;
          }

          return (
            <button
              key={position.id}
              onClick={() => onPositionClick(position)}
              className={`position-button w-full text-left p-5 rounded-lg ${bgClasses} ${textClasses}`}
            >
              <h3 className="font-semibold text-lg">{position.title}</h3>
              <p className={`text-sm mt-1 ${position.level === 'Supervisor' || position.level === 'Sênior' ? 'text-white/90' : 'text-gray-500'}`}>
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
