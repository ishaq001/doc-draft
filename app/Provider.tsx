"use client"

import { ReactNode } from "react"
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense"
import Loader from "@/components/Loader"

export function Provider({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider
      authEndpoint='/api/liveblocks-auth'
      // publicApiKey={
      //   "pk_prod_CsbV9WB6cygZpE30a57gG3T2cZ0jCg8ElymKwfRe2i_0FcDaahi8EzLsYUpWY94f"
      // }
    >
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  )
}
