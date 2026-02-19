import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "IND",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      alert(res.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "IND",
        message: "",
      });
    } catch (error) {
      alert("Error saving data");
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          If you want to contact with me then please fill the form!
        </p>
      </div>

      {/* IMPORTANT: onSubmit form me lagaya */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-full rounded-md border px-3.5 py-2"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="block w-full rounded-md border px-3.5 py-2"
              required
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md border px-3.5 py-2"
              required
            />
          </div>

          {/* Phone */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="flex gap-2">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="rounded-md border px-3"
              >
                <option value="IND">IND</option>
                <option value="US">US</option>
                <option value="CA">CA</option>
              </select>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-md border px-3.5 py-2"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="block w-full rounded-md border px-3.5 py-2"
              required
            />
          </div>
        </div>

        <div className="mt-10">
          {/* Button me onClick hata diya */}
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-white"
          >
            Let`s talk
          </button>
        </div>
      </form>
    </div>
  );
}
  