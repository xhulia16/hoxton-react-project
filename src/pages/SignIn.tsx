export function SignIn({logIn}){
    return(
        <form onSubmit={(event)=>{
            event.preventDefault()
            let email=event.target.email.value
            let password=event.target.password.value
            console.log(email, password)

            fetch(`http://localhost:4000/users/${email}`)
            .then(resp=>resp.json())
            .then(user=> {
                if(user.password===password){
                   logIn(user)
                }
                else{
                    alert("Your email or password is incorrect!")
                }
            })
        }}
        className="logIn-form">
            <input name="email" placeholder="enter your email...">
            </input>
            <input name="password" type="password" placeholder="enter your password...">
            </input>
            <button>Log In</button>
        </form>
    )
}