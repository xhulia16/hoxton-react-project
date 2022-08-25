export function Profile() {
  return (
    <div className="profile">
      <h1>Profile Settings</h1>
      <form>
      <input name="pass" placeholder="new password"></input>
      <input name="new-pass"  placeholder=" confirm new password"></input>
      <button>Submit</button>
      </form> 
      <form>
      <input name="email" placeholder="new email"></input>
      <button>Submit</button>
      </form> 
      
    </div>
  );
}
