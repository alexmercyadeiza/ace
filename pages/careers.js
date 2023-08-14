import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Careers() {
    return (
      <>
        <Header />

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