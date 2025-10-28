"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export function TestimonialsSkeleton() {
  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="relative p-8 md:p-12 bg-white/5 backdrop-blur-xl border-white/10">
        {/* Quote skeleton */}
        <div className="mb-6">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        
        {/* Review text skeleton */}
        <div className="space-y-3 mb-8">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
        </div>
        
        {/* Rating skeleton */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-5 w-5" />
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          {/* Avatar skeleton */}
          <Skeleton className="w-14 h-14 rounded-full" />
          
          <div className="flex-1">
            {/* Name skeleton */}
            <Skeleton className="h-5 w-32 mb-2" />
            {/* Role skeleton */}
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </Card>
      
      {/* Navigation skeleton */}
      <div className="flex justify-center gap-3 mt-8">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </div>
  );
}
