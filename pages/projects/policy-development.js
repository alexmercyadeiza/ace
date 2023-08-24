import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function Single() {
  const router = useRouter();
  return (
    <>
      <Header />
      {/* <!-- SubHeader --> */}
      <div
        className="bg-gray-200 bg-cover bg-bottom p-14 text-white md:p-40"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/daojlqwdo/image/upload/v1692017873/ace/pexels-pixabay-69126_dcspmp.jpg')`,
        }}
      >
        <div className="text-center text-2xl font-semibold uppercase tracking-widest text-white md:text-6xl">
          projects
        </div>
      </div>

      {/* <!-- Project --> */}
      <div className="grid">
        <div className="gap-12 space-y-10 px-6 py-12 md:px-28 md:py-28">
          <div
            onClick={() => router.push("/projects")}
            className="cursor-pointer text-sm font-semibold text-dark-blue hover:opacity-60"
          >
            Go back
          </div>
          <div className="font-semibold uppercase tracking-widest">
            Policy Development
          </div>
          <div className="border-l">
            <div className="space-y-10 border-b p-10">
              <div className="text-xl font-bold md:text-4xl">
                POLICY BRIEF ON FOOD SAFETY AND SECURITY
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Clients
                </div>
                <div>Nigeria Economic Summit Group</div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Project Objective(s)
                </div>
                <div>
                  &bull; To develop a policy brief that will identify global
                  best practices from a scoping of regional and international
                  food safety practices and public health response.
                </div>

                <div>
                  &bull; To outline investment pathways in food safety and
                  quality for improved citizens&lsquo; health.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Key Project Activities
                </div>
                <div>
                  1. Conducted desk review of relevant policy and strategy
                  documents for food safety in Nigeria as well as reports and
                  publications on food safety issues within and outside Nigeria.
                  <br />
                  2. Conducted comparative analyses of policy documents for
                  other country&lsquo;s ministries, departments or agencies.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Result(s)
                </div>
                <img
                  src="https://res.cloudinary.com/daojlqwdo/image/upload/v1692882294/ace/pd6_ezwbqu.jpg"
                  alt=""
                />
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Donor(s)
                </div>
                <div className="flex w-1/2 gap-10">
                  <img
                    src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875878/ace/partners/p1_kgqiyx.png"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875862/ace/partners/p9_j5qgwn.png"
                    alt=""
                  />
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
