import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}