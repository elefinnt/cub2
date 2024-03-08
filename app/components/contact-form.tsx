"use client";

export default function ContactForm() {
  async function handleSubmit(event: any) {
    event.preventDefault();

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      subject: String(event.target.subject.value),
      phone:
        event.target.phone.value.trim() !== ""
          ? Number(event.target.phone.value)
          : undefined,
    };
    const response = await fetch("/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Success");
    }
    if (!response.ok) {
      console.log("Error");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-bold" />
            <input
              type="text"
              id="name"
              name="name"
              value={undefined}
              onChange={undefined}
              required
              minLength={3}
              maxLength={18}
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name*"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-bold" />
            <input
              type="email"
              id="email"
              name="email"
              value={undefined}
              onChange={undefined}
              required
              minLength={5}
              placeholder="Email*"
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col">
            <label htmlFor="phone" className="font-bold" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={undefined}
              onChange={undefined}
              placeholder="Phone"
              required
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="font-bold" />
            <input
              type="text"
              id="subject"
              name="subject"
              value={undefined}
              required
              minLength={10}
              maxLength={500}
              onChange={undefined}
              placeholder="Project Info"
              className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
