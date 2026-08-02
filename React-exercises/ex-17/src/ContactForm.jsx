import UseForm from "./UseForm";

const ContactForm = () => {
  const { values, handleChange, resetForm } = UseForm({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);

    alert("Form Submitted Successfully!");

    resetForm();
  };

  return (
    <div>
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Message</label>
          <br />
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Phone</label>
          <br />
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;