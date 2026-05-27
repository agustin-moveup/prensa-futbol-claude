import tokensRaw from "../../tokens/pf.json";

type TokenTree = { [key: string]: number | string | TokenTree };

function flattenTokens(
  tree: TokenTree,
  prefix: string = "--gds"
): Array<[string, string]> {
  const entries: Array<[string, string]> = [];

  for (const [key, value] of Object.entries(tree)) {
    const varName = key === "DEFAULT" ? prefix : `${prefix}-${key}`;

    if (typeof value === "object" && value !== null) {
      entries.push(...flattenTokens(value as TokenTree, varName));
    } else {
      // Apply px unit for space and radius numeric values
      const isNumeric = typeof value === "number";
      const needsPx =
        isNumeric &&
        (prefix.startsWith("--gds-space") || prefix.startsWith("--gds-radius"));
      const cssValue = needsPx ? `${value}px` : String(value);
      entries.push([varName, cssValue]);
    }
  }

  return entries;
}

export function generateCssVars(): string {
  const pairs = flattenTokens(tokensRaw as TokenTree);
  return pairs.map(([k, v]) => `  ${k}: ${v};`).join("\n");
}

export const tokens = tokensRaw;
