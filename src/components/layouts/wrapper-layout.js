import React from "react"
import "../styles/index.scss"
import Head from "../components/Head"

const WrapperLayout = (props) => {
  return (
    <div id="wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Stardom Social Media Manager" />
        <meta name="author" content="NomadCoder87" />
        <title>Stardom - Social Media Manager</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"/>
      </Helmet>
      {props.children}
    </div>
  )
}

export default WrapperLayout