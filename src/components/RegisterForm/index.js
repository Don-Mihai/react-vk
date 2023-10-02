import "./RegisterForm.scss";


const RegisterForm = ({  }) => {
    let datas;
const onRegister = () => {
    console.log(datas)
}


const onChange = (event) => {
    datas = event.target.value

}




    return (
      <div className="component-register-form">
       <input onChange={onChange} type="text" placeholder="Phone or email"/>
       <button onClick={onRegister}>Sign in</button>
      </div>
    );
  };

  export default RegisterForm;
