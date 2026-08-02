import { WorkforceGroupPage, groupMetadata } from "@/components/marketing/workforce-group-page"

export const metadata = groupMetadata("marketing-sales")

export default function Page() {
  return <WorkforceGroupPage slug="marketing-sales" />
}
