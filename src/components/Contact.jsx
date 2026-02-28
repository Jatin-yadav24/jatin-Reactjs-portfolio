import React, { useState } from "react";

const Contact = () => {
  const [toast, setToast] = useState({ show: false, type: "", msg: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setToast({
          show: true,
          type: "success",
          msg: "Message Sent Successfully!",
        });
        e.target.reset();
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      setToast({ show: true, type: "error", msg: "Error! Please Try Again." });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast({ show: false, type: "", msg: "" }), 3500);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-grid container">
        {/* --- Left Side: Contact Information --- */}
        <div className="contact-info">
          <div className="info-card-wrapper">
            <h3>Let's Connect</h3>
            <p>
              Currently seeking new opportunities to grow and contribute. If you think I’d be a good fit for your team or project, let’s get in touch.
            </p>

            <div className="contact-details-list">
              <div className="detail-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <span>Email Me</span>
                  <p>yadavjatin44285@gmail.com</p>
                </div>
              </div>

              <div className="detail-item">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <span>Call Me</span>
                  <p>+91 93017 91239</p>
                </div>
              </div>

              <div className="detail-item">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <span>Location</span>
                  <p>Indore, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Side: Original Web3Forms Form --- */}
        <div className="contact-content glass-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="access_key"
              value="c7247fe5-aecb-4e3a-bcb9-31ee6dec9211"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
            />
            <textarea
              name="message"
              placeholder="How can I help you?"
              required
            ></textarea>
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending... " : "Send Message "}
              <i
                className={`fa-solid ${isSubmitting ? "fa-spinner fa-spin" : "fa-paper-plane"}`}
              ></i>
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      <div
        className={`toast ${toast.show ? "show" : ""}`}
        style={{ background: toast.type === "error" ? "#ef4444" : "#10b981" }}
      >
        <i
          className={`fa-solid ${toast.type === "error" ? "fa-circle-xmark" : "fa-circle-check"}`}
        ></i>
        <span>{toast.msg}</span>
      </div>
    </section>
  );
};

export default Contact;
