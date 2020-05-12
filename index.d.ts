declare module '@gaarutyunov/lucene' {
  interface Lucene {
    parse(query: string): object;
    toString(ast: object): string;
  }

  const Lucene: Lucene;
}
