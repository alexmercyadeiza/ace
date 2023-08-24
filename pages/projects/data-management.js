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
            Data Management (assessment, curation, validation, and analysis)
          </div>
          <div className="border-l space-y-10">
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
                  The Kebbi State Primary Health Care Development Agency.
                  <br />
                  The Gombe State Primary Health Care Development Agency.
                  <br />
                  The Zamfara State Primary Health Care Board
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Project Details
                </div>
                <div>
                  Inaccurate target population data troubled the decision-making
                  capacity of Kebbi, Zamfara and Gombe states to properly plan
                  health interventions. This led to missed opportunities for new
                  and emerging settlements, leaving high wastage rates and
                  stock-out rates due to uncaptured emigration and immigration
                  patterns. ACE undertook the enumeration of children under the
                  ages of 5 and 2 years as well as women of reproductive age to
                  enable the SPHCDAs to improve the outcomes of immunisation,
                  nutrition and maternal health in their states through
                  data-driven microplanning for campaigns and implementation.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Result(s)
                </div>
                <div>
                  With quality RI and PHC services, we identified that over
                  95,000 eligible children were previously missed.
                </div>
                <img
                  src="https://res.cloudinary.com/daojlqwdo/image/upload/v1692883579/ace/p1-2_rjyvtl.png"
                  alt=""
                />
              </div>
            </div>

            {/* Project */}
            <div className="space-y-10 border-b p-10">
              <div className="text-xl font-bold md:text-4xl">
                IMMUNIZATION COVERAGE SURVEY
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Clients
                </div>
                <div>
                  The Zamfara State Primary Health Care Board
                  <br />
                  The Gombe State Primary Health Care Development Agency
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Project Details
                </div>
                <div>
                  As the COVID-19 pandemic disrupted an already strained
                  healthcare delivery system, the leadership of Zamfara and
                  Gombe state PHC bodies planned to mitigate potential public
                  health challenges from the impact of the pandemic. The bodies
                  contracted ACE to evaluate the state of immunization in its
                  geographic and administrative areas. ACE conducted a landscape
                  diagnostic of the key PHC indicators by using data validation
                  processes to determine the reliability of the existing data
                  that served as a baseline for program planning. Additionally,
                  ACE proffered solutions addressing the identified barriers to
                  immunization uptake in the states.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Result(s)
                </div>
                <div>
                  The comprehensive survey that covered all wards in the state
                  revealed a significant correlation between the security
                  situation in Zamfara states&lsquo; LGAs and their performance
                  across immunization and PHC indicators.
                </div>
                <img
                  src="https://res.cloudinary.com/daojlqwdo/image/upload/v1692883664/ace/p2-3_bgmpq6.png"
                  alt=""
                />
              </div>
            </div>

            {/* Project */}
            <div className="space-y-10 border-b p-10">
              <div className="text-xl font-bold md:text-4xl">
                IMMUNIZATION, EDUCATION INTEGRATION BASELINE SURVEY
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Clients
                </div>
                <div>The Kebbi State Primary Health Development Agency</div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Project Details
                </div>
                <div>
                  In a quest to grossly increase immunization and MNCH service
                  components where an estimated 22 million children missed
                  vaccination in 2020 alone, UNICEF piloted the integration of
                  Immunization and education to reach all eligible children and
                  mothers in various communities and human clusters across the
                  state. To understand the current situation and guide the
                  program design to ensure program effectiveness and
                  maximization, the Kebbi SPHCB contracted ACE to review and
                  validate the reliability of the existing data, investigate and
                  resolve barriers in reaching missed children.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Result(s)
                </div>
                <div>
                  Clear baseline data was established between caregivers&lsquo;
                  educational level and their health-seeking behaviours. Hence,
                  laying the foundation for more coordinated health system
                  strengthening efforts.
                </div>
                <img
                  src="https://res.cloudinary.com/daojlqwdo/image/upload/v1692883727/ace/p3-3_gqybaq.png"
                  alt=""
                />
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
                <div>The Zamfara State Primary Health Care Board</div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Project Details
                </div>
                <div>
                  The worrisome state of hygiene in the state and increased
                  cholera outbreaks prompted the Zamfara SPHCB to conduct a WASH
                  baseline assessment at all Health Facilities, schools, places
                  of worship and other public spaces in the state through ACE
                  Strategy and Consults. A visual survey was conducted across
                  the state resulting in a pictorial report of the situation
                  analysis, recommendations, and next steps to address the
                  devastated state of WASH at the surveyed facilities.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Result(s)
                </div>
                <div>
                  Zamfara (SPHCB) has developed a 5-year roadmap to mitigate
                  persisting cholera outbreaks that have plagued the states WASH
                  services.
                </div>
                <img
                  src="https://res.cloudinary.com/daojlqwdo/image/upload/v1692883787/ace/p4-2_lrr8cn.png"
                  alt=""
                />
              </div>
            </div>

            {/* Project */}
            <div className="space-y-10 border-b p-10">
              <div className="text-xl font-bold md:text-4xl">
                DEVELOPMENT OF HUMAN RESOURCES FOR HEALTH DATABASE AND TIMELY
                ACTIVITIES REPORTING PLATFORM
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Clients
                </div>
                <div>The Zamfara State Primary Health Care Board</div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Project Details
                </div>
                <div>
                  The Zamfara State Primary Health Care Board contracted ACE
                  Strategy and Consults to launch a state-wide PHC HRH
                  assessment and e-reporting platform to keep account of all
                  serving Primary Health staff and their daily activities. This
                  is to prevent duplication of efforts, analyse human resource
                  gaps, reduce truancy, and aid the ongoing task-shifting policy
                  in the state.
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold uppercase tracking-widest">
                  Result(s)
                </div>
                <div>
                  A data repository critical to human resource management and
                  analysis essential to informing data-driven recruitment and
                  deployment over the next 5 years was created and
                  institutionalised.
                </div>
                <img
                  src="https://res.cloudinary.com/daojlqwdo/image/upload/v1692883853/ace/p5-2_yjasrf.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
