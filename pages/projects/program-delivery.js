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
        <title>Program Delivery / Implementation &mdash; Ace Strategy & Consults</title>
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
            Program Delivery/Implementation
          </div>
          <div className="border-l space-y-10">
            {/* Project */}
            <div className="space-y-10 border-b p-10">
              <div className="text-xl font-bold md:text-4xl">
                IMMUNIZATION, EDUCATION INTEGRATION BASELINE SURVEY
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Clients
                </div>
                <div>Kebbi State Primary Health Care Development Agency</div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Project Objective(s)
                </div>
                <div>
                  &bull; To review and validate reliability of existing data to
                  investigate and resolve barriers and challenges faced with
                  reaching missed children.
                </div>

                <div>
                  &bull; To guide the UNICEF Immunization and education
                  integration program reach eligible children and mothers in
                  various communities
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Key Project Activities
                </div>
                <div>
                  1. Alignment with state and LGA teams on approach and seeking
                  behavior while identifying critical areas program improvement
                  expectations of the survey.
                  <br />
                  2. Trained LGA team, screened and selected data collectors
                  data collection tools and approaches.
                  <br />
                  3. Conducted baseline data collection across outstanding 12
                  LGAs in the state.
                  <br />
                  4. Analyzed data and developed a comprehensive report on the
                  IEI baseline survey.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Result(s)
                </div>
                <div>
                  Provided clear baseline data, linking caregivers educational
                  level to their health seeking behavior while identifying
                  critical areas program improvement.
                </div>
                <img
                  src="https://res.cloudinary.com/daojlqwdo/image/upload/v1692882664/ace/pd1_barw79.jpg"
                  alt=""
                />
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Donor(s)
                </div>
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

            {/* Project */}
            <div className="space-y-10 border-b p-10">
              <div className="text-xl font-bold md:text-4xl">
                ENUMERATION OF UNDER 2, 5 CHILDREN AND WOMEN OF CHILDBEARING AGE
                (WCBA)
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Clients
                </div>
                <div>
                  Gombe,Kebbi and Zamfara State Primary Health Care Development
                  Agency
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Project Objective(s)
                </div>
                <div>
                  &bull; Provide accurate data for informed decision making
                  across various thematic area in immunization, nutrition and
                  maternal health programs.
                </div>

                <div>
                  &bull; Serve a basis for further enumeration expanding to 2km
                  from health facilities to improve mobile and outreach
                  sessions.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Key Project Activities
                </div>
                <div>
                  1. Alignment with state and LGA teams on approach and
                  expectations of enumeration.
                  <br />
                  2. Training of LGA team, screening and selection of
                  enumerators and training of enumerators on data collection
                  tools (ODK).
                  <br />
                  3. Conducted enumeration of settlements within 0-2km of RI
                  offering health facilities.
                  <br />
                  4. Analyzed data and developed a comprehensive report of the
                  enumeration exercise.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Result(s)
                </div>

                <img
                  src="https://res.cloudinary.com/daojlqwdo/image/upload/v1692882925/ace/pd2_ltgoza.jpg"
                  alt=""
                />
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Donor(s)
                </div>
                <div className="flex w-1/2 gap-10">
                  <img
                    src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875981/ace/partners/p3-2_ak8nrg.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Project */}
            <div className="space-y-10 border-b p-10">
              <div className="text-xl font-bold md:text-4xl">
                IMMUNIZATION SURVEY
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Clients
                </div>
                <div>
                  Gombe and Zamfara State Primary Health Care Development Agency
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Project Objective(s)
                </div>
                <div>
                  &bull; To identify immunization performances across all
                  antigens and factors that impact coverage in the states.
                </div>

                <div>
                  &bull; To evaluate immunization program/interventions and
                  develop basis for advocacy and investments to improve
                  coverage.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Key Project Activities
                </div>
                <div>
                  1. Evaluated the state of immunization in its geographic and
                  administrative areas.
                  <br />
                  2. Conducted a landscape diagnostic of the key PHC indicators.
                  <br />
                  3. Proffered solutions addressing the identified barriers to
                  immunization uptake in the states.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Result(s)
                </div>

                <img
                  src="https://res.cloudinary.com/daojlqwdo/image/upload/v1692883112/ace/pd3_qlbh4y.jpg"
                  alt=""
                />
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Donor(s)
                </div>
                <div className="flex w-1/2 gap-10">
                  <img
                    src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875981/ace/partners/p3-2_ak8nrg.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Project */}
            <div className="space-y-10 border-b p-10">
              <div className="text-xl font-bold md:text-4xl">
                WASH BASELINE ASSESSMENT SURVEY OF HOSPITALS AND ALL PUBLIC
                PLACES
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Clients
                </div>
                <div>Zamfara State Primary Health Care Development Agency</div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Project Objective(s)
                </div>
                <div>
                  &bull; Identify major drivers to poor WASH performances across
                  health facilities, markets, motor parks, schools and worship
                  centres.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Key Project Activities
                </div>
                <div>
                  1. Alignment with state and LGA teams on approach and
                  expectations of WASH assessment.
                  <br />
                  2. Training of LGA team and selection of data collectors on
                  the data collection tools (ODK).
                  <br />
                  3. Collected WASH data from health facilities, markets, motor
                  parks, schools and worship centres.
                  <br />
                  4. Analyzed data and developed a comprehensive report of the
                  WASH assessment exercise.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Result(s)
                </div>

                <img
                  src="https://res.cloudinary.com/daojlqwdo/image/upload/v1692883227/ace/pd4_y7wx2b.jpg"
                  alt=""
                />
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Donor(s)
                </div>
                <div className="flex w-1/2 gap-10">
                  <img
                    src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875981/ace/partners/p3-2_ak8nrg.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Project */}
            <div className="space-y-10 border-b p-10">
              <div className="text-xl font-bold md:text-4xl">
                IMMUNIZATION REW MICRO PLAN
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Clients
                </div>
                <div>
                  Gombe and Zamfara State Primary Health Care Development Agency
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Project Objective(s)
                </div>
                <div>
                  &bull; Update the existing REW micro plan in all RI offering
                  health facilities.
                </div>

                <div>
                  &bull; Maximize the efficiency of REW microplan to include
                  specific areas of community engagement and other program
                  areas.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Key Project Activities
                </div>
                <div>
                  1. Alignment with state and LGA teams on approach and
                  expectations of REW micro plan development.
                  <br />
                  2. Training of LGA team and RI providers/HFs in-charge on the
                  data collection procedures and tools (ODK).
                  <br />
                  3. Collected REW microplan data from settlements withing RI
                  offering health facilities.
                  <br />
                  4. Analyzed data and developed a comprehensive report of the
                  REW microplan development.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Result(s)
                </div>

                <img
                  src="https://res.cloudinary.com/daojlqwdo/image/upload/v1692883328/ace/pd5_jcd4i1.jpg"
                  alt=""
                />
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Donor(s)
                </div>
                <div className="flex w-1/2 gap-10">
                  <img
                    src="https://res.cloudinary.com/daojlqwdo/image/upload/v1691875981/ace/partners/p3-2_ak8nrg.png"
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
