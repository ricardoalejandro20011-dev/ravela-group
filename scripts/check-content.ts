import assert from "node:assert/strict";
import { caseStudies, caseDisplayName, verifiedResults } from "../lib/data/cases";
import { labProducts } from "../lib/data/products";
import { CONTACTO } from "../lib/constants/contacto";

const dental = caseStudies.find(c => c.slug === "clinica-dental-privada");
assert(dental);
assert.equal(caseStudies.length, 1, "Only the confirmed case is published");
assert.equal(caseDisplayName({...dental, clientDisplayName: "Confidential client name"}), "Clínica dental privada");
assert.equal(verifiedResults({...dental, results: [...(dental.results || []), {label: "Unverified metric", value: "90%", verified: false}]}).length, 1);
assert.equal(dental.technologies, undefined, "Project technology has not been confirmed");
assert(dental.workflow?.includes("Actualización del expediente"));
assert(labProducts.every(product => product.status === "En desarrollo"));
assert(labProducts.every(product => product.capabilities.every(c => c.status !== "Disponible")));
assert.equal(CONTACTO.email, "hola@ravela.online");
assert.equal(CONTACTO.telefonoE164, "+525625346426");
assert.equal(new URL(CONTACTO.whatsappUrl).pathname, "/525625346426");
console.info("Content checks passed: confidentiality, verified results, development status and contact details.");
