import React from "react";

function SignUp() {
	return (	
        <form>
            <label>
                Email:
                <input type="text" name="email" />
            </label>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Password:
                <input type="text" name="password" />
            </label>
            <button type="submit" value="Submit">Sign Up</button>
        </form>
	);
}
export default SignUp;