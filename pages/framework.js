import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Framework() {
  return (
    <>
      <Header />

      {/* <!-- SubHeader --> */}
      <div
        className="bg-gray-200 bg-cover bg-bottom p-14 text-white md:p-40"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/daojlqwdo/image/upload/v1691960775/ace/pexels-efren-ftz-14433444-2_gt6ni3.jpg')`,
        }}
      >
        <div className="text-center text-2xl font-semibold uppercase tracking-widest text-white md:text-6xl">
          our Framework
        </div>
      </div>

      {/* <!-- Hero --> */}
      <div className="grid py-10 md:py-28">
        <div className="grid gap-12 px-6 md:grid-cols-2 md:px-28">
          <div className="place-self-center text-4xl font-semibold capitalize text-dark-blue md:text-6xl">
            AT ACE STRATEGY AND CONSULT LIMITED
          </div>
          <div>
            <div className="place-self-center font-medium text-gray-700 md:text-lg">
              Human-centred design is at the core of our ideation process to
              ensure congruence in the usability of generated insight for all
              stakeholders. Ideations are tested with scientific rigour and
              data-driven pilots. While ACE adopted the hybrid model of
              in-person and remote working, ACE ensures there are boots on the
              ground in direct contact with beneficiaries. We leverage earned
              and client&lsquo;s networks for timely access to key experts and
              information. Here are the segments of our methodology:
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Cards --> */}
      <div className="md:px-28 md:pb-20 pb-10">
        <div className="grid md:grid-cols-3">
          <div className="border-b border-r">
            <div className="space-y-4 p-10 text-gray-700">
              <div className="inline-flex bg-light-blue p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 fill-current text-dark-blue"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.949 11h-8.949v-8.949c4.717.47 8.479 4.232 8.949 8.949zm-9.949 11c-5.514 0-10-4.486-10-10 0-5.177 3.954-9.446 9-9.949v10.949h10.949c-.504 5.046-4.773 9-9.949 9z" />
                </svg>
              </div>
              <div className="font-semibold uppercase tracking-widest">
                Landscape Analysis and Diagnostics
              </div>
              <div>
                Establishing a clear understanding of the project priorities
                through a systematic and in-depth review of available literature
                including strategy documents, reports, and operational plans is
                the first building block of our methodology. KIIs and surveys
                are administered to complement information generated from desk
                reviews. Our landscape mapping visualizes progressions along
                accomplished milestones, ongoing implementations, and future
                courses of action.
              </div>
            </div>
          </div>

          <div className="border-b border-r">
            <div className="space-y-4 p-10 text-gray-700">
              <div className="inline-flex bg-light-blue p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 fill-current text-dark-blue"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z" />
                </svg>
              </div>
              <div className="font-semibold uppercase tracking-widest">
                Monitoring and Evaluation
              </div>
              <div>
                Depending on the context and scope of work, ACE tailors an
                accountability and performance framework to ensure that all
                components of the program are aligned and progressing as they
                should. We will use this process to provide corrective measures
                and mitigate persisting emerging challenges.
              </div>
            </div>
          </div>

          <div className="border-b">
            <div className="space-y-4 p-10 text-gray-700">
              <div className="inline-flex bg-light-blue p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="w-10 stroke-current text-dark-blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                  />
                </svg>
              </div>
              <div className="font-semibold uppercase tracking-widest">
                Development of Results Framework
              </div>
              <div>
                The next building block of our framework involves analysing the
                current landscape&lsquo;s realities with the project&lsquo;s
                desired outcomes contextualised with global recommendations.
                Using problem-solving pathways, we test and validate held
                assumptions and hypotheses. Consequently, we create SMART
                indicators to determine milestones for the programme.
              </div>
            </div>
          </div>

          <div className="border-r md:border-t">
            <div className="space-y-4 p-10 text-gray-700">
              <div className="inline-flex bg-light-blue p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 stroke-current text-dark-blue"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.185 4.843l11.927 7.157-11.927 7.157 2.982-7.157-2.982-7.157zm-4.185-4.843l5 12-5 12 20-12-20-12z" />
                </svg>
              </div>
              <div className="font-semibold uppercase tracking-widest">
                Review for Scale up or Closeout
              </div>
              <div>
                Periodic evaluation feeds into recommendations for further
                actions based on the degree of success achieved as evidenced by
                the key performance indicators.
              </div>
            </div>
          </div>

          <div className="border-r border-t">
            <div className="space-y-4 p-10 text-gray-700">
              <div className="inline-flex bg-light-blue p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 fill-current text-dark-blue"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 12h-10v1h10v-1zm-4 2h-6v1h6v-1zm4-6h-10v1h10v-1zm0 2h-10v1h10v-1zm0-6h-10v1h10v-1zm0 2h-10v1h10v-1zm7.44 10.277c.183-2.314-.433-2.54-3.288-5.322.171 1.223.528 3.397.911 5.001.089.382-.416.621-.586.215-.204-.495-.535-2.602-.82-4.72-.154-1.134-1.661-.995-1.657.177.005 1.822.003 3.341 0 6.041-.003 2.303 1.046 2.348 1.819 4.931.132.444.246.927.339 1.399l3.842-1.339c-1.339-2.621-.693-4.689-.56-6.383zm-6.428 1.723h-13.012v-16h14v7.894c.646-.342 1.348-.274 1.877.101l.123-.018v-8.477c0-.828-.672-1.5-1.5-1.5h-15c-.828 0-1.5.671-1.5 1.5v17c0 .829.672 1.5 1.5 1.5h13.974c-.245-.515-.425-1.124-.462-2z" />
                </svg>
              </div>
              <div className="font-semibold uppercase tracking-widest">
                Documentation and Knowledge Management
              </div>
              <div>
                Throughout the lifespan of the project, lessons learnt would be
                documented to enable knowledge transfer and replication/scale up
                of processes in similar scenarios.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
