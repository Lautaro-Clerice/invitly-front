import * as z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("Email inválido")
    .max(255, "El email no puede exceder 255 caracteres"),
  eventType: z.string().min(1, "Selecciona un tipo de evento"),
  message: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede exceder 1000 caracteres"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
