import { WorkforceGroupPage, groupMetadata } from "@/components/marketing/workforce-group-page"

export const metadata = groupMetadata("product-engineering")

export default function Page() {
  return <WorkforceGroupPage slug="product-engineering" />
}
