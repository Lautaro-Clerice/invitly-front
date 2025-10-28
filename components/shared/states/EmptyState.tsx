import { SearchX } from "lucide-react";

interface EmptyStateProps {
  message?: string;
  className?: string;
}

export function EmptyState({
  message = "No se encontraron resultados",
  className = ""
}: EmptyStateProps) {
  return (
    <div className={`text-center py-12 ${className}`}>
      <div className="flex flex-col items-center gap-3">
        <div className="rounded-full bg-muted p-3">
          <SearchX className="h-8 w-8 text-muted-foreground" />
        </div>
        <p className="text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}
