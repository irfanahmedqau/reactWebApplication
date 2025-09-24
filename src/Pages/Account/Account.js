import { Container } from "react-bootstrap";
import Demographic from "./Components/AccountInfo";
import Borrower from "./Components/BorrowerInfo";
import Miscellaneous from "./Components/MiscellaneousInfo";
import CustomNavBar from "../../GlobalComponents/NavBar";
import CollapsibleMobileNav from "../../GlobalComponents/mobileNavBar";
import CustomFooter from "../../GlobalComponents/Footer";
import PrimaryButton from "../../GlobalComponents/PrimaryButton";
import "./Account.css";
import SecondaryButton from "../../GlobalComponents/SecondaryButton";
import ResultsGrid from "../../GlobalComponents/DataGrid";
import LoginModal from "../../GlobalComponents/LoginModal";

function Account() {

  return (
    < >
      <CustomNavBar />
      <CollapsibleMobileNav />
      <div className="pageheight">
        <Container className="container mb-4">
          <Demographic />
          <Borrower />
          <Miscellaneous />
           <PrimaryButton onClick={()=>{}} className={"mt-2 mb-2"}>Search</PrimaryButton>
           <PrimaryButton onClick={()=>{}} className={"m-2"}>Search FDR</PrimaryButton>
           <SecondaryButton onClick={()=>{}} className={"mt-2 mb-2"}>Clear</SecondaryButton>
           <ResultsGrid />
            <PrimaryButton onClick={()=>{}} className={"m-2"}>Request Account</PrimaryButton>
             <PrimaryButton onClick={()=>{}} className={"mt-2 mb-2"}>Open Account</PrimaryButton>
        </Container>
      </div>
        <CustomFooter />
      <LoginModal />
    </>
  );
}
export default Account;
