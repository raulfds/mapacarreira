import React, { useState } from 'react';
import CareerPath from './components/CareerPath';
import Sidebar from './components/Sidebar';
import { CareerPosition, departments } from './data/career';

function App() {
  const [selectedPosition, setSelectedPosition] = useState<CareerPosition | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-secondary-50">
      <header className="bg-white shadow-md py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Mapa de Carreira
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="flex gap-8 relative">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {departments.map((dept) => (
              <CareerPath
                key={dept.id}
                department={dept}
                onPositionClick={setSelectedPosition}
              />
            ))}
          </div>

          {selectedPosition && (
            <Sidebar
              position={selectedPosition}
              onClose={() => setSelectedPosition(null)}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;