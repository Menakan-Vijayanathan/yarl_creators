import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
          }`}
        />
      ))}
    </div>
  );
}