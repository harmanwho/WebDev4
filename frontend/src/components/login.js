import React from "react";

function LogIn() {
	return (	
        <form action="/login" method="POST">
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Password:
                <input type="text" name="password" />
            </label>
            <button type="submit" value="Submit">
                Log In
            </button>
        </form>
	);
}
export default LogIn;