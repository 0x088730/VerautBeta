import React from "react";
import { colors, styles } from "./theme";
import { css } from "emotion";
import axios from "axios";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const inputStyle = css`
  display: block;
  width: 500px;
  padding: 4px 10px;
  color: ${colors.text};
  margin-top: 4px;
  background-color: ${colors.primaryDark};
  border: 2px solid ${colors.secondaryDarkest};
`;

const labelStyle = css`
  display: block;
  text-align: left;
  margin-bottom: 20px;
  color: ${colors.text};
  font-family: ${styles.family}
`;

const buttonStyle = css`
  ${styles.buttonPrimary}
  padding: 6px 15px;
  margin-top: 10px;
  
`;

const flexStyle = css`
  display: flex;
  justify-content: center;
`;

function axiosPostReducer(state, action) {
  switch (action.type) {
    case "sending":
      return {
        sending: true,
        response: "",
        error: false,
      };
    case "success":
      return {
        sending: false,
        response: "Message successfully sent!",
        error: false,
      };
    case "failed":
      return {
        sending: false,
        response: "Message could not be sent.",
        error: true,
      };
    default:
      throw new Error(`Unknown type: ${action.type}`);
  }
}

function useAxiosPost(url, body) {
  const [state, dispatch] = React.useReducer(axiosPostReducer, {
    sending: false,
    response: "",
    error: false,
  });

  React.useEffect(() => {
    if (body) {
      dispatch({ type: "sending" });

      axios
        .post(url, body)
        .then((_) => dispatch({ type: "success" }))
        .catch((_) => dispatch({ type: "failed" }));
    }
  }, [body, url]);

  return state;
}
const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};
const ContactForm = () => {
  const [body, setBody] = React.useState(null);
  const { sending, response, error } = useAxiosPost(
    "https://usebasin.com/f/82516ac996c6",
    body
  );

  function handleSubmit(e) {
    e.preventDefault();
    setBody(getFormData(e.target));
  }
  
  return (
    <>
      <div className={flexStyle}>
        <div>
          <form
            onSubmit={handleSubmit}
          >
            <label className={labelStyle}>
              Name
              <input
                className={inputStyle}
                id="name"
                type="text"
                name="name"
                required
              />
            </label>
            <label className={labelStyle}>
              Email Address
              <input
                className={inputStyle}
                id="email"
                type="email"
                name="email"
                required
              />
            </label>
            <label className={labelStyle}>
            Subject
              <input
                className={inputStyle}
                id="subject"
                type="subject"
                name="subject"
                required
              />
            </label>
            <label className={labelStyle}>
              Message
              <textarea
                className={inputStyle}
                id="message"
                name="message"
                rows="5"
                required
              />
            </label>
            {response && (
              <div
                className={css`
            text-align: left;
            margin-bottom: 10px;
            padding: 5px 15px;
            border: 2px solid ${error ? colors.errorLight : colors.successLight};
            background-color: ${error ? colors.error : colors.success};
          `}
              >
                {response}
              </div>
            )}
            <button type="submit" className={buttonStyle} disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className={css`margin-left: 45px`}>
          <br />
          <LoadScript
            googleMapsApiKey=""
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              { /* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
      </div>

    </>
  )
}
function getFormData(formNode) {
  return Object.getOwnPropertyNames(formNode.elements).reduce((obj, key) => {
    const formControl = formNode.elements[key];
    const name = formControl.getAttribute("name");
    if (name && !obj[name]) {
      obj[name] = formControl.value;
    }
    return obj;
  }, {});
}
export default ContactForm;