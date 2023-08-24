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
          <div onClick={() => router.push('/projects')} className="cursor-pointer text-sm font-semibold text-dark-blue hover:opacity-60">
            Go back
          </div>
          <div className="font-semibold uppercase tracking-widest">
            strategy development
          </div>
          <div className="border-l">
            <div className="space-y-10 border-b p-10">
              <div className="text-xl font-bold md:text-4xl">
                DEVELOPMENT OF A HUMAN RESOURCE FOR HEALTH (HRH) DATABASE AND
                TIMELY ACTIVITIES REPORTING PLATFORM
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">Clients</div>
                <div>The Zamfara State Primary Health Care Board</div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Project Objective(s)
                </div>
                <div>
                  To launch a state-wide PHC human resource for health
                  assessment and an e-reporting platform to keep account of
                  serving Health care staff and their daily activities.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Key Project Activities
                </div>
                <div>
                  1. Captured data (profile) of over 700 HRH staff across all
                  cadre in the state. <br />
                  2. Developed reporting template that captures kind of work
                  executed. Template was used to validate payments.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">Result(s)</div>
                <img
                  src="https://res.cloudinary.com/daojlqwdo/image/upload/v1692018608/ace/projs/pd10_tru2di.jpg"
                  alt=""
                />
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">Donor(s)</div>
                <div className="flex w-1/2 gap-10">
                  <img
                    src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875981/ace/partners/p3-2_ak8nrg.png"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875947/ace/partners/p4_ask3lm.png"
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
