import React, { useState } from 'react';

export const Messages = () => {
    const [conversations] = useState([
      {
        id: 1,
        name: 'Michael Chen',
        lastMessage: 'Looking forward to our interview!',
        time: '2h ago',
        unread: 2
      },
      // Add more mock data
    ]);
  
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6 h-[calc(100vh-180px)] flex">
        <div className="w-1/3 border-r pr-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-green-800">Messages</h2>
            <button className="p-2 hover:bg-green-100 rounded-full">
              <i className="fas fa-plus text-green-600"></i>
            </button>
          </div>
  
          <div className="space-y-2">
            {conversations.map(convo => (
              <div key={convo.id} className="flex items-center gap-3 p-3 hover:bg-green-50 rounded cursor-pointer">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    {convo.name[0]}
                  </div>
                  {convo.unread > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 rounded-full">
                      {convo.unread}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-medium">{convo.name}</p>
                  <p className="text-sm text-green-600 truncate max-w-[160px]">{convo.lastMessage}</p>
                </div>
                <span className="text-xs text-gray-500 ml-auto">{convo.time}</span>
              </div>
            ))}
          </div>
        </div>
  
        <div className="w-2/3 pl-4 flex flex-col">
          <div className="border-b pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                S
              </div>
              <div>
                <h3 className="font-bold text-lg">Sarah Johnson</h3>
                <p className="text-green-600">Senior Developer Position</p>
              </div>
            </div>
          </div>
  
          <div className="flex-1 overflow-auto space-y-4 mb-4">
            {/* Message history */}
          </div>
  
          <div className="border-t pt-4">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

   export default Messages;