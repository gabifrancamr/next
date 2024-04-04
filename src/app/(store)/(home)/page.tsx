import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60,
    },
  })

  const products = await response.json()

  return products
}

export default async function Home() {
  const [highLightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] md:grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`product/${highLightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end "
      >
        <Image
          src={highLightedProduct.image}
          width={600}
          height={600}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-12 md:bottom-28 right-21 h-12 flex items-center justify-between gap-2 md:min-w-[240px] max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highLightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highLightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end "
          >
            <Image
              src={product.image}
              width={280}
              height={280}
              quality={100}
              alt=""
              className="group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute bottom-4 md:bottom-8 right-15 h-8 md:h-12 flex items-center justify-between gap-2 min-w-[180px] md:min-w-[240px] md:max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-1 md:pl-5">
              <span className="text-xs md:text-sm truncate">
                {product.title}
              </span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-2 md:px-4 text-xs md:text-base font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
