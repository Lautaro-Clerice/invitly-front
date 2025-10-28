import { Container } from "@/components/shared/Container";

export function FeaturesSkeleton() {
  return (
    <section className="relative py-24 bg-linear-to-b from-secondary to-background overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex h-8 w-32 bg-muted rounded-full mb-6 animate-pulse" />

          <div className="h-12 bg-muted rounded-lg w-2/3 mx-auto mb-6 animate-pulse" />

          <div className="h-6 bg-muted rounded-lg w-3/4 mx-auto animate-pulse" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 shadow-elegant border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-muted mb-6 animate-pulse" />

              <div className="h-6 bg-muted rounded-lg w-3/4 mb-3 animate-pulse" />

              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-full animate-pulse" />
                <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elegant border border-border">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="h-8 bg-muted rounded-lg w-2/3 mb-6 animate-pulse" />
              <div className="h-4 bg-muted rounded-lg w-full mb-8 animate-pulse" />

              <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-muted animate-pulse" />
                    <div className="h-4 bg-muted rounded flex-1 animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="h-64 bg-muted rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
