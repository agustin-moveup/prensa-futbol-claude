export interface BlockVariant {
  id: string;
  label: string;
}

export interface BlockState {
  id: string;
  label: string;
}

export interface BlockMeta {
  id: string;
  name: string;
  description: string;
  category: "betting" | "sports" | "editorial" | "commercial" | "generic";
  asset: string;
  variants: BlockVariant[];
  states: BlockState[];
  defaultVariant: string;
  defaultState: string;
  sampleData: Record<string, Record<string, unknown>>;
  tokensConsumed: string[];
  propsContract: string;
}
