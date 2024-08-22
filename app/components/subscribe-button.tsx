"use client";

import { useState } from "react";

import styles from "./subscribe-button-styles.module.css";

export default function SubscribeButton() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const subscribe = async () => {
    const url = `/api/mailchimp`;

    const firstName = name.split(" ")[0];
    const lastName = name.split(" ")[1];

    const data = {
      email_address: email,
      merge_fields: {
        FNAME: firstName ?? name,
        LNAME: lastName ?? "",
      },
    };

    console.log("fetching");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      console.log("RESPONSE DAtA ", responseData);

      // Set success message
      setShowSuccess(true);

      if (showError) {
        setShowError(false);
      }

      console.log("responseData ", responseData);
    } catch (err) {
      // Set error message
      setShowError(true);

      if (showSuccess) {
        setShowSuccess(false);
      }

      console.log("err fetching... ", err);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate
    // If everything is correct call subscribe
    subscribe();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //   style={{ width: "100%", padding: "8px", marginTop: "8px" }}
          className={styles.input}
        />
      </div>
      {showError && (
        <p className={styles.errorText}>
          {`Sorry, something went wrong please try again later. If it's still
            not working contact me and let me know!`}
        </p>
      )}
      {showSuccess && (
        <p className={styles.successText}>
          {`You subscribed! You will receive an email at ${email}, when we post our next update!`}
        </p>
      )}
      <div className={styles.btnContainer}>
        <button type="submit" disabled={submitted} className={styles.btn}>
          {submitted ? "Submitting..." : "Subscribe"}
        </button>
      </div>
    </form>
  );
}
