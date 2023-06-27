import React from 'react'

export default function Register() {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='offset-md-3 col-md-5' align="center">
                    <form>
                        {/* Name input */}
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example1">Full Name</label>
                            <input type="text" id="form2Example1" class="form-control" />
                        </div>
                        {/* Email input */}
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example1">Email address</label>
                            <input type="email" id="form2Example1" class="form-control" />
                        </div>

                        {/* Password input */}
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example2">Password</label>
                            <input type="password" id="form2Example2" class="form-control" />
                        </div>

                        {/* Password input */}
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example2">Confirm Password</label>
                            <input type="password" id="form2Example2" class="form-control" />
                        </div>



                        <button type="button" class="btn btn-primary btn-block mb-4">Register</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
