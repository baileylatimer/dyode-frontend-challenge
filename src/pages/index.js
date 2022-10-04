import * as React from "react"
import Date from "../components/date"
import Newsletter from "../components/newsletter"


const IndexPage = () => {
  return (
    <main>
      <Newsletter/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
