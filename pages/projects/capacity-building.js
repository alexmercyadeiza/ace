import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Single() {
  const router = useRouter();
  return (
    <>
      <Header />

      <Head>
        <title>Capacity Building &mdash; Ace Strategy & Consults</title>
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
            Capacity Building
          </div>
          <div className="border-l space-y-10">
            {/* Project */}
            <div className="space-y-10 border-b p-10">
              <div className="text-xl font-bold md:text-4xl">
                LEADERSHIP TRAINING FOR SOCIAL BEHAVIOURAL CHANGE COMMUNICATION
                OFFICERS ON LEADERSHIP, STRATEGIC THINKING AND CREATIVITY
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Clients
                </div>
                <div>
                  Marie Stopes International Organization of Nigeria Options
                  Consultancy Services
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Project Objective(s)
                </div>
                <div>
                  &bull; To have an understanding of the health system
                  strengthening environment and managing people to foster the
                  development of strategic plans that yield to desired results.
                </div>

                <div>
                  &bull; To discover more professional ways of relating with
                  colleagues, stakeholders, and clients to maximize team
                  productivity and drive breakthrough.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Key Project Activities
                </div>
                <div>
                  1. Develop robust and tailored health system strengthening
                  content on leadership and strategic thinking and creativity.
                  <br />
                  2. Facilitated classroom training that featured lectures,
                  demonstration, group and individual exercises.
                  <br />
                  3. Conducted baseline and endline assessment to determine
                  knowledge gain.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Result(s)
                </div>
                <img
                  src="https://res.cloudinary.com/daojlqwdo/image/upload/v1692884195/ace/pd7_u92lqa.jpg"
                  alt=""
                />
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Donor(s)
                </div>
                <div className="flex w-1/2 gap-10">
                  <img
                    src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875947/ace/partners/p4_ask3lm.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Project */}
            <div className="space-y-10 border-b p-10">
              <div className="text-xl font-bold md:text-4xl">
                IMPLEMENTATION OF NUTRITION INTERVENTION
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Clients
                </div>
                <div>United Nations International Children&lsquo;s Fund</div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Project Objective(s)
                </div>
                <div>
                  &bull; To reduce the rate of malnutrition through home-made
                  food fortification.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Key Project Activities
                </div>
                <div>
                  1. Developed concept note on the use of homemade complementary
                  feeding approaches.
                  <br />
                  2. Supported implementation by training mothers on how to use
                  locally sourced food items to fortify their children&lsquo;s
                  food at a sustainable cost.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Result(s)
                </div>

                <img
                  src="https://res.cloudinary.com/daojlqwdo/image/upload/v1692884345/ace/pd8_frviwm.jpg"
                  alt=""
                />
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Donor(s)
                </div>
                <div className="flex w-1/2 gap-10">
                  <img
                    src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875868/ace/partners/p7_yt4nen.png"
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
