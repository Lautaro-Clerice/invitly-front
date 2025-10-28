import React from "react";

export function InvitationsListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx}>
          <div className="group relative overflow-hidden rounded-xl bg-card border shadow-soft h-full flex flex-col animate-pulse">
            <div className="relative aspect-3/4 overflow-hidden bg-muted">
              <div className="w-full h-full object-cover bg-gray-300" />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="h-6 bg-gray-300 rounded mb-2 w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
