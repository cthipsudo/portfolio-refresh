import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mwkypngg");
  if (state.succeeded) {
    return (
      <div>
        <p>Sweet! You should hear back from me in a few days.</p>
      </div>
    );
  }
  return (
    <section className="contact-section">
      <div className="section-wrapper-inner">
        <div className="contact-header flex justify-start px-4 mb-4">
          <h3 className="underline">Contact Me</h3>
        </div>
        <div className="form-wrapper flex justify-center">
          <form className="flex flex-col gap-4 sm:px-4" onSubmit={handleSubmit}>
            <div className="flex flex-col items-start">
              <label htmlFor="firstName">First Name</label>
              <ValidationError
                prefix="FirstName"
                field="firstName"
                errors={state.errors}
              />
              <input id="firstName" type="text" name="firstName" />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="lastName">Last Name</label>
              <ValidationError
                prefix="LastName"
                field="lastName"
                errors={state.errors}
              />
              <input id="lastName" type="text" name="lastName" />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="email">Email Address</label>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <input id="email" type="email" name="email" />
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="Jot down all the important details here or you could just tell me how you day went :)"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="self-end px-4 py-1"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
