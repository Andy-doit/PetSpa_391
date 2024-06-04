
import { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "jwt-decode";
import { loginFailure, loginStart, signUpFailure, signUpStart } from "@/lib/redux/slice/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { LoginInput, SignupInput } from "@/models/authentication";
import baseApi from "@/utilities/baseApi";
import { ROLE } from "@/utilities/roleUtils/role";

import { useRouter } from "next/navigation";
import { LoginError, SignUpError } from "@/utilities/authUtils/loginValidation";
interface roleJwt extends JwtPayload {
  role: string;
  id: string;
  unique_name: string;
}
export function useAuth() {
  const state = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = async (value: LoginInput) => {
    dispatch(loginStart());
    try {
      const { data } = await baseApi.post(`api/v1/auth/signin`, {
        username: value.username,
        password: value.password,
      });
         console.log(data)
      const decodeToken = jwtDecode(data.token) as roleJwt;
      console.log(decodeToken)
    

      console.log(decodeToken);
      switch (decodeToken?.role) {
        case ROLE.role1:
             router.replace(`/`);
          break;
        case ROLE.role2:
         router.replace(`/shopOwner`);
          break;
        case ROLE.role3:
         router.replace(`/`);
          break;
        default:
          break;
      }

      localStorage.setItem("token", data.token);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorResponse = error?.response?.data?.error?.message;
        if (errorResponse in LoginError ) {
          const translatedError =
            LoginError[errorResponse as keyof typeof LoginError];
          dispatch(loginFailure(translatedError));
        } else {
          dispatch(loginFailure(errorResponse));
        }
      } else {
        dispatch(loginFailure("Đã có lỗi xảy ra"));
      }
    }
  };
  const handleSignup = async (value: SignupInput) => {
      dispatch(signUpStart());
    try { 
 const { data } = await baseApi.post(`api/v1/auth/signup`, {
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        username: value.username,
        password: value.password,
      });
    } catch (error) {
       if (error instanceof AxiosError) {
        const errorResponse = error?.response?.data?.error?.message;
        if (errorResponse in SignUpError ) {
          const translatedError =
           SignUpError[errorResponse as keyof typeof LoginError];
          dispatch(signUpFailure(translatedError));
        } else {
          dispatch(signUpFailure(errorResponse));
        }
      } else {
        dispatch(signUpFailure("Đã có lỗi xảy ra"));
      }
    }
  }

  return { state, handleLogin, handleSignup };
}
