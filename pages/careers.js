import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function Careers() {
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
            <div className="grid md:gap-20 gap-10 space-y-6 md:grid-cols-2">
              <div className="space-y-6 place-self-center">
                <div>
                  Open vacancies will be listed intermittently as they arise.{" "}
                  <span className="font-semibold">
                    There are currently none at the moment.
                  </span>
                </div>
                <div className="border-t"></div>
                <div className="font-semibold">
                  You can also upload your resume by filling the form below.
                </div>
                <div>
                  Applicant(s) would be contacted for a preliminary chat if the
                  candidate&lsquo;s profile matches any available or vacant job
                  position. Subsequently, all qualified candidates will be
                  scheduled for a series of formal interviews, prior to taking a
                  final decision.
                </div>
              </div>

              <div className="mx-auto place-self-center">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    className="block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="Fullname"
                  />

                  <input
                    type="email"
                    className="block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="Email"
                  />

                  <input
                    type="text"
                    className="block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="Phone"
                  />

                  <input
                    type="text"
                    className="block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="Qualification"
                  />

                  <input
                    type="text"
                    className="block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="CGPA"
                  />

                  <select className="block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0">
                    <option>Select Degree</option>
                    <option>First Class</option>
                    <option>Second Class Upper</option>
                  </select>

                  <textarea
                    placeholder="Tell us about yourself"
                    className="col-span-2 block w-full rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"
                    rows="3"
                  ></textarea>

                  <div className="inline-flex cursor-pointer place-self-start bg-black px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white">
                    submit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
}