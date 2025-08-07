function About() {
  return (
    <div className="flex flex-col items-center my-8">
      <p className="my-8 text-4xl font-semibold">About</p>
      <div>
        <p>
          Catyaw (pronounced like "Kwetiaw") is web app where users can look
          through a catalogue of cat pictures and save them.
        </p>
        <br />
        <p>Contact us below if you have any questions regarding Catyaw.</p>

        {/* Contact form */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Contact Us</legend>

          <label className="label">Name</label>
          <input type="text" className="input w-full" placeholder="Name" />

          <label className="label ">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />

          <label className="label ">Message</label>
          <textarea
            className="textarea h-24 w-full"
            placeholder="Enter your message here..."
          ></textarea>

          <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
      </div>
    </div>
  );
}

export default About;
