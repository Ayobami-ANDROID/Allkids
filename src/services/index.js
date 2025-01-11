import * as yup from "yup";
import axios from "axios";

axios.defaults.baseURL= "https://cocreate.9ijakids.com/api"


export const wishlist = yup.object().shape({
    email:yup.string().email().required('email is required'),
    name: yup.string().required('name is required'),
    phoneNumber:yup.string().required('phone number is required'),
    platformSegmentId:yup.string(),
    platform:yup.string(),
    emailVerificationUrl:yup.string()

})