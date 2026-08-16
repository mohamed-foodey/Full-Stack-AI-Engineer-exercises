import { useForm } from "react-hook-form"

const StudentRegisteration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-slate-200 p-6">

                {/* Header */}
                <div className="mb-5">
                    <h1 className="text-xl font-bold text-slate-800">
                        Student Registration
                    </h1>

                    <p className="text-xs text-slate-500 mt-1">
                        Enter the student's information below.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >

                    {/* Student Name */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Student Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter student name"
                            {...register("studentName", {
                                required: "Student name is required"
                            })}
                            className={`w-full h-10 px-3 rounded-lg border text-sm outline-none
                            transition focus:ring-2 focus:ring-blue-100
                            ${errors.studentName
                                    ? "border-red-400 focus:border-red-400"
                                    : "border-slate-300 focus:border-blue-500"
                                }`}
                        />

                        {errors.studentName && (
                            <p className="text-xs text-red-500 mt-1">
                                {errors.studentName.message}
                            </p>
                        )}
                    </div>


                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter email address"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address"
                                }
                            })}
                            className={`w-full h-10 px-3 rounded-lg border text-sm outline-none
                            transition focus:ring-2 focus:ring-blue-100
                            ${errors.email
                                    ? "border-red-400 focus:border-red-400"
                                    : "border-slate-300 focus:border-blue-500"
                                }`}
                        />

                        {errors.email && (
                            <p className="text-xs text-red-500 mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>


                    {/* Grade Level */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Grade Level
                        </label>

                        <select
                            {...register("gradeLevel", {
                                required: "Please select your grade level"
                            })}
                            className={`w-full h-10 px-3 rounded-lg border bg-white text-sm outline-none
                            transition focus:ring-2 focus:ring-blue-100
                            ${errors.gradeLevel
                                    ? "border-red-400 focus:border-red-400"
                                    : "border-slate-300 focus:border-blue-500"
                                }`}
                        >
                            <option value="">Select grade level</option>
                            <option value="Grade 9">Grade 9</option>
                            <option value="Grade 10">Grade 10</option>
                            <option value="Grade 11">Grade 11</option>
                            <option value="Grade 12">Grade 12</option>
                        </select>

                        {errors.gradeLevel && (
                            <p className="text-xs text-red-500 mt-1">
                                {errors.gradeLevel.message}
                            </p>
                        )}
                    </div>


                    {/* Subjects Interested */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Subjects Interested
                        </label>

                        <div className="space-y-2">

                            {/* Math */}
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    value="Math"
                                    {...register("subjects", {
                                        required: "Please select at least one subject"
                                    })}
                                    className="w-4 h-4 accent-blue-600"
                                />

                                <span className="text-sm text-slate-700">
                                    Math
                                </span>
                            </label>

                            {/* Science */}
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    value="Science"
                                    {...register("subjects")}
                                    className="w-4 h-4 accent-blue-600"
                                />

                                <span className="text-sm text-slate-700">
                                    Science
                                </span>
                            </label>

                            {/* English */}
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    value="English"
                                    {...register("subjects")}
                                    className="w-4 h-4 accent-blue-600"
                                />

                                <span className="text-sm text-slate-700">
                                    English
                                </span>
                            </label>

                            {/* Chemistry */}
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    value="Chemistry"
                                    {...register("subjects")}
                                    className="w-4 h-4 accent-blue-600"
                                />

                                <span className="text-sm text-slate-700">
                                    Chemistry
                                </span>
                            </label>

                        </div>

                        {errors.subjects && (
                            <p className="text-xs text-red-500 mt-1">
                                {errors.subjects.message}
                            </p>
                        )}
                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full h-10 bg-blue-600 hover:bg-blue-700
                        text-white text-sm font-semibold rounded-lg
                        transition duration-200 mt-2"
                    >
                        Register Student
                    </button>

                </form>
            </div>
        </div>
    )
}

export default StudentRegisteration