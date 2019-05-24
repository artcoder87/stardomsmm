import React from "react"
import ContainerLayout from "../components/layouts/container-layout"
import "../styles/index.scss"

const PasswordPage = () => {
  return (
    <ContainerLayout bgColor={"bg-gradient-success"}>
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                      <p className="mb-4">Enter your email address below and we'll send you a link to reset your password!</p>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input type="email" className="form-control-success form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                      </div>
                      <a href="login.html" className="btn btn-success btn-user btn-block">
                        Reset Password
                      </a>
                    </form>
                    <hr/>
                    <div className="text-center">
                      <a className="small text-success" href="register.html">Create an Account!</a>
                    </div>
                    <div className="text-center">
                      <a className="small text-success" href="login.html">Already have an account? Login!</a>
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
export default PasswordPage