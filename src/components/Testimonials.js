const Testimonials = () => {
  return (
    <section className="">
      <div className="section-wrapper-inner">
        <div className="section-header flex flex-col items-start px-4">
          <h3 className="underline">Testimonials</h3>
          <h4>Designer and Front End Developer</h4>
        </div>
        <div className="flex flex-col px-4 text-left gap-4 lg:flex-row">
          <div className="col col1">
            <p>
              After graduating from Amarillo College in 2018 I found an
              internship at the{" "}
              <a
                href="https://www.roionline.com/"
                className="underline font-bold"
              >
                Best Internet Marketing Company
              </a>{" "}
              around and ended up working for them part-time after my internship
              was over. After working for them for 2 years, I've bounced around
              between contract work for two other agencies but I'm hoping to
              find a company I can call home
            </p>
          </div>
          <div className="col col2">
            <p>
              If you're looking to hire a new developer or plan to work on an
              interesting project and need an extra hand, please feel free to
              contact me for coffee! I would love to hear Testimonials any exciting new
              opportunities to work with fellow devs to accomplish great things.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
