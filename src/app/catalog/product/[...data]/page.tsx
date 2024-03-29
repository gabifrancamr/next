interface ProductsProps {
  params: {
    data: string[]
  }
}

export default function Products({ params }: ProductsProps) {
  const [productId, size, color] = params.data
  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
    </div>
  )
}
