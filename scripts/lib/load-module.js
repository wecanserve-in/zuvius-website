/*
 * Loads one of the site's plain data files (src/...) in Node at build time.
 * Those files use `export`, which plain Node scripts can't `require`, so the
 * exports are rewritten into a module.exports object and run in a sandbox.
 * Only works for files with no imports (data and config files).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..", "..");

function loadModule(relativePath) {
  const file = path.join(ROOT, relativePath);
  let source = fs.readFileSync(file, "utf8");
  const names = [];

  source = source
    .replace(/export\s+default\s+([A-Za-z_$][\w$]*)\s*;?/g, (_, name) => {
      names.push(`default: ${name}`);
      return "";
    })
    .replace(/export\s+(const|let|var|function)\s+([A-Za-z_$][\w$]*)/g, (_, kind, name) => {
      names.push(name);
      return `${kind} ${name}`;
    });

  source += `\nmodule.exports = { ${names.join(", ")} };\n`;

  const sandbox = { module: { exports: {} }, console };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: file });
  return sandbox.module.exports;
}

module.exports = { loadModule, ROOT };
