import Header from "../components/Header"
import { useForm } from "react-hook-form"
import { useState } from "react"
import Modal from "../components/Modal"
import Footer from "../components/Footer"

function SignIn() {
  const { register, handleSubmit, watch, formState: {errors}, setError} = useForm()
  const users = JSON.parse(localStorage.getItem("users"))
  const [isOpen, setIsOpen] = useState(false)

  const onSubmit = (data) => {
    if(users.some(user => user.email == data.email && user.password == data.password)) {
      localStorage.setItem("user", JSON.stringify({
        email: data.email,
        password: data.password
      }))

      window.location.href = "/"
    } else {
      setError("email", {
        type: "manual",
        message: "Email or password are incorrect",
      })
    }
  }

  return (
    <div className="min-w-[600px] bg-[#F6F6F6]">
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <div>
            <h3 className="text-2xl text-center">Terms and conditions</h3>
            <p className="mt-3 leading-5">Before you use our website or services, please carefully read the following Terms and Conditions. By accessing or using our platform, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please do not use our services. Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and disclose information about you. By using our services, you consent to our privacy practices.</p>
          </div>

          <div>
            <h3 className="text-2xl text-center">Privacy policy</h3>
            <p className="mt-3 leading-5">We may collect personal information, such as your name, email address, and other details, when you register an account, make a purchase, or interact with our services. We also automatically collect certain information, such as IP addresses, browser type, and usage patterns, through cookies and similar technologies. Our website may contain links to third-party websites or services.</p>
          </div>

          <div className="flex justify-center mt-10">
            <button onClick={() => setIsOpen(false)} className="w-[calc(100%/1.5)] text-xl text-center text-white bg-main py-2 rounded-xl">I agree</button>
          </div>
        </Modal>
      )}

      <Header showLinks={false}/>
      
      <div className="flex justify-center items-center pt-[64px]">
        <div className="max-w-lg mx-auto px-16 py-12 my-20 bg-white rounded-2xl">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label className="text-sm text-[#424244] ml-3 mb-2">Email</label>
            <input className="border-2 border-main px-3 py-2 rounded-xl placeholder:text-[#424244] outline-none" {...register("email", {required: 'Email is required', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }})} placeholder="Enter your email" />
            {errors.email && <p className="text-red-600 ml-3">{errors.email.message}</p>}

            <label className="text-sm text-[#424244] ml-3 mb-2 mt-3">Password</label>
            <input className="border-2 border-main px-3 py-2 rounded-xl placeholder:text-[#424244] outline-none" {...register("password", {required: 'Password is required', minLength: {value: 8, message: "Passwords minimum length is 8 symbols"}})} placeholder="Enter your password" type="password" />
            {errors.password && <p className="text-red-600 ml-3">{errors.password.message}</p>}

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

          <hr />

          <p className="text-center leading-5">By signing in or creating an account, you agree with our <button onClick={() => setIsOpen(true)} className="text-main">Terms & conditions and Privacy policy</button></p>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default SignIn