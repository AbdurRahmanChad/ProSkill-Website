import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/MainLayout/Layout";
import OnlineCourses from "./Pages/OnlineCourses/OnlineCourses";
import RecordedCourses from "./Pages/RecordedCourses/RecordedCourses";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Admission from "./Pages/Admission/Admission";
import ScrollToTop from "react-scroll-to-top";
import PrivacyPolicy from "./Components/MainLayout/PrivacyPolicy";
import Footer from "./Components/Footer/Footer";
import TermsCondition from "./Components/MainLayout/TermsCondition";
import AppContextProvider from "./context/appContext";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/OnlineCourses" element={<OnlineCourses />}></Route>
          <Route path="/RecordedCourses" element={<RecordedCourses />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/Admission" element={<Admission />}></Route>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/TermsCondition" element={<TermsCondition />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      <div className="hidden sm:block md:block">
        <ScrollToTop
          smooth
          style={{
            background: "#ff4200",
            borderRadius: "80px",
            height: 50,
            width: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    </AppContextProvider>
  );
}

export default App;
