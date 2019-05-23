import React from "react"
import "../styles/index.scss"
import Head from "../components/Head"

const WrapperLayout = (props) => {
  return (
    <Head>
      <div class="container">
        {props.children}
      </div>
    </Head>
  )
}

export default WrapperLayout