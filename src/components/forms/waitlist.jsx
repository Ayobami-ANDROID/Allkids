import { useState } from "react";
import { wishlist } from "../../services";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from 'react-hot-toast'
import { Loader2 } from 'lucide-react';

export const WaitlistForm = () => {
  const handleSubmit = (ev) => ev.preventDefault();
  const [isLoading,setIsLoading] = useState(false)

  const formik = useFormik({
    initialValues:{
      email:"",
      name:"",
      phoneNumber:"",
      platformSegmentId:"12",
      platform:"allkids",
      emailVerificationUrl:"https://allkids-sage.vercel.app"
    },
    validationSchema:wishlist,
    onSubmit:(values,{resetForm}) => {
          setIsLoading(true)
          axios.post(`/wishlists`,values)
          .then((res) => {
            console.log(res)
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
        {formik.touched.name &&formik.errors.name ? <p className="text-xs text-red-500">{formik.errors.name}</p> :" "}
        <input
          required
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="email"
          className={`w-full outline-none p-4 border-b border-b-yellow-normal bg-transparent placeholder:text-white placeholder:capitalize ${formik.touched.email && formik.errors.email ?"border-red-500":"border-b-yellow-normal"}`}
        />
          {formik.touched.email &&formik.errors.email ? <p className="text-xs text-red-500">{formik.errors.email}</p> :" "}
        <input
          required
          type="text"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          placeholder="phone number"
          className={`w-full outline-none p-4 border-b border-b-yellow-normal bg-transparent placeholder:text-white placeholder:capitalize ${formik.touched.phoneNumber && formik.errors.phoneNumber ?"border-red-500":"border-b-yellow-normal"}`}
        />
         {formik.touched.phoneNumber &&formik.errors.phoneNumber ? <p className="text-xs text-red-500">{formik.errors.email}</p> :" "}
      </div>

      <button type="submit" className="px-10 py-1.5 rounded-full bg-yellow-normal self-center text-black text-2xl">
       {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />} Join Now
      </button>
    </form>
  );
};
