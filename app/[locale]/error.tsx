"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log del error a servicio de monitoreo (ej: Sentry, LogRocket)
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Icono de error */}
        <div className="flex justify-center">
          <div className="rounded-full bg-destructive/10 p-4">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>
        </div>

        {/* Mensaje */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Algo salió mal
          </h2>
          <p className="text-muted-foreground">
            Lo sentimos, ocurrió un error inesperado. Por favor intenta
            nuevamente.
          </p>
        </div>

        {/* Información técnica (solo en desarrollo) */}
        {process.env.NODE_ENV === "development" && error.message && (
          <div className="rounded-lg bg-muted p-4 text-left">
            <p className="text-xs font-mono text-muted-foreground break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Acciones */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={reset}
            size="lg"
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Reintentar
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
            size="lg"
          >
            Volver al inicio
          </Button>
        </div>

        {/* Código de error (si existe) */}
        {error.digest && (
          <p className="text-xs text-muted-foreground">
            Código de error: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
