import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!/^\d{10}$/.test(formData.phone))
      tempErrors.phone = "Enter a valid 10-digit phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Enter a valid email";
    if (!formData.message.trim())
      tempErrors.message = "Message cannot be empty";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      form.elements[index + 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccessMessage("");

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setErrors({
          general: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      setErrors({ general: "Error sending message. Please try again later." });
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Card className="w-[90vw] lg:w-[75vw] h-fit p-5 ">
        <div className="flex flex-col md:flex-row gap-10 p-6">
          {/* Left Section: Contact Form */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="text-gray-600 mb-6">
              We&apos;re here to help and answer any questions you might have.
              We look forward to hearing from you! Our team is ready to assist
              you within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

              <Input
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}

              <Input
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <Textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}

              <div className="flex items-center space-x-2">
                <Checkbox id="privacy" required />
                <Label htmlFor="privacy" className="text-sm">
                  By selecting this you agree to our{" "}
                  <Link to="/" className="underline">
                    Privacy Policy
                  </Link>
                  .
                </Label>
              </div>

              {errors.general && (
                <p className="text-red-500 text-sm">{errors.general}</p>
              )}
              {successMessage && (
                <p className="text-green-500 text-sm">{successMessage}</p>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Right Section: Contact Info */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <MapPin /> Visit our office
              </h3>
              <p className="text-gray-600">
                1302 Rishikesh Heights, Plot 12A, Sector 24, Taloja Phase 2,
                Navi Mumbai
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Mail /> Email us
              </h3>
              <p className="text-gray-600">
                General Inquiries: info@example.com
              </p>
              <p className="text-gray-600">
                Admin Support: admin@amcbharat.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Phone /> Call us
              </h3>
              <p className="text-gray-600">+91 8010030963</p>
              <p className="text-gray-600">+91 8766030074</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Contacts;
