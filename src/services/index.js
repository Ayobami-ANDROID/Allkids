import * as yup from "yup";
import axios from "axios";

axios.defaults.baseURL= "https://cocreate.9ijakids.com/api"

const phoneRegExp = /^\d{3} \d{3} \d{4}$/;
export const wishlist = yup.object().shape({
    email:yup.string().email().required('email is required'),
    name: yup.string().required('name is required'),
    phoneNumber:yup.string().matches(phoneRegExp, "Invalid format").required('phone number is required'),
    platformSegmentId:yup.string(),
    platform:yup.string(),
    emailVerificationUrl:yup.string()

})