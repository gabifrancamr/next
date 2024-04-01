import { Suspense } from 'react'

import { LongWaitComponent } from '@/components/long-wait-component'
import GithubProfile from '@/components/github-profile'

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos nulla
        laudantium, provident distinctio sapiente neque quis blanditiis,
        similique dolore ab natus nobis veniam perspiciatis sint minima expedita
        velit eveniet.
      </p>
      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
