import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome to Cabyz LLC | A Pioneering Entity of CloseNavigator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Steering Innovations in Business Growth and Operational Excellence" />

        <section className="intro">
          <p>
            Cabyz LLC, an integral part of the reputable CloseNavigator ecosystem, stands at the forefront of fostering business scalability and sustainable growth. With a legacy of excellence, we delve deep into the intricacies of market dynamics to provide tailored solutions that drive competitive advantage and operational brilliance.
          </p>
        </section>

        <section className="core-competencies">
          <h2>Core Competencies</h2>
          <ul>
            <li>
              <strong>Strategic Business Development:</strong> Unlock unparalleled growth avenues with our seasoned experts committed to your business's enduring success.
            </li>
            <li>
              <strong>Operational Streamlining:</strong> Optimize your operations through our robust methodologies that eliminate inefficiency and propel productivity.
            </li>
            <li>
              <strong>Customized Solution Design:</strong> Experience solutions meticulously crafted to meet your unique business challenges and market demands.
            </li>
            <li>
              <strong>Technology-Driven Innovation:</strong> Harness the power of cutting-edge technology to stay ahead in the fast-evolving business landscape.
            </li>
          </ul>
        </section>

        <section className="about">
          <h2>About Cabyz LLC</h2>
          <p>
            Cabyz LLC embodies a culture of continuous learning and innovation. As a distinguished entity within the CloseNavigator ambit, we are dedicated to delivering superior value and tangible results. Our endeavor is to transcend conventional boundaries and drive a tangible impact that resonates through every facet of our client's business operations.
          </p>
        </section>

        <section className="testimonials">
          <h2>Testimonials</h2>
          {/* Testimonials content */}
        </section>

      </main>

      <Footer>
        <p>© 2023 Cabyz LLC, a proud member of the CloseNavigator Family | Contact Us | Privacy Policy | Terms of Service</p>
      </Footer>
    </div>
  )
}
