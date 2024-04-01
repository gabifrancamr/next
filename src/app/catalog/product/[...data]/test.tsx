export default async function Test() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return <h1>Test</h1>
}
