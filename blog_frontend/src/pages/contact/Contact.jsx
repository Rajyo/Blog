import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast.success("Check your Mail", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
      theme: "dark",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        user_name: name,
        user_email: email,
        user_subject: subject,
        user_message: message,
      };

      await emailjs.send(
        "process.env.REACT_APP_SERVICE",
        "process.env.REACT_APP_TEMPLATE",
        templateParams,
        "process.env.REACT_APP_KEY"
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="ContactForm">
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "rgba(169, 112, 23, 0.82)",
          color: "white",
          padding: "10px",
        }}
      >
        Contact
      </h1>
      <div
        className="container"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        <div className="row" style={{ width: "100rem" }}>
          <div className="col-12 text-center">
            <div className="contactForm">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                style={{ backgroundColor:"#d1b0ea24"}}
              >
                {/* Row 1 of form */}
                <div className="row formRow">
                  <div className="col-6">
                    <label style={{ float: "left" }}>Name:</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ken Adams"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className="form-control formInput"
                    ></input>
                    {errors.name && (
                      <span className="errorMessage">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="col-6">
                    <label style={{ float: "left" }}>Email:</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="kenadams@friends.com"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className="form-control formInput"
                    ></input>
                    {errors.email && (
                      <span className="errorMessage">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className="row formRow">
                  <div className="col">
                    <label style={{ float: "left" }}>Subject:</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter Subject"
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Please enter a subject",
                        },
                        maxLength: {
                          value: 75,
                          message: "Subject cannot exceed 75 characters",
                        },
                      })}
                      className="form-control formInput"
                    ></input>
                    {errors.subject && (
                      <span className="errorMessage">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className="row formRow">
                  <div className="col">
                    <label style={{ float: "left" }}>Message:</label>
                    <textarea
                      rows={3}
                      name="message"
                      placeholder="Enter Message"
                      {...register("message", {
                        required: true,
                      })}
                      className="form-control formInput"
                    ></textarea>
                    {errors.message && (
                      <span className="errorMessage">
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>
                <button
                  className="submit-btn"
                  type="submit"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "0.8rem",
                    fontSize: "1rem",
                    borderRadius: "5px",
                    marginTop: "1rem",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
