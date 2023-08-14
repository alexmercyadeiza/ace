import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function WhoWeAre() {
    return (
      <>
        <Header />

        {/* <!-- SubHeader --> */}
        <div
          className="bg-gray-200 bg-cover bg-bottom p-14 text-white md:p-40"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/daojlqwdo/image/upload/v1691960031/ace/pexels-marek-piwnicki-6562811_kyekgo.jpg')`,
          }}
        >
          <div className="text-center text-2xl font-semibold uppercase tracking-widest text-white md:text-6xl">
            Who we are
          </div>
        </div>

        {/* <!-- About --> */}
        <div className="grid py-10 md:py-28">
          <div className="grid gap-12 px-6 md:grid-cols-2 md:px-28">
            <div className="place-self-center text-4xl font-semibold capitalize text-dark-blue md:text-6xl">
              ACE STRATEGY AND CONSULT LIMITED
            </div>
            <div className="space-y-6">
              <div className="place-self-center font-medium text-gray-700 md:text-lg">
                ACE Strategy and Consult Limited is a consulting firm that
                supports individuals and organizations in addressing challenges
                by utilising innovative problem-solving, providing deep
                context-specific experience, and real-time insight. Our approach
                enables our clients to perform data-driven decision-making in a
                rapidly developing context.
              </div>

              <div className="place-self-center font-medium text-gray-700 md:text-lg">
                We build and strengthen systems through evidence-based
                processes, iterative design thinking and an obsession with
                quality. We instil resilience through human-centred
                capacity-building that maximises insights from knowledge
                management.
              </div>
            </div>
          </div>
        </div>


          {/* <!-- Other --> */}
        <div className="mx-auto px-6 md:w-3/4 pb-20">
          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-2 space-y-6 place-self-start border-l-2 border-t-2 border-light-blue bg-gray-100">
              <div className="inline-flex bg-light-blue p-4 text-dark-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current md:h-14 md:w-14"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z" />
                </svg>
              </div>

              <div className="space-y-7 px-6 pb-10 md:px-20 md:pb-20">
                <div className="text-3xl font-medium text-dark-blue md:text-7xl">
                  Our Vision
                </div>

                <div className="text-gray-700 md:text-2xl">
                  To be the foremost thought leader and actor in eradicating
                  health and social inequities, thus pioneering knowledge and
                  practice on the utilization of effective altruism.
                </div>
              </div>
            </div>

            <div className="col-span-2 space-y-6 place-self-start border-l-2 border-t-2 border-light-blue bg-gray-100">
              <div className="inline-flex bg-light-blue p-4 text-dark-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current md:h-14 md:w-14"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 12c0 2.206 1.794 4 4 4 1.761 0 3.242-1.151 3.775-2.734l2.224-1.291.001.025c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6c1.084 0 2.098.292 2.975.794l-2.21 1.283c-.248-.048-.503-.077-.765-.077-2.206 0-4 1.794-4 4zm4-2c-1.105 0-2 .896-2 2s.895 2 2 2 2-.896 2-2l-.002-.015 3.36-1.95c.976-.565 2.704-.336 3.711.159l4.931-2.863-3.158-1.569.169-3.632-4.945 2.87c-.07 1.121-.734 2.736-1.705 3.301l-3.383 1.964c-.29-.163-.621-.265-.978-.265zm7.995 1.911l.005.089c0 4.411-3.589 8-8 8s-8-3.589-8-8 3.589-8 8-8c1.475 0 2.853.408 4.041 1.107.334-.586.428-1.544.146-2.18-1.275-.589-2.69-.927-4.187-.927-5.523 0-10 4.477-10 10s4.477 10 10 10c5.233 0 9.521-4.021 9.957-9.142-.301-.483-1.066-1.061-1.962-.947z" />
                </svg>
              </div>

              <div className="space-y-7 px-6 pb-10 md:px-20 md:pb-20">
                <div className="text-3xl font-medium text-dark-blue md:text-7xl">
                  Our Mission
                </div>

                <div className="border-b border-gray-400 pb-8 text-gray-700">
                  To build simple and sustainable systems that are easily
                  replicated and scaled to alleviate socio-economic gaps in low
                  and middle-income countries.
                </div>

                <div className="border-b border-gray-400 pb-8 text-gray-700">
                  To challenge widely held norms and upset historical thinking
                  using first principlesand analytical insight to understand the
                  root cause of health and socio-cultural inequalities, thereby
                  pioneering novel approaches in bridging the gap.
                </div>

                <div className="border-b border-gray-400 pb-8 text-gray-700">
                  To consistently act in an adaptable and agile manner in spite
                  of rapidly changing contexts, current and emerging evidence,
                  and to do so tenaciously despite challenges.
                </div>

                <div className="text-gray-700">
                  To deliver social action excellently, by prioritising the most
                  vulnerable and marginalised communities with the highest
                  regard for professional conduct and respect for human dignity.
                </div>
              </div>
            </div>

            <div className="col-span-2 space-y-6 place-self-start border-l-2 border-t-2 border-light-blue bg-gray-100">
              <div className="inline-flex bg-light-blue p-4 text-dark-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current md:h-14 md:w-14"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 5.999l-5.621 2.986c-.899-.104-1.806.191-2.474.859-.662.663-.95 1.561-.862 2.428l-3.043 5.728 5.724-3.042c.884.089 1.772-.205 2.432-.865.634-.634.969-1.524.859-2.473l2.985-5.621zm-5.97 7.22c-.689 0-1.25-.559-1.25-1.249-.001-.691.559-1.251 1.25-1.25.69 0 1.25.56 1.25 1.25-.001.689-.56 1.249-1.25 1.249z" />
                </svg>
              </div>

              <div className="space-y-7 px-6 pb-10 md:px-20 md:pb-20">
                <div className="text-3xl font-medium text-dark-blue md:text-7xl">
                  Our Core Values
                </div>

                <div className="space-y-2 border-b border-gray-400 pb-8 text-gray-700">
                  <div className="font-semibold uppercase tracking-widest">
                    humanity
                  </div>
                  <div>
                    The work we do directly impacts the quality of life &mdash;
                    both health and social outcome - of several people.
                    Therefore, we believe in empathy for the stewards of service
                    and for beneficiaries. We believe people are more than
                    statistics or parts of a machine; they are significant
                    members of humanity with intrinsic mind-blowing
                    capabilities.
                  </div>
                </div>

                <div className="space-y-2 border-b border-gray-400 pb-8 text-gray-700">
                  <div className="font-semibold uppercase tracking-widest">
                    Creativity
                  </div>
                  <div>
                    Multiple routes can lead to the same destination,we are
                    therefore open to innovative thinking and best practices
                    that empowers the ecosystems we work in.
                  </div>
                </div>

                <div className="space-y-2 border-b border-gray-400 pb-8 text-gray-700">
                  <div className="font-semibold uppercase tracking-widest">
                    Collaboration
                  </div>
                  <div>
                    Outputs are optimised with a collective approach. Working
                    with altruistic driven partners unmasks blind spots and
                    eliminates the duplication of effort, enabling us to
                    exchange learning, and leverage competencies across the
                    board to achieve more collectively.
                  </div>
                </div>

                <div className="space-y-2 border-b border-gray-400 pb-8 text-gray-700">
                  <div className="font-semibold uppercase tracking-widest">
                    Prudence
                  </div>
                  <div>
                    Frugality in maximising the available resources to achieve
                    optimal results in all the contexts we work in is a
                    non-negotiable component of our commitment to our clients.
                  </div>
                </div>

                <div className="space-y-2 border-b border-gray-400 pb-8 text-gray-700">
                  <div className="font-semibold uppercase tracking-widest">
                    Integrity
                  </div>
                  <div>
                    Adherence to the highest forms of ethical and professional
                    conduct in a way that ensures the transparent and
                    accountable management of people, processes and results is a
                    hallmark of our service.
                  </div>
                </div>

                <div className="space-y-2 text-gray-700">
                  <div className="font-semibold uppercase tracking-widest">
                    Diversity, Equity and Inclusion (D,E,I)
                  </div>
                  <div>
                    Tolerance is receptiveness to the beauty of differences. At
                    ACE we uphold fair treatment and recognize the contributions
                    of people - not in spite, but because - of their unique
                    lived experiences and the product of their different
                    political, spiritual, sexual, racial, gender, health,
                    marital, genetic, or mental peculiarities.
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