import { useEffect, useState } from "react";
import popupStyles from "../styling/custom-popup.module.css";
import PropTypes from "prop-types";
import { isUserLoggedIn } from "../redux/slice/UserSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
const CustomPopup = (props) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    dispatch(isUserLoggedIn())
        .unwrap()
        .then((result) => {
          console.log("loggedIn", result);
        })
        .catch((error) => {
          navigate("/login");
          alert(error.message)
        })
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <h2>{props.title}</h2>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <div className={popupStyles.content}>{props.children}</div>
      </div>
    </div>
    
  );
};

CustomPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
export default CustomPopup;