import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [formData, setFormData] = useState({});
   
    const [error,setError] = useState(null);
    

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/auth/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
               
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (data.success === false) {
                setError(data.message);
                return;
            }

            setError(null);
            navigate("/sign-in");
        } catch (error) {
            setError(error.message);
        }
    };
    console.log(formData)
    return (
        <div className="mx-auto p-3 max-w-lg">
            <h1 className="text-3xl text-center font-semibold my-7">
                Reset Password
            </h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    type="email"
                  
                    onChange={(e) =>  setFormData({
                        ...formData,
                        [e.target.id]: e.target.value,
                    })}
                    id="email"
                    className="border p-3 rounded-lg"
                    placeholder="Your Email"
                    required
                />
                 <input
    type="password"
    placeholder="new password"
    className="border p-3 rounded-lg"
    id="newPassword"
    onChange={(e) => setFormData({
        ...formData,
        newPassword: e.target.value,
    })}
/>


                <button className="bg-[#0f172a] uppercase hover:opacity-95 disabled:opacity-80 text-white p-3 rounded-lg">
                    Reset Password
                </button>
            </form>
            {error && <p className="text-red-500 mt-5">{error}</p>}
        </div>
    );
};

export default ForgotPassword;