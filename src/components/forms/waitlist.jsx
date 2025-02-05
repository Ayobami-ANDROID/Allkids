import { useState } from "react";
import { wishlist } from "../../services";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from 'react-hot-toast'
import { Loader2 } from 'lucide-react';
import { useEffect } from "react";
import {  useSearchParams,useNavigate } from "react-router-dom";
import callcodes from "../../services/callcode.json"

export const WaitlistForm = () => {
  const handleSubmit = (ev) => ev.preventDefault();
  const [isLoading,setIsLoading] = useState(false)
  const links = "https://allkids-sage.vercel.app"
  const [callCode,setCallCode] = useState("+234")
  const navigate= useNavigate()  
  const [params, setParams] = useState({
    email: '',
    otp: '',
    platform: ''
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const email = searchParams.get('email')?.replace(' ', '+')
    const otp = searchParams.get('otp');
    const platform = searchParams.get('platform');
    if (email && otp && platform) {
      setParams({ email, otp, platform });
      axios.post('/wishlists/verify-email',{
        email:email,
        platform:platform,
        otp:otp
      })
      .then((res) => {
        console.log(res)
        toast.success(res.data.message)
      })
      .catch((e) => {
        console.log(e.response.data.message)
        toast.error(e.response.data.message)
      })
    }
  
  },[])



  const formik = useFormik({
    initialValues:{
      email:"",
      name:"",
      phoneNumber:"",
      platformSegmentId:"12",
      platform:"kidpreneur",
      emailVerificationUrl:links
    },
    validationSchema:wishlist,
    onSubmit:(values,{resetForm}) => {
          setIsLoading(true)
          const body = {...values, phoneNumber:`${callCode} ${values.phoneNumber}`}
          axios.post(`/wishlists`,body)
          .then((res) => {
            console.log(res)
            navigate('/success')
            toast.success(res.data.message)
            
          })
          .catch((e) => {
            console.log(e.response.data.message)
            toast.error(e.response.data.message)
          })
          .finally(() =>{
            setIsLoading(false)
            resetForm()
          })
    }
  })

  const formatDigits = (value) => {
    return value
      .replace(/\D/g, "") // Remove non-digit characters
      .replace(/(\d{3})(\d{0,3})?(\d{0,4})?/, (_, p1, p2, p3) => {
        let parts = [p1];
        if (p2) parts.push(" " + p2);
        if (p3) parts.push(" " + p3);
        return parts.join("");
      });
  };


  return (
    <form
      id="waitlist-form"
      onSubmit={formik.handleSubmit}
      className="w-5/6 lg:w-full mx-auto basis-80 lg:flex-1 relative rounded-2xl lg:rounded-none p-10 py-20 bg-black flex flex-col items-center gap-8 text-white"
    >
      <h3 className="font-bold text-xl lg:text-3xl">Join the Waitlist Form</h3>

      <div className="flex flex-col gap-2 w-full">
        <input
          required
          type="text"
          placeholder="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          className={`w-full outline-none p-4 border-b border-b-yellow-normal bg-transparent placeholder:text-white placeholder:capitalize ${formik.touched.name && formik.errors.name ?"border-red-500":"border-b-yellow-normal"}`}
        />
        {formik.touched.name &&formik.errors.name ? <p className=" text-red-500">{formik.errors.name}</p> :" "}
        <input
          required
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="email"
          className={`w-full outline-none p-4 border-b border-b-yellow-normal bg-transparent placeholder:text-white placeholder:capitalize ${formik.touched.email && formik.errors.email ?"border-red-500":"border-b-yellow-normal"}`}
        />
          {formik.touched.email &&formik.errors.email ? <p className=" text-red-500">{formik.errors.email}</p> :" "}

        <div className="flex gap-2">
       
          <select className="w-[30%]  outline-none p-4 border-b border-b-yellow-normal bg-transparent placeholder:text-white placeholder:capitalize" value={callCode} onChange={(e) => setCallCode(e.target.value)}>
            {
              callcodes.map((codes,index) => (
                <option className="text-[#000]" key={index} value={codes.dial_code}> {codes.name}</option>
              ))
            }
          </select>
          <div className="flex flex-col w-[70%]">
          <input
          required
          type="tel"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={(e) => {
            const formattedValue = formatDigits(e.target.value);
            formik.setFieldValue("phoneNumber", formattedValue);
          }}
          placeholder="phone number"
          className={`w-full outline-none p-4 border-b border-b-yellow-normal bg-transparent placeholder:text-white placeholder:capitalize ${formik.touched.phoneNumber && formik.errors.phoneNumber ?"border-red-500":"border-b-yellow-normal"}`}
        />
         {formik.touched.phoneNumber &&formik.errors.phoneNumber ? <p className=" text-red-500">{formik.errors.email}</p> :" "}
          </div>
        </div>
    
      </div>

      <button type="submit" className="px-10 py-1.5 flex items-center justify-center rounded-full bg-yellow-normal self-center text-black text-2xl">
       {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />} Join Now
      </button>
    </form>
  );
};
