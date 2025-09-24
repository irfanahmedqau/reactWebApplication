import LogIn from "./Pages/LogIn";
import Account from "./Pages/Account/Account";
import "./styles/General.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from "./Pages/ComingSoon";

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/account" element={<Account />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      
    </Router>
    </div>
    <div
            id="alertMessageDiv"
            className="positionedtopright notification"
            hidden
          >
            <FaExclamationCircle
              id="icon-danger"
              className="iconAlert"
              hidden
              size={25}
            />
            <FaCheckCircle
              id="icon-success"
              className="iconAlert"
              hidden
              size={25}
            />
            <FaExclamationCircle
              id="icon-info"
              className="iconAlert"
              hidden
              size={25}
            />
            &nbsp; <span id="alertMessageBody"></span>
            <FaTimesCircle
              className="closeButton"
              size={15}
              onClick={() => {
                let snackBar = document.getElementById("alertMessageDiv");
                snackBar.classList.remove("success");
                snackBar.classList.remove("danger");
                snackBar.classList.remove("info");
                let snackBarIcons =
                  document.getElementsByClassName("iconAlert");
                for (let icon of snackBarIcons) {
                  icon.removeAttribute("hidden");
                  icon.setAttribute("hidden", "true");
                }
                let snackBarMessage =
                  document.getElementById("alertMessageBody");
                snackBarMessage.innerHTML = "";
                snackBar.hidden = true;
              }}
            />
          </div>
          </>
  );
}

export default App;
