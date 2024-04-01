import { AddToCartButton } from './add-to-cart-button'

interface ProductsProps {
  params: {
    data: string[]
  }
}

export default async function Products({ params }: ProductsProps) {
  const response = await fetch('https:api.github.com/users/gabifrancamr')

  const user = await response.json()

  const [productId, size, color] = params.data

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCartButton />
    </div>
  )
}
