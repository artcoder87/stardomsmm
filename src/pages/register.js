import React from "react"
import ContainerLayout from "../components/layouts/container-layout"
import "../styles/index.scss"

const RegisterPage = () => {
  return (
    <ContainerLayout bgColor={"bg-gradient-secondary"}>
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input type="text" className="form-control-secondary form-control form-control-user" id="exampleName" placeholder="Name"/>
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control-secondary form-control form-control-user" id="exampleInputEmail" placeholder="Email Address"/>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control-secondary form-control form-control-user" id="exampleInputPassword" placeholder="Password"/>
                      </div>
                      <a href="login.html" className="btn btn-secondary btn-user btn-block">
                        Register Account
                      </a>
                      <hr/>
                      <div className="text-center">
                        <p className="text-secondary small text-secondary">Or Register With</p>
                        <ul className="nav justify-content-center">
                          <li className="nav-item">
                            <a className="nav-link text-decoration-none" href="#"><i className="fab fa-2x fa-facebook-f txt-gradient-kit txt-gradient-secondary"></i></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link text-decoration-none" href="#"><i className="fab fa-2x fa-twitter txt-gradient-kit txt-gradient-secondary"></i></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link text-decoration-none" href="#"><i className="fab fa-2x fa-linkedin-in txt-gradient-kit txt-gradient-secondary"></i></a>
                          </li>
                        </ul>
                      </div>
                    </form>
                    <hr/>
                    <div className="text-center">
                      <a className="small text-secondary" href="forgot-password.html">Forgot Password?</a>
                    </div>
                    <div className="text-center">
                      <a className="small text-secondary" href="login.html">Already have an account? Login!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </ContainerLayout>
  )
}
export default RegisterPage