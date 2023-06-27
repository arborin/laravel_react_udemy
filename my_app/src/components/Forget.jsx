import React from 'react'

export default function Forget() {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='offset-md-3 col-md-5' align="center">
                    <form>
                        {/* Email input */}
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example1">Email address</label>
                            <input type="email" id="form2Example1" class="form-control" />
                        </div>

                        <button type="button" class="btn btn-primary btn-block mb-4">Forget Password</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
