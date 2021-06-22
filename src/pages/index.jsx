import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import {
  container,
  container2,
  rowC,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`
export default function IndexPage({ data }) {
  return (
    <Layout>
      <div className={rowC}>
        <div className={container}>
          <h1 className={intro}>Hello in our website Morocco Saffron !</h1>
          <p className={callOut}>
            This site is about the wealth of the kingdom namely the saffron which grows with a <b>unique quality</b> and its oils that <b>cannot be found anywhere else </b>such as argan oil as well as other products to be discovered cultivated with love. for your taste buds
        </p>
          <p className={callToAction}>
            Discover our blog to learn more about Moroccan craftsmanship, our role as mediator between cooperatives and our public overseas
          <a href="https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-shopify&utm_campaign=shopify-starter">
              <img
                src="https://www.gatsbyjs.com/deploynow.png"
                alt="Deploy to Gatsby Cloud"
                className={deployButton}
              />
            </a>
          </p>
        </div>
        <div className={container2}>

          <a href="https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-shopify&utm_campaign=shopify-starter">
            <img
              src="https://t4.ftcdn.net/jpg/04/20/72/73/360_F_420727304_ca6ckjpUgPdNUGgnGN1bKC6AyYHuqGVI.jpg"
              alt="Deploy to Gatsby Cloud"
              height='30%'
              className={deployButton}
            />
          </a>

        </div>
      </div>
      <ProductListing products={data.shopifyCollection.products} />
    </Layout>
  )
}
