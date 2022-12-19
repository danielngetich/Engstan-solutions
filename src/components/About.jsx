function About() {
  return (
    <>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 background-image: url('');">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl">
                Welcome to Engstan Solutions
              </h2>

              <p class="mt-4 text-gray-600">
                We are an outstanding business that specialize in diverse fields
                of electrical products and digital services, all under one roof.
                Quality product and decent services is a sure bet, owing to our
                dedicated team of experts who will ensure that your life is
                fully illuminated with a smile. We offer free pre-purchase
                consultative and advisorial services to our clients, to ensure
                that you get the right product and service that will have your
                needs addressed with satisfaction. As an enterprise that is
                dedicated to customer need address, we offer free deliveries in
                Meru and Tharaka Nithi counties, and can also arrange for
                transport to other regions across the country as guided by our
                clients.
              </p>

              <a
                href="#"
                class="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                <span class="text-sm font-medium"> Get Started </span>

                <svg
                  class="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
