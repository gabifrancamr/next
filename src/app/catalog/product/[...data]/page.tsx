import { AddToCartButton } from './add-to-cart-button'
import Test from './test'

interface ProductsProps {
  params: {
    data: string[]
  }
}

export default async function Products({ params }: ProductsProps) {
  const response = await fetch('https:api.github.com/users/gabifrancamr')

  const user = await response.json()

  console.log(user)

  const [productId, size, color] = params.data

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCartButton>
        <Test />
      </AddToCartButton>
    </div>
  )
}
