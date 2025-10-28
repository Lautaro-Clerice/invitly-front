import "@testing-library/jest-dom";

// Mock next-intl/server
jest.mock("next-intl/server", () => ({
  getTranslations: jest.fn(() => (key: string) => {
    const translations: Record<string, string> = {
      title: "Invitaciones Digitales",
      subtitle: "Crea invitaciones únicas para tus eventos especiales",
      badge: "Diseños Personalizados",
      imageAlt: "Evento especial",
      "button.categories": "Ver Categorías",
      "button.contact": "Contactar",
      "stats.designs": "Diseños",
      "stats.clients": "Clientes",
      "stats.satisfaction": "Satisfacción",
      whatsappMessage: "Hola, me interesa crear una invitación digital",
    };
    return translations[key] || key;
  }),
}));

Object.defineProperty(HTMLElement.prototype, "hasPointerCapture", {
  value: jest.fn(),
  writable: true,
});

Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
  value: jest.fn(),
  writable: true,
});

Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
});
