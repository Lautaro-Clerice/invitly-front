import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "@/components/features/contact/ContactForm";
import { postNewInquiry } from "@/services/contact";
import { toast } from "sonner";

jest.mock("@/services/contact");
jest.mock("sonner");

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      "form.name": "Nombre",
      "form.namePlaceholder": "Tu nombre completo",
      "form.email": "Email",
      "form.emailPlaceholder": "tu@email.com",
      "form.eventType": "Tipo de Evento",
      "form.eventTypePlaceholder": "Selecciona un tipo de evento",
      "form.eventTypes.boda": "Boda",
      "form.eventTypes.quince": "XV Años",
      "form.eventTypes.babyshower": "Baby Shower",
      "form.eventTypes.cumpleanos": "Cumpleaños",
      "form.eventTypes.corporativo": "Evento Corporativo",
      "form.eventTypes.otro": "Otro",
      "form.message": "Mensaje",
      "form.messagePlaceholder": "Cuéntanos sobre tu evento...",
      "form.submit": "Enviar Consulta",
      "form.success": "¡Mensaje enviado!",
      "form.successDescription": "Te responderemos pronto",
    };
    return translations[key] || key;
  },
}));

const mockPostNewInquiry = postNewInquiry as jest.MockedFunction<
  typeof postNewInquiry
>;
const mockToast = toast as jest.Mocked<typeof toast>;

describe("ContactForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockToast.success = jest.fn();
  });

  it("debería enviar el formulario correctamente cuando todos los campos están completos", async () => {
    const user = userEvent.setup();
    mockPostNewInquiry.mockResolvedValue({ success: true });

    render(<ContactForm />);

    const formData = {
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      eventType: "boda",
      message: "Necesito una invitación digital para mi boda en junio",
    };

    const nameInput = screen.getByLabelText(/nombre/i);
    await user.type(nameInput, formData.name);

    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, formData.email);

    const eventTypeSelect = screen.getByRole("combobox");
    await user.click(eventTypeSelect);
    const bodaOption = await screen.findByRole("option", { name: /boda/i });
    await user.click(bodaOption);

    const messageInput = screen.getByLabelText(/mensaje/i);
    await user.type(messageInput, formData.message);

    const submitButton = screen.getByRole("button", {
      name: /enviar consulta/i,
    });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockPostNewInquiry).toHaveBeenCalledWith(formData);
    });

    expect(mockPostNewInquiry).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(mockToast.success).toHaveBeenCalledWith("¡Mensaje enviado!", {
        description: "Te responderemos pronto",
      });
    });

    await waitFor(() => {
      expect(nameInput).toHaveValue("");
      expect(emailInput).toHaveValue("");
      expect(messageInput).toHaveValue("");
    });
  });
});
