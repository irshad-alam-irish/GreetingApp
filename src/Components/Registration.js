import React from 'react';
import "./Registration.css";

function Registration(props) {
    let btnStyle;
    let btnName;
    let btntype;
    if (props.isShow === true) {
        btnStyle = {
            backgroundColor: "green",
            color: "white",
        };
        btnName = "Hide Password";
        btntype = "text";

    }
    else {
        btnStyle = {
            backgroundColor: "red",
            color: "white",
        };
        btnName = "Show Password";
        btntype = "password";
    }

    return (
        <div className='registration'>
            {/* ***********************div1******************************* */}
            <div className='div1'>
                <div className='div1-1'><p className='hey'><div>Hey👋</div><div>this is </div><div className='irish'>irish</div></p></div>
                <div className='div1-2'><img className="pic1"
                    src={require('./pics/scooter.png')}
                     alt=""
                /></div>
            </div>
            {/* ***********************div2******************************* */}

            <div className='div2'>
                <form className='container card p-3 ' onSubmit={props.submit}>
                    <h3 className=' getstarted ' ><b>Get Started</b></h3>

                    <p className='already'>Already have an account?</p>


                    <button className='google'>
                        <img className='googlepic' src={require('./pics/google.png')} alt="" />
                        Sign Up
                    </button>
                    <button className='facebook'>
                        <img className='facebookpic' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABOUlEQVR4nN2VQU7CUBCG0arhHG6NaxO9gSaG1IDECxguoFvihhDhBC5EQS7gzrVLDlC1kHAExTUfmeQZX16m75XCRv+km8f3z09npm2p9K8F7ADnwBBIgG9zJeasJkzR4mfAmLBSIF6mcAR0WF63wGaegCLFf9TO0xafPoEr4BDYBfaBZ4ep+Abq6/kcOFJ89w73oQ7ebItPr86fuQSugZHCVrUAWTuf7ixW2uTTQAt4C5huLPYxwCZawCxgalrsU4CdaQHyhGoqq1vx63tRPF8amBYMmCqedw3Muu0L2Qpgz2IPzFndrK+rvhYgcN4ZDAJsTQvYBiZrCEiBrax+VlYMmAOnvpmJubtCQMdb3Jg3Mt6ozUBAW7zBAKvIiTOTrABhjnMXVj4+MdADGtZ5C3gwv0WFiv8ZLQB0KH3o40ukYAAAAABJRU5ErkJggg==" alt="" />
                        facebook
                    </button>

                    <p className='text-center or'>Or</p>
                    {/* -----------------------------------------------------------------------------------*/}
                    <div className='form-group'>
                        <label htmlFor="">Username</label>
                        <input type='text' required name="name" className='form-control inputbox'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Email</label>
                        <input type='email' required name="email" className='form-control inputbox'></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Password</label>
                        <input type={btntype} required name="password" className='form-control  inputbox'></input>
                    </div>

                    <label htmlFor="" className='buttonlvl'> <button type='submit' className='btn btn-primary registerButton m-1 submitbtn'>Submit</button>

                        <button type='button' className='btn btn-primary showhide m-1 showpass' style={btnStyle} onClick={props.click}>{btnName}</button>
                    </label>

                </form>



            </div>
        </div>
    )
}
export default Registration;
