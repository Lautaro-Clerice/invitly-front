import { ChatStep } from "@/types/chatbot";

// Configuración del flujo conversacional del chatbot

export const chatbotSteps: Record<string, ChatStep> = {
  welcome: {
    id: "welcome",
    message:
      "¡Hola! 👋 Soy el asistente virtual de Invitly. ¿En qué puedo ayudarte hoy?",
    options: [
      {
        id: "pricing",
        label: "Precios y planes",
        value: "pricing",
        action: "respond",
        nextStep: "pricing",
      },
      {
        id: "create",
        label: "✨ ¿Cómo crear una invitación?",
        value: "create",
        action: "respond",
        nextStep: "create",
      },
      {
        id: "delivery_time",
        label: "⏱️ ¿Cuánto tiempo tardan en entregar una invitación?",
        value: "delivery_time",
        action: "respond",
        nextStep: "delivery_time",
      },
      {
        id: "support",
        label: "Soporte técnico",
        value: "support",
        action: "respond",
        nextStep: "support",
      },
    ],
  },

  pricing: {
    id: "pricing",
    message:
      "Tenemos un único plan:\n\n💎 Plan Invitly\n• Valor: $20.000 (pago único por invitación)\n• Acceso a todas las plantillas premium\n• Entrega de la invitación lista hasta 3 meses antes del evento\n• Soporte prioritario por WhatsApp y email\n• Sin marca de agua\n\n¿Te gustaría saber cómo funciona la entrega o el proceso de compra?",
    options: [
      {
        id: "whatsapp",
        label: "📱 Consultar por WhatsApp",
        value: "whatsapp",
        action: "contact",
      },
      {
        id: "send_email",
        label: "📧 Consultar por email",
        value: "send_email",
        action: "external",
      },
      {
        id: "back",
        label: "⬅️ Volver al menú principal",
        value: "back",
        action: "respond",
        nextStep: "welcome",
      },
    ],
  },

  create: {
    id: "create",
    message:
      "✨ Para crear tu invitación personalizada, te contactás con nosotros por WhatsApp.\n\nTe vamos a pedir una serie de datos para armar la plantilla, por ejemplo:\n• Imágenes para los carrouseles (si tu invitación los tiene)\n• Imágenes de portada\n• Nombre del evento\n• Fecha, lugar y detalles\n\nNosotros nos encargamos de crear la invitación y te entregamos un link listo para que puedas enviárselo a todos tus invitados.\n\n¿Querés iniciar el proceso ahora?",
    options: [
      {
        id: "start_whatsapp",
        label: "📱 Iniciar proceso por WhatsApp",
        value: "start_whatsapp",
        action: "contact",
      },

      {
        id: "back",
        label: "⬅️ Volver al menú principal",
        value: "back",
        action: "respond",
        nextStep: "welcome",
      },
    ],
  },

  delivery_time: {
    id: "delivery_time",
    message:
      "⏱️ Una vez que nos envíes toda la información necesaria, tardamos solo 10 minutos en crear y entregar el link de tu invitación digital lista para compartir.",
    options: [
      {
        id: "whatsapp",
        label: "📱 Consultar por WhatsApp",
        value: "whatsapp",
        action: "contact",
      },

      {
        id: "back",
        label: "⬅️ Volver al menú principal",
        value: "back",
        action: "respond",
        nextStep: "welcome",
      },
    ],
  },

  support: {
    id: "support",
    message:
      "¿Con qué necesitas ayuda? Podés escribir tu consulta y un agente te responderá a la brevedad, o contactarnos por WhatsApp o email.",
    options: [
      {
        id: "whatsapp",
        label: "📱 Escribir por WhatsApp",
        value: "whatsapp",
        action: "contact",
      },
      {
        id: "send_email",
        label: "Enviar email",
        value: "send_email",
        action: "external",
      },
      {
        id: "back",
        label: "⬅️ Volver al menú principal",
        value: "back",
        action: "respond",
        nextStep: "welcome",
      },
    ],
  },
};

export const chatbotConfig = {
  welcomeMessage: chatbotSteps.welcome.message,
  fallbackMessage:
    "Lo siento, no entendí eso. ¿Puedes elegir una de las opciones del menú?",
  contactEmail: "soporte@invitly.com",
  contactPhone: "+1234567890",
  whatsappNumber: "1234567890",
};
