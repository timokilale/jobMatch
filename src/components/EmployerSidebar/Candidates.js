
import { useState } from 'react';

export const Candidates = () => {
  const [candidates] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Senior Developer',
      status: 'Interview',
      date: '2023-08-15',
      rating: 4.8
    },
    // Add more mock data
  ]);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">Candidate Management</h2>
        <div className="flex gap-4">
          <input 
            type="text" 
            placeholder="Search candidates..." 
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Add New +
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 font-medium text-green-800 border-b pb-2 mb-4">
        <span>Candidate</span>
        <span>Position</span>
        <span>Status</span>
        <span>Actions</span>
      </div>

      {candidates.map(candidate => (
        <div key={candidate.id} className="grid grid-cols-4 gap-4 items-center py-3 hover:bg-green-50 px-2 rounded">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              {candidate.name[0]}
            </div>
            <div>
              <p className="font-medium">{candidate.name}</p>
              <p className="text-sm text-green-600">{candidate.date}</p>
            </div>
          </div>
          <p>{candidate.position}</p>
          <span className={`px-3 py-1 rounded-full text-sm ${
            candidate.status === 'Interview' 
              ? 'bg-blue-100 text-blue-800' 
              : 'bg-green-100 text-green-800'
          }`}>
            {candidate.status}
          </span>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-green-100 rounded">
              <i className="fas fa-envelope text-green-600"></i>
            </button>
            <button className="p-2 hover:bg-green-100 rounded">
              <i className="fas fa-file-alt text-green-600"></i>
            </button>
            <button className="p-2 hover:bg-green-100 rounded">
              <i className="fas fa-ellipsis-h text-green-600"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
  export default Candidates;