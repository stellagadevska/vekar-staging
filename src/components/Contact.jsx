import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { FaCheckCircle } from "react-icons/fa";

const SERVICE_ID = "service_jqyowmi";
const TEMPLATE_ID = "template_wjau79s";
const PUBLIC_KEY = "DgJDbC440rlwmyLxg";

const Contact = (props) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    surname: "",
    from_email: "",
    phone_number: "",
    business_name: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.from_name ||
      !form.surname ||
      !form.from_email ||
      !form.phone_number ||
      !form.business_name ||
      !form.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: `${form.from_name} ${form.surname}`,
          to_name: "360synergy",
          from_email: form.from_email,
          to_email: "stelagadevska@gmail.com",
          phone_number: form.phone_number,
          business_name: form.business_name,
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setModalMessage(
            "Thank you!\n We have received your request. We will contact you as soon as possible."
          );
          setForm({
            from_name: "",
            surname: "",
            from_email: "",
            phone_number: "",
            business_name: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setModalMessage("Sorry! Something went wrong! Please try again!");
        }
      );
  };

  const closeModal = () => {
    setModalMessage("");
  };

  const inputClass =
    "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium";

  return (
    <div className='xl:mt-12 flex flex-col-reverse md:flex-row gap-10 overflow-hidden px-5'>
      <div className='flex-[0.75] bg-black-100 p-8 rounded-2xl relative'>
        <button
          className='absolute top-4 right-4 text-white text-2xl'
          onClick={props.onClose}
        >
          &times;
        </button>
        <p className={styles.sectionSubText}>Get in touch - {props.title}</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <div className='flex flex-col md:flex-row gap-4'>
            <label className='flex flex-col w-full md:w-1/2'>
              <span className='text-white font-medium mb-4'>Name</span>
              <input
                type='text'
                name='from_name'
                value={form.from_name}
                onChange={handleChange}
                placeholder='First Name'
                className={inputClass}
              />
            </label>
            <label className='flex flex-col w-full md:w-1/2'>
              <span className='text-white font-medium mb-4'>Surname</span>
              <input
                type='text'
                name='surname'
                value={form.surname}
                onChange={handleChange}
                placeholder='Surname'
                className={inputClass}
              />
            </label>
          </div>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='from_email'
              value={form.from_email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={inputClass}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Phone Number</span>
            <input
              type='text'
              name='phone_number'
              value={form.phone_number}
              onChange={handleChange}
              placeholder='Your phone number'
              className={inputClass}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Business Name</span>
            <input
              type='text'
              name='business_name'
              value={form.business_name}
              onChange={handleChange}
              placeholder='Your business name'
              className={inputClass}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Services needed...accounting, etc
            </span>
            <textarea
              rows={2}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Tell us more'
              className={inputClass}
            />
          </label>
          <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='w-5 h-5'
            />
            <span className='text-white'>
              I agree to the terms and conditions
            </span>
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
              disabled={!isChecked}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>

      {modalMessage && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg max-w-sm w-full text-center'>
            {modalMessage.includes("Thank you") && (
              <div className='flex justify-center'>
                <FaCheckCircle className='text-green-500 text-4xl mb-4' />
              </div>
            )}
            <p className='text-black mb-6'>{modalMessage}</p>
            <button
              onClick={closeModal}
              className='bg-tertiary py-2 px-6 rounded-xl outline-none text-white font-bold'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
