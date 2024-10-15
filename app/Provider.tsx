"use client"

import { ReactNode } from "react"
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense"
import Loader from "@/components/Loader"
import { getClerKUsers } from "@/lib/actions/user.actions"

export function Provider({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider
      authEndpoint='/api/liveblocks-auth'
      resolveUsers={async ({ userIds }) => {
        const users = await getClerKUsers({ userIds })
        return users
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  )
}
