// Tipos para el chatbot custom

export interface ChatMessage {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
  options?: ChatOption[];
}

export interface ChatOption {
  id: string;
  label: string;
  value: string;
  action?: "navigate" | "respond" | "external" | "contact";
  nextStep?: string;
}

export interface ChatStep {
  id: string;
  message: string;
  options?: ChatOption[];
  delay?: number; // Delay antes de mostrar el mensaje (ms)
}

export interface ChatbotConfig {
  welcomeMessage: string;
  fallbackMessage: string;
  contactEmail?: string;
  contactPhone?: string;
  whatsappNumber?: string;
}
