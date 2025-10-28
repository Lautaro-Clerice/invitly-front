import { render, screen } from "@testing-library/react";
import Hero from "@/components/features/home/Hero";

jest.mock("next-intl/server", () => ({
  getTranslations: jest.fn(async () => {
    const translations: Record<string, string | string[]> = {
      badge: "Invitaciones únicas y personalizadas",
      title: "Celebra tus momentos",
      subtitle:
        "Crea invitaciones digitales elegantes e interactivas que sorprenderán a tus invitados. Diseño personalizado, animaciones únicas y gestión de RSVP en una sola plataforma.",
      "button.categories": "Ver categorías",
      "button.contact": "Contactanos",
      "stats.designs": "Diseños",
      "stats.clients": "Clientes",
      "stats.satisfaction": "Satisfacción",
      words: ["especiales", "únicos"],
      imageAlt:
        "Decoración elegante de evento, ejemplo de invitación digital personalizada",
      whatsappMessage:
        "Hola! 👋 Me das una mano para hacer mi invitacion digital?",
    };

    const t = (key: string) => {
      const value = translations[key];
      return typeof value === "string" ? value : "";
    };

    t.raw = (key: string) => translations[key];

    return t;
  }),
}));

describe("Componente Hero", () => {
  it("debería renderizar la sección del héroe", async () => {
    const HeroComponent = await Hero();
    render(HeroComponent);

    expect(screen.getByText(/Celebra tus momentos/i)).toBeInTheDocument();
  });

  it("debería tener un botón de categorías que enlace a #categories", async () => {
    const HeroComponent = await Hero();
    render(HeroComponent);

    const categoriesButton = screen.getByRole("link", {
      name: /ver categorías/i,
    });
    expect(categoriesButton).toHaveAttribute("href", "#categories");
  });

  it("debería tener un botón de contacto que abra WhatsApp con el mensaje correcto", async () => {
    const HeroComponent = await Hero();
    render(HeroComponent);

    const contactButton = screen.getByRole("link", { name: /contactanos/i });
    const expectedMessage = encodeURIComponent(
      "Hola! 👋 Me das una mano para hacer mi invitacion digital?"
    );
    const expectedHref = `https://wa.me/5491112345678?text=${expectedMessage}`;

    expect(contactButton).toHaveAttribute("href", expectedHref);
    expect(contactButton).toHaveAttribute("target", "_blank");
    expect(contactButton).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("debería mostrar las estadísticas correctamente", async () => {
    const HeroComponent = await Hero();
    render(HeroComponent);

    expect(screen.getByText("500+")).toBeInTheDocument();
    expect(screen.getByText("10K+")).toBeInTheDocument();
    expect(screen.getByText("98%")).toBeInTheDocument();
  });
});
