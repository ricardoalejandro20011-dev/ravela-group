export const CONTACTO = {
  telefonoDisplay: "55 6517 1109",
  telefonoE164: "+525565171109",
  whatsappUrl: `https://wa.me/525565171109?text=${encodeURIComponent("Hola, vi Ravela Group y me gustaría saber si pueden ayudarme a automatizar un proceso de mi empresa.")}`,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ravelaservicios@gmail.com",
  linkedinUrl: "https://www.linkedin.com/company/ravela/",
} as const;
