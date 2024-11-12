import React from 'react';
import { Department, CareerPosition } from '../data/career';

interface CareerPathProps {
  department: Department;
  onPositionClick: (position: CareerPosition) => void;
}

const CareerPath: React.FC<CareerPathProps> = ({ department, onPositionClick }) => {
  // Reverse positions array to show senior positions at top
  const sortedPositions = [...department.positions].reverse();

  return (
    <div className="career-card bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center">
        <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          {department.name}
        </span>
      </h2>
      
      <div className="space-y-4">
        {sortedPositions.map((position, index) => {
          const isTopLevel = index === 0;
          const isEntryLevel = index === sortedPositions.length - 1;
          
          let bgClasses = '';
          let textClasses = '';
          
          if (isTopLevel) {
            bgClasses = 'bg-gradient-to-r from-secondary-600 to-primary-600';
            textClasses = 'text-white';
          } else if (isEntryLevel) {
            bgClasses = 'bg-gray-50 hover:bg-gray-100';
            textClasses = 'text-gray-700';
          } else {
            bgClasses = 'bg-gradient-to-r from-primary-50 to-secondary-50 hover:from-primary-100 hover:to-secondary-100';
            textClasses = 'text-gray-700';
          }

          return (
            <button
              key={position.id}
              onClick={() => onPositionClick(position)}
              className={`position-button w-full text-left p-5 rounded-lg ${bgClasses} ${textClasses}`}
            >
              <h3 className="font-semibold text-lg">{position.title}</h3>
              <p className={`text-sm mt-1 ${isTopLevel ? 'text-white/90' : 'text-gray-500'}`}>
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