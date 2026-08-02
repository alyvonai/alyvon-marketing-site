import { WorkforceGroupPage, groupMetadata } from "@/components/marketing/workforce-group-page"

export const metadata = groupMetadata("customer-people")

export default function Page() {
  return <WorkforceGroupPage slug="customer-people" />
}
