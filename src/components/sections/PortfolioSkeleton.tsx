"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export function PortfolioSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {[...Array(6)].map((_, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border-white/10 p-0"
        >
          {/* Image skeleton */}
          <Skeleton className="w-full h-64" />
          
          <div className="p-6 space-y-4">
            {/* Title skeleton */}
            <Skeleton className="h-6 w-3/4" />
            
            {/* Description skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            
            {/* Tags skeleton */}
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            
            {/* Metrics skeleton */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {[...Array(3)].map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-6 w-12 mb-1" />
                  <Skeleton className="h-3 w-16" />
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
