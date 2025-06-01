
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock } from 'lucide-react';
import { ItineraryDay } from '../pages/Index';

interface InteractiveMapProps {
  itinerary: ItineraryDay[];
  selectedDay: number;
  onDaySelect: (day: number) => void;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  itinerary, 
  selectedDay, 
  onDaySelect 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'sightseeing': 'bg-sky-500',
      'food': 'bg-coral-500',
      'nature': 'bg-green-500',
      'shopping': 'bg-purple-500',
      'culture': 'bg-amber-500'
    };
    return colors[type] || 'bg-slate-500';
  };

  // Mock map visualization since we don't have Mapbox setup
  return (
    <div className="h-[600px] relative bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
      {/* Mock map background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Day selector sidebar */}
      <div className="absolute left-4 top-4 bottom-4 w-80 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <h3 className="font-semibold text-slate-800">Your Itinerary</h3>
          <p className="text-sm text-slate-600">Click a day to view details</p>
        </div>
        
        <div className="overflow-y-auto h-full pb-20">
          {itinerary.map((day) => (
            <div key={day.day} className="border-b border-slate-100 last:border-b-0">
              <button
                onClick={() => onDaySelect(day.day)}
                className={`w-full p-4 text-left hover:bg-slate-50 transition-colors ${
                  selectedDay === day.day ? 'bg-sky-50 border-l-4 border-sky-500' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-slate-800">Day {day.day}</h4>
                  <span className="text-xs text-slate-500">{day.date}</span>
                </div>
                <div className="text-sm text-slate-600">
                  {day.activities.length} activities planned
                </div>
              </button>
              
              {selectedDay === day.day && (
                <div className="px-4 pb-4 space-y-3">
                  {day.activities.map((activity) => (
                    <Card key={activity.id} className="bg-white border border-slate-200">
                      <CardContent className="p-3">
                        <div className="flex space-x-3">
                          <img
                            src={activity.imageUrl}
                            alt={activity.name}
                            className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="font-medium text-sm text-slate-800 truncate">
                              {activity.name}
                            </h5>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="flex items-center space-x-1 text-xs text-slate-600">
                                <Clock className="w-3 h-3" />
                                <span>{activity.time}</span>
                              </div>
                              <div className="flex items-center space-x-1 text-xs text-amber-500">
                                <Star className="w-3 h-3 fill-current" />
                                <span>{activity.rating}</span>
                              </div>
                            </div>
                            <Badge 
                              className={`mt-2 text-xs ${getTypeColor(activity.type)} text-white`}
                            >
                              {activity.type}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mock map pins */}
      <div className="absolute inset-0 pointer-events-none">
        {itinerary.find(day => day.day === selectedDay)?.activities.map((activity, index) => (
          <div
            key={activity.id}
            className="absolute pointer-events-auto"
            style={{
              left: `${50 + (index * 10)}%`,
              top: `${30 + (index * 8)}%`,
              transform: 'translate(-50%, -100%)'
            }}
          >
            <div className={`w-8 h-8 ${getTypeColor(activity.type)} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg cursor-pointer hover:scale-110 transition-transform`}>
              {index + 1}
            </div>
            <div className="w-1 h-4 bg-white border-2 border-slate-300 mx-auto"></div>
          </div>
        ))}
        
        {/* Route line simulation */}
        {selectedDay && itinerary.find(day => day.day === selectedDay) && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M 50% 30% Q 60% 38% 70% 46% Q 80% 54% 90% 62%"
              stroke="#3B82F6"
              strokeWidth="3"
              strokeDasharray="5,5"
              fill="none"
              className="opacity-60"
            />
          </svg>
        )}
      </div>

      {/* Map controls */}
      <div className="absolute bottom-4 right-4 space-y-2">
        <Button size="sm" className="bg-white text-slate-700 hover:bg-slate-50 shadow-lg">
          +
        </Button>
        <Button size="sm" className="bg-white text-slate-700 hover:bg-slate-50 shadow-lg">
          -
        </Button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="flex space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                <span>Sightseeing</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-coral-500 rounded-full"></div>
                <span>Food</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Nature</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveMap;
