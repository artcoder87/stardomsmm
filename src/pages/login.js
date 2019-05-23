import React from "react"
import ContainerLayout from "../components/layouts/container-layout"
import "../styles/index.scss"

const LoginPage = () => {
  //Bootstrap test
  return (
    <ContainerLayout>
      <h1>Hello World</h1> 
      <a href="#" class="btn btn-primary btn-icon-split btn-lg">
        <span class="icon text-white-50">
          <i class="fas fa-flag"></i>
        </span>
        <span class="text">Split Button Large</span>
      </a>
    </ContainerLayout>
  )
}
export default LoginPage
