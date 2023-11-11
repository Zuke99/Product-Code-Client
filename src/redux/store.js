import { configureStore } from "@reduxjs/toolkit";
import CompanyFromSlice from "./slice/CompanyFormSlice";
import DoctorSlice from "./slice/DoctorSlice";
import PharmacySlice from "./slice/PharmacySlice";

export const store = configureStore({
    reducer : {
        companyForm : CompanyFromSlice,
        doctor : DoctorSlice,
        pharmacy : PharmacySlice,
    }
})