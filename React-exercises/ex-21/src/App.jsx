import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    terms: false,
    notifications: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "UI Design",
    "API Development",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value),
    }));

    setErrors((prev) => ({
      ...prev,
      skills: "",
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    const name = formData.fullName.trim();

    if (!name) {
      newErrors.fullName = "Full name is required";
    } else if (name.length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.fullName = "Name can only contain letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    if (!formData.experience) {
      newErrors.experience = "Please select experience";
    }

    if (formData.skills.length === 0) {
      newErrors.skills = "Select at least one skill";
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    console.log("Application:", formData);

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-3 py-4">

      {/* Container */}
      <div className="mx-auto max-w-xl">

        {/* Header */}
        <div className="mb-4 text-center">

          <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm">
            💼
          </div>

          <h1 className="text-xl font-bold text-slate-900">
            Developer Application
          </h1>

          <p className="mt-1 text-xs text-slate-500">
            Tell us about yourself and your experience.
          </p>

        </div>

        {/* Form Card */}
        <div className="rounded-xl bg-white p-4 shadow-md">

          <form onSubmit={handleSubmit}>

            {/* Personal Information */}
            <section className="mb-4">

              <h2 className="mb-3 text-sm font-semibold text-slate-900">
                Personal Information
              </h2>

              <div className="grid grid-cols-2 gap-x-3 gap-y-2">

                {/* Full Name */}
                <div className="col-span-2">

                  <label className="mb-1 block text-xs font-medium text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`h-9 w-full rounded-md border px-3 text-xs outline-none ${
                      errors.fullName
                        ? "border-red-400"
                        : "border-slate-200 focus:border-indigo-500"
                    }`}
                  />

                  {errors.fullName && (
                    <p className="mt-1 text-[10px] text-red-500">
                      {errors.fullName}
                    </p>
                  )}

                </div>

                {/* Email */}
                <div>

                  <label className="mb-1 block text-xs font-medium text-slate-700">
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`h-9 w-full rounded-md border px-3 text-xs outline-none ${
                      errors.email
                        ? "border-red-400"
                        : "border-slate-200 focus:border-indigo-500"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-1 text-[10px] text-red-500">
                      {errors.email}
                    </p>
                  )}

                </div>

                {/* Role */}
                <div>

                  <label className="mb-1 block text-xs font-medium text-slate-700">
                    Role <span className="text-red-500">*</span>
                  </label>

                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`h-9 w-full rounded-md border bg-white px-2 text-xs outline-none ${
                      errors.role
                        ? "border-red-400"
                        : "border-slate-200 focus:border-indigo-500"
                    }`}
                  >
                    <option value="">Select role</option>
                    <option value="Frontend Developer">
                      Frontend Developer
                    </option>
                    <option value="Backend Developer">
                      Backend Developer
                    </option>
                    <option value="Full Stack Developer">
                      Full Stack Developer
                    </option>
                    <option value="UI/UX Designer">
                      UI/UX Designer
                    </option>
                    <option value="Product Manager">
                      Product Manager
                    </option>
                  </select>

                  {errors.role && (
                    <p className="mt-1 text-[10px] text-red-500">
                      {errors.role}
                    </p>
                  )}

                </div>

                {/* Experience */}
                <div className="col-span-2">

                  <label className="mb-1 block text-xs font-medium text-slate-700">
                    Experience <span className="text-red-500">*</span>
                  </label>

                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={`h-9 w-full rounded-md border bg-white px-2 text-xs outline-none ${
                      errors.experience
                        ? "border-red-400"
                        : "border-slate-200 focus:border-indigo-500"
                    }`}
                  >
                    <option value="">Years of experience</option>
                    <option value="Less than 1 year">
                      Less than 1 year
                    </option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5-10 years">5-10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>

                  {errors.experience && (
                    <p className="mt-1 text-[10px] text-red-500">
                      {errors.experience}
                    </p>
                  )}

                </div>

              </div>
            </section>

            {/* Skills */}
            <section className="mb-4 border-t border-slate-100 pt-4">

              <h2 className="text-sm font-semibold text-slate-900">
                Skills
              </h2>

              <p className="mb-2 text-[11px] text-slate-500">
                Select your skills
              </p>

              <div className="grid grid-cols-2 gap-2">

                {skills.map((skill) => (
                  <label
                    key={skill}
                    className="flex h-8 cursor-pointer items-center gap-2 rounded-md border border-slate-200 px-2.5 hover:border-indigo-300 hover:bg-indigo-50"
                  >
                    <input
                      type="checkbox"
                      value={skill}
                      checked={formData.skills.includes(skill)}
                      onChange={handleSkillChange}
                      className="h-3.5 w-3.5 accent-indigo-600"
                    />

                    <span className="text-[11px] font-medium text-slate-700">
                      {skill}
                    </span>
                  </label>
                ))}

              </div>

              {errors.skills && (
                <p className="mt-1 text-[10px] text-red-500">
                  {errors.skills}
                </p>
              )}

            </section>

            {/* Preferences */}
            <section className="border-t border-slate-100 pt-4">

              <h2 className="mb-2 text-sm font-semibold text-slate-900">
                Preferences
              </h2>

              <div className="grid grid-cols-2 gap-3">

                {/* Terms */}
                <div>

                  <label className="flex cursor-pointer items-center gap-2">

                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleCheckboxChange}
                      className="h-3.5 w-3.5 accent-indigo-600"
                    />

                    <span className="text-[11px] text-slate-600">
                      I agree to the{" "}
                      <span className="font-medium text-indigo-600">
                        Terms
                      </span>{" "}
                      <span className="text-red-500">*</span>
                    </span>

                  </label>

                  {errors.terms && (
                    <p className="mt-1 text-[10px] text-red-500">
                      {errors.terms}
                    </p>
                  )}

                </div>

                {/* Notifications */}
                <label className="flex cursor-pointer items-center gap-2">

                  <input
                    type="checkbox"
                    name="notifications"
                    checked={formData.notifications}
                    onChange={handleCheckboxChange}
                    className="h-3.5 w-3.5 accent-indigo-600"
                  />

                  <span className="text-[11px] text-slate-600">
                    Receive notifications
                  </span>

                </label>

              </div>

            </section>

            {/* Success */}
            {submitted && (
              <div className="mt-3 rounded-md bg-green-50 px-3 py-2 text-xs text-green-700">
                ✓ Application submitted successfully!
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="mx-auto mt-4 block h-9 w-1/2 rounded-md bg-indigo-600 text-xs font-semibold text-white transition hover:bg-indigo-700"
            >
              Submit Application
            </button>

            <p className="mt-2 text-center text-[10px] text-slate-400">
              Fields marked with * are required.
            </p>

          </form>

        </div>
      </div>
    </div>
  );
};

export default App;