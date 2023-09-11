import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { useState } from "react";

export default function Careers() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    qualification: "",
    cgpa: "",
    degree: "",
    about: ""
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const formatDataForEmail = (data) => {
    return `
        Full Name: ${data.fullname}
        Email: ${data.email}
        Phone: ${data.phone}
        Qualification: ${data.qualification}
        CGPA: ${data.cgpa}
        Degree: ${data.degree}
        About: ${data.about}
    `;
};

  const processForm = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSent(false);
    setError(false);

    const formattedData = formatDataForEmail(data);

    // Create a FormData object to handle the file upload.
    // const formData = new FormData();
    // formData.append("message", formattedData); // Send the formatted data as a "message" field

    // const fileInput = e.target.elements.upload; // Get the file input from the form
    // if (fileInput.files.length > 0) {
    //   const file = fileInput.files[0];
    //   formData.append("upload", file); // Attach the file to the FormData
    // }

    // const response = await fetch("https://formspree.io/f/xpzgrnpj", {
    //   method: "POST",
    //   body: formData, // Send the FormData object
    //   headers: {
    //     Accept: "application/json",
    //     // Don't set the content type to JSON because you're sending a file
    //   },
    // });

    
    const response = await fetch("https://formspree.io/f/xpzgrnpj", {
      method: "POST",
      body: JSON.stringify({ message: formattedData }), // Send the formatted data as a "message" field
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    
    // const responseBody = await response.json();
    
    if (response.ok) {
        // console.log("Email sent successfully:", responseBody);
        setLoading(false);
        setError(false);
        setSent(true);
    } else {
        // console.log("Error sending email:", responseBody);
        setLoading(false);
        setSent(false);
        setError(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <Header />

      <Head>
        <title>Careers &mdash; Ace Strategy & Consults</title>
        <meta
          name="description"
          content="We aid organizations to design iterative, evidence-based, human-centred and actionable solutions."
        />
        <meta
          name="keywords"
          content="Ace Strategy, Consults, evidence-based solutions, human-centred design, actionable solutions"
        />
        <meta name="author" content="Ace Strategy & Consults" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acestrategy.org" />
        <meta property="og:title" content="Ace Strategy & Consults" />
        <meta
          property="og:description"
          content="We aid organizations to design iterative, evidence-based, human-centred and actionable solutions."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/daojlqwdo/image/upload//c_thumb,w_500,h_500,g_auto/v1692577688/ace/pexels-monstera-9430883_bqsij3.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://acestrategy.org" />
        <meta property="twitter:title" content="Ace Strategy & Consults" />
        <meta
          property="twitter:description"
          content="We aid organizations to design iterative, evidence-based, human-centred and actionable solutions."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/daojlqwdo/image/upload//c_thumb,w_500,h_500,g_auto/v1692577688/ace/pexels-monstera-9430883_bqsij3.png"
        />
      </Head>

      {/* <!-- SubHeader --> */}
      <div
        className="bg-gray-200 bg-cover bg-bottom p-14 text-white md:p-40"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/daojlqwdo/image/upload/v1691967938/ace/pexels-free-nature-stock-42393-2_qnos5x.jpg')`,
        }}
      >
        <div className="text-center text-2xl font-semibold uppercase tracking-widest text-white md:text-6xl">
          careers
        </div>
      </div>

      {/* <!-- Main --> */}
      <div className="grid">
        <div className="gap-12 px-6 py-10 md:px-28 md:py-28">
          <div className="grid md:gap-20 gap-10 space-y-6 md:grid-cols-1">
            <div className="space-y-6 place-self-center">
              <div>
                Open vacancies will be listed intermittently as they arise.{" "}
                <span className="font-semibold">
                  There are currently none at the moment.
                </span>
              </div>
              <div className="border-t"></div>
              {/* <div className="font-semibold">
                Click the link below to apply.
              </div> */}

              <div className="font-medium">
                Click&nbsp;
                <a target="_blank" rel="noreferrer"
                  className="text-blue-500 font-medium"
                  href="https://forms.gle/CsKSEmzRyTkG3X596"
                >
                  here
                </a>
                &nbsp;to submit your application.
              </div>
              <div>
                Applicant(s) would be contacted for a preliminary chat if the
                candidate&lsquo;s profile matches any available or vacant job
                position. Subsequently, all qualified candidates will be
                scheduled for a series of formal interviews, prior to taking a
                final decision.
              </div>
            </div>

            {/* <div className="mx-auto place-self-center">
              <form
                encType="multipart/form-data"
                onSubmit={processForm}
                className="grid gap-4 md:grid-cols-2"
              >
                <input
                  type="text"
                  required
                  name="fullname"
                  onChange={handleChange}
                  value={data?.fullname}
                  className="block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Fullname"
                />

                <input
                  type="email"
                  required
                  name="email"
                  value={data?.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Email"
                />

                <input
                  type="text"
                  required
                  name="phone"
                  value={data?.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Phone"
                />

                <input
                  type="text"
                  required
                  name="qualification"
                  onChange={handleChange}
                  value={data?.qualification}
                  className="block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Qualification"
                />

                <input
                  type="text"
                  required
                  name="cgpa"
                  value={data?.cgpa}
                  onChange={handleChange}
                  className="block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="CGPA"
                />

                <select
                  name="degree"
                  onChange={handleChange}
                  required
                  // value={data?.degree}
                  className="block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                >
                  <option>Select Degree</option>
                  <option value="first_class">First Class</option>
                  <option value="second_class_upper">Second Class Upper</option>
                </select>

                <textarea
                  name="about"
                  value={data?.about}
                  onChange={handleChange}
                  placeholder="Tell us about yourself"
                  required
                  className="col-span-2 block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                  rows="3"
                ></textarea>

                {/* <div className="col-span-2">
                  Your CV: <br />
                  <input type="file" name="upload" accept=".doc,.docx,.pdf" />
                </div> */}

            {/* {!loading ? (
                  <button
                    type="submit"
                    className="inline-flex cursor-pointer place-self-start bg-black px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white"
                  >
                    submit
                  </button>
                ) : (
                  <div className="font-medium text-yellow-600">
                    Sending . . .
                  </div>
                )}

                {sent && (
                  <div className="col-span-2 font-medium text-green-600">
                    Sent!
                  </div>
                )}

                {error && (
                  <div className="col-span-2 font-medium text-red-600">
                    An error occured, try again!
                  </div>
                )}
              </form>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
