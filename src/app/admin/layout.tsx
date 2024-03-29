import { ReactNode } from 'react'

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      <p>Painel de administração</p>
    </div>
  )
}
