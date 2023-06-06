export default function normalizer<T>(source: unknown, model: T): T {
  const output: Record<string, unknown> = {}

  Object.keys(model).forEach((key) => {
    output[key] = source[key]
  })

  return output as T
}
