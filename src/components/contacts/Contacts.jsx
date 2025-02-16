import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import MailtoLink from "./MailtoLink";
import PhoneLink from "./PhoneLink";

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
    <div className="flex justify-center items-center min-h-[100vh] mt-36 lg:mt-8">
      <Card className="w-[90vw] lg:w-[75vw]  overflow-hidden ">
        <div className="flex h-full flex-col lg:flex-row gap-10">
          {/* Left Section: Contact Form */}
          <div className="w-full lg:w-1/2 p-11 flex flex-col gap-y-5">
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="text-gray-600 mb-6">
              We&apos;re here to help! Reach out with any questions, and our
              team will assist you within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-7">
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
              {/* 
              <div className="flex items-center space-x-2">
                <Checkbox id="privacy" required />
                <Label htmlFor="privacy" className="text-sm">
                  By selecting this you agree to our{" "}
                  <Link to="/" className="underline">
                    Privacy Policy
                  </Link>
                  .
                </Label>
              </div> */}

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
          <div className="w-full h-full lg:w-1/2 space-y-8  bg-slate-50 p-11">
            <div className="flex gap-x-4">
              <div>
                <MapPin />
              </div>
              <div className="flex flex-col gap-y-3 4 w-full">
                <h3 className="text-xl font-bold ">Visit our office</h3>
                {/* <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  consectetur.
                </p> */}

                <div className="md:flex md:gap-x-4 4 w-full">
                  <div className=" md:w-1/2">
                    <p className="text-md font-bold">Head Office</p>
                    <p className="text-gray-600 mt-2 text-wrap ">
                      007 Jewels of Alibag, Vidyanagar East, Alibag,
                      Raigad-402201
                    </p>
                  </div>

                  <div className="md:w-1/2 mt-4 md:mt-0 ">
                    <p className="text-md font-bold">Branch Office</p>
                    <p className="text-gray-600 mt-2">
                      1302 Rishikesh Heights, Sector 24, Taloja Phase 2, Navi
                      Mumbai-410208
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex gap-x-4">
              <div>
                <Mail />
              </div>
              <div className="flex flex-col gap-y-3 w-full">
                <h3 className="text-xl font-bold ">Email Us</h3>
                {/* <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  consectetur.
                </p> */}

                <div className="md:flex md:gap-x-4 w-full">
                  <div className=" md:w-1/2">
                    <p className="text-md font-bold">General Inquiries: </p>
                    <p className="text-gray-600 mt-2 text-wrap ">
                      <MailtoLink
                        email="info@amcbharat.com"
                        label="info@amcbharat.com"
                      />
                    </p>
                  </div>

                  <div className="md:w-1/2 mt-4 md:mt-0 ">
                    <p className="text-md font-bold"> Admin Support:</p>
                    <p className="text-gray-600 mt-2">
                      <MailtoLink
                        email="admin@amcbharat.com"
                        label="admin@amcbharat.com"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex gap-x-4 ">
              <div>
                <Phone />
              </div>
              <div className="flex flex-col gap-y-3  w-full">
                <h3 className="text-xl font-bold ">Call Us</h3>

                <div className="md:flex md:gap-x-4 w-full ">
                  <div className=" md:w-1/2 ">
                    <p className="text-md font-bold">Services: </p>
                    <p className="text-gray-600 mt-2 text-wrap ">
                      <PhoneLink phone="+918010030963" label="+91-8010030963" />
                    </p>
                  </div>

                  <div className="md:w-1/2 mt-4 md:mt-0 ">
                    <p className="text-md font-bold"> Sales:</p>
                    <p className="text-gray-600 mt-2">
                      <PhoneLink phone="+918766030074" label="+91-8766030074" />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Contacts;
