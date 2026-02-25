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
      <div className="contact-content glass-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* YOUR API KEY HERE */}
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
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
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending... " : "Send Message "}
            <i
              className={`fa-solid ${isSubmitting ? "fa-spinner fa-spin" : "fa-paper-plane"}`}
            ></i>
          </button>
        </form>
      </div>

      {/* Toast Notification integrated here */}
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
