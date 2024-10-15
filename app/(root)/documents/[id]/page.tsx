import CollaborativeRoom from "@/components/CollaborativeRoom"
import { getDocument } from "@/lib/actions/room.actions"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser()

  // if not a current user means u r logged out
  if (!clerkUser) redirect("/sign-in")

  // else we have a current user
  const room = await getDocument({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  })

  // if no room go to home page
  if (!room) redirect("/")

  // TODO: Assess the permissions of the user to access the document
  return (
    <main className=' flex w-full flex-col items-center '>
      <CollaborativeRoom
        roomId={id}
        roomMetadata={room.metadata}
        users={[]}
        currentUserType='creator'
      />
    </main>
  )
}

export default Document
