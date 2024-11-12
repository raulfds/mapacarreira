// CareerPath.tsx
import React from 'react';
import { CareerPosition, Department } from '../data/career';

interface CareerPathProps {
  department: Department;
  onPositionClick: (position: CareerPosition) => void;
}

const CareerPath: React.FC<CareerPathProps> = ({ department, onPositionClick }) => {
  const levelStyles = {
    'Sênior': 'bg-primary-500 text-white shadow-inner-lg',   // Fundo primário e texto branco
    'Pleno': 'bg-secondary-300 text-secondary-900 shadow-inner-lg', // Fundo secundário claro e texto escuro
    'Junior': 'bg-primary-200 text-primary-900 shadow-inner-lg',    // Fundo primário claro e texto escuro
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{department.name}</h2>
      {department.positions.map((position) => (
        <div
          key={position.id}
          className={`p-4 rounded-lg ${levelStyles[position.level]}`}
          onClick={() => onPositionClick(position)}
        >
          <h3 className="text-xl font-medium">{position.title}</h3>
          <p className="text-sm">{position.level}</p>
        </div>
      ))}
    </div>
  );
};

export default CareerPath;
