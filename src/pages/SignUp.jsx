import { useForm } from "react-hook-form"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRef, useState } from "react"
import {ReactComponent as AddPhoto} from '../assets/img/add_photo.svg'

function SignUp() {
  const inputRef = useRef(null)
  const { register, handleSubmit, watch, formState: {errors}, setError} = useForm()
  const {ref} = register('photo', {required: "Image is required"});
  const [photoPreview, setPhotoPreview] = useState(null);
  const users = JSON.parse(localStorage.getItem("users"))

  const onSubmit = (data) => {
    const userData = {
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      password: data.password,
      photo: data.photo
    }
    if(!users.some(user => user.email == data.email)) {
      localStorage.setItem("user", JSON.stringify(data))
      localStorage.setItem("users", JSON.stringify(users ? [...users, data] : [data]))
  
      window.location.href = "/"
    } else {
      setError("email", {
        type: "manual",
        message: "There is user with this email",
      })
    }
  }

  const handleChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      register("photo", URL.createObjectURL(file))
      setPhotoPreview(URL.createObjectURL(file))
    }
  }

  return (
    <div className="min-w-[600px]">
      <Header showLinks={false}/>
      
      <div className="flex justify-center items-center pt-[64px] bg-[#F6F6F6]">
        <div className="max-w-lg mx-auto px-16 py-12 my-20 bg-white rounded-2xl">
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <label className="auth_label">Firstname</label>
              <input className="auth_input" {...register("firstname", {required: {value: true, message: 'Firstname is required'}, minLength: {value: 1, message: "Firstname have to contain at least 1 character"}})} placeholder="Enter your firstname" type="text" />
              {errors.firstname && <p className="auth_error">{errors.firstname.message}</p>}

              <label className="auth_label">Lastname</label>
              <input className="auth_input" {...register("lastname", {required: {value: true, message: 'Lastname is required'}, minLength: {value: 1, message: "Lastname have to contain at least 1 character"}})} placeholder="Enter your firstname" type="text" />
              {errors.lastname && <p className="auth_error">{errors.lastname.message}</p>}

              <label className="auth_label">Email</label>
              <input className="auth_input" {...register("email", {required: 'Email is required', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }})} placeholder="Enter your email" type="email" />
              {errors.email && <p className="auth_error">{errors.email.message}</p>}

              <label className="auth_label">Password</label>
              <input className="auth_input" {...register("password", {required: 'Password is required', minLength: {value: 8, message: "Passwords minimum length is 8 symbols"}})} placeholder="Enter your password" type="password" />
              {errors.password && <p className="auth_error">{errors.password.message}</p>}

              <label className="auth_label">Confirm Password</label>
              <input className="auth_input" {...register("confpassword", {required: 'Password is required', validate: (val) => {if (watch('password') != val) return "Your passwords do no match"}})} placeholder="Enter your password" type="password" />
              {errors.confpassword && <p className="auth_error">{errors.confpassword.message}</p>}

              <div className="mt-3">
                <input ref={(e) => {
                    ref(e)
                    inputRef.current = e
                  }} 
                  onChange={(e) => handleChange(e)} 
                  className="hidden" 
                  accept="image/png, image/jpeg" 
                  type="file" 
                />
                {photoPreview ? (
                  <img onClick={() => inputRef?.current?.click()} className="w-16 h-16 rounded-full object-cover cursor-pointer" src={photoPreview} alt="Preview" />
                ) : (
                  <div className="bg-[#E6EBFF] p-3 rounded-full w-fit cursor-pointer" onClick={() => inputRef?.current?.click()}>
                    <AddPhoto className="text-main w-8 h-8" />
                  </div>
                )}
              </div>
              {errors.photo && <p className="auth_error">{errors.photo.message}</p>}

              <button className="text-lg text-white bg-main w-full mt-4 py-2 rounded-xl" type="submit">Continue</button>
            </form>

            <div className="flex items-center gap-2 w-full mt-4">
              <div className="flex-1 h-[1px] bg-[#424244]/70"/>
              <span className="text-[#424244]/70">Or continue with</span>
              <div className="flex-1 h-[1px] bg-[#424244]/70"/>
            </div>

            <div className="flex items-center justify-between gap-4 mt-4">
              <div className="media_auth_block">
                <img className="p-3" src={require('../assets/img/logos/logo1.jpg')} alt="Facebook" />
              </div>
              <div className="media_auth_block">
                <img className="p-3" src={require('../assets/img/logos/logo2.png')} alt="Apple" />
              </div>
              <div className="media_auth_block">
                <img className="p-3" src={require('../assets/img/logos/logo3.png')} alt="Gmail" />
              </div>
              <div className="media_auth_block">
                <img className="p-3" src={require('../assets/img/logos/logo4.png')} alt="Google" />
              </div>
            </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default SignUp