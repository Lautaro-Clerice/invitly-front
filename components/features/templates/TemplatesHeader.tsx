interface TemplatesHeaderProps {
  title: string;
  description: string;
}

export function TemplatesHeader({ title, description }: TemplatesHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}
