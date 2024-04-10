'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget) // traz todos os campos do formulário
    const data = Object.fromEntries(formData) // transforma em um objeto

    const query = data.q // acesso o campo de busca

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[200px] md:w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="w-5 h-5 text-zinc-500" />

      <input
        name="q"
        defaultValue={query ?? ''}
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        type="text"
        placeholder="buscar produtos aqui..."
        required
      />
    </form>
  )
}
