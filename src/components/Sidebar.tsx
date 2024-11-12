import React from 'react';
import { X } from 'lucide-react';
import { CareerPosition } from '../data/career';

interface SidebarProps {
  position: CareerPosition;
  onClose: () => void;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-lg font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-3">
    {children}
  </h3>
);

const Sidebar: React.FC<SidebarProps> = ({ position, onClose }) => {
  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto border-l border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {position.title}
            </h2>
            <p className="text-gray-500 mt-1">{position.level}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="space-y-8">
          <section className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl">
            <SectionTitle>Resumo de Qualificações</SectionTitle>
            <ul className="space-y-2 text-gray-700">
              {position.qualifications.map((qual, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-primary-400" />
                  {qual}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-gradient-to-r from-secondary-50 to-primary-50 p-6 rounded-xl">
            <SectionTitle>Formação e Requisitos Legais</SectionTitle>
            <ul className="space-y-2 text-gray-700">
              {position.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-secondary-400" />
                  {req}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl">
            <SectionTitle>Cursos Desejados</SectionTitle>
            <ul className="space-y-2 text-gray-700">
              {position.desiredCourses.map((course, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-primary-400" />
                  {course}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-gradient-to-r from-secondary-50 to-primary-50 p-6 rounded-xl">
            <SectionTitle>Treinamentos Obrigatórios</SectionTitle>
            <ul className="space-y-2 text-gray-700">
              {position.mandatoryTraining.map((training, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 rounded-full bg-secondary-400" />
                  {training}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;