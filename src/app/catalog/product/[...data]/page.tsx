'use client'

interface ProductsProps {
  params: {
    data: string[]
  }
}

export default function Products({ params }: ProductsProps) {
  const [productId, size, color] = params.data

  console.log(params)

  function addToCart() {
    console.log('adicionar ao carrinho')
  }

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <button onClick={addToCart}>Adicionar ao carrinho</button>
    </div>
  )
}
