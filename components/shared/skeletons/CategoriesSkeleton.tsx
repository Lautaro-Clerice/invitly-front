import { Container } from "@/components/shared/Container";
import { WaveDivider } from "@/components/shared/WaveDivider";

export function CategoriesSkeleton() {
  return (
    <>
      <WaveDivider flipY height={80} color="accent" />
      <section className="py-20 bg-linear-to-b from-accent to-background relative overflow-x-hidden">
        <Container>
          <div className="text-center mb-16">
            <div className="h-12 bg-muted rounded-lg w-3/4 mx-auto mb-4 animate-pulse" />
            <div className="h-6 bg-muted rounded-lg w-1/2 mx-auto animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-[500px] bg-card rounded-2xl shadow-soft overflow-hidden"
              >
                <div className="h-full bg-muted animate-pulse" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
