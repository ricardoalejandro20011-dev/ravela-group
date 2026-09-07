import { existsSync } from "node:fs";
import path from "node:path";
/** Server-side build check: missing supplied assets never generate a broken image. */
export function hasPublicAsset(src: string | undefined): src is string {
  if (!src || !src.startsWith("/")) return false;
  const root = path.join(process.cwd(), "public");
  const resolved = path.resolve(root, `.${src}`);
  return resolved.startsWith(`${root}${path.sep}`) && existsSync(resolved);
}
