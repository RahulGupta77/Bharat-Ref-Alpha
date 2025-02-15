import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import { Card } from "@/components/ui/card";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.phone.match(/^\d{10}$/))
      tempErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      tempErrors.email = "Enter a valid email";
    if (!formData.message) tempErrors.message = "Message cannot be empty";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Card className="w-[75vw] h-fit p-5">
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
                className="w-full p-2 border rounded-md"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}

              <div className="flex items-center space-x-2">
                <Checkbox id="privacy" />
                <Label htmlFor="privacy" className="text-sm">
                  By selecting this you agree to our{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                  .
                </Label>
              </div>

              <Button type="submit" className="w-full">
                Send message
              </Button>
            </form>
          </div>

          {/* Right Section: Contact Info */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <MapPin /> Visit our offices
              </h3>
              <p className="text-gray-600">
                New Mexico: 4140 Parker Rd. Allentown, NM 31134
              </p>
              <p className="text-gray-600">
                Hawaii: 1901 Thornridge Cir. Shiloh, HI 81063
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Mail /> Email us
              </h3>
              <p className="text-gray-600">Sales: sales@example.com</p>
              <p className="text-gray-600">Careers: careers@example.com</p>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Phone /> Call us
              </h3>
              <p className="text-gray-600">+1 234 567 8901</p>
              <p className="text-gray-600">+1 987 654 3210</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Contacts;
