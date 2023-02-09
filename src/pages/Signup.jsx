import React from 'react'
import { Input } from 'antd';






const Signup = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="banner">
            <div className="logo">
            <a href=""><img src="./assets/icon.png.svg" className='img' alt="" /></a>
            </div>
        </div>
    </div>

    <div className="form-content ">
        <div>
            <div className="center">
                <div className="form-button d-flex">
                    <div className="signup">Sign up</div>
                    <div className="sign-in">Sign in</div>

                </div>
                <div className="form-con">
                    <div>
                        <h2 className='Create'>Create your Account</h2>
                        <p className='form-para'>
                            <span>Build Skil For Today, Tomorrow, And Beyond<br/>
                            Education To future-Proof Your Carrer.</span>
                        </p>
                    </div>
                    <div className="provider-buttons">
                        <div className='g-btn'>
                            <div >
                                <button className='vds-btn p-2'>
                                    <span className='btn-content'>
                                Sign up with google
                                    </span>
                                </button>
                              
                            </div>
                            

                        </div>
                        <div className='g-btn'>
                            <div >
                                <button className='vds-btn p-2'>
                                    <span className='btn-content'>
                                Sign up with facebook
                                    </span>
                                </button>
                              
                            </div>
                            

                        </div>
                    </div>
                    <div className="hr d-flex">
                    <div className="before">
                        
                    </div>
                    <p className='mx-4'>or</p>
                    <div className="before">
                        
                        </div>
                      
                </div>
                <div className="form">
                <Input placeholder="First Name" className='p-2' />
                <Input placeholder="Last Name" className='mt-4 p-2'/>
                <Input placeholder="Email adress" className=' mt-4 p-2' />
                <Input placeholder="password" className='mt-4 p-2'/>
                <div className="inp">
                  <span>By clicking "sign in.,"You agree to our
                    <a href="" className='term'>Terms of use</a>
                    and our
                    <a href="" className='term'>Private policy</a>
                    .
                  </span>
                </div>
                <button className='form-btn'><span className='spn'>Sign in</span></button>


              
                </div>
                <br />
              
                </div>
                

            </div>
        </div>

    </div>
      
    </>
  )
}

export default Signup
