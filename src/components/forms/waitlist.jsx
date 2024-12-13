export const WaitlistForm = () => {
  const handleSubmit = (ev) => ev.preventDefault();

  return (
    <form
      id="waitlist-form"
      onSubmit={handleSubmit}
      className="w-5/6 lg:w-full mx-auto basis-80 lg:flex-1 relative rounded-2xl lg:rounded-none p-10 py-20 bg-black flex flex-col items-center gap-8 text-white"
    >
      <h3 className="font-bold text-xl lg:text-3xl">Join the Waitlist Form</h3>

      <div className="flex flex-col gap-2 w-full">
        <input
          required
          type="text"
          placeholder="name"
          className="w-full outline-none p-4 border-b border-b-yellow-normal bg-transparent placeholder:text-white placeholder:capitalize"
        />
        <input
          required
          type="email"
          placeholder="email"
          className="w-full outline-none p-4 border-b border-b-yellow-normal bg-transparent placeholder:text-white placeholder:capitalize"
        />
        <input
          required
          type="tel"
          placeholder="phone number"
          className="w-full outline-none p-4 border-b border-b-yellow-normal bg-transparent placeholder:text-white placeholder:capitalize"
        />
      </div>

      <button className="px-10 py-1.5 rounded-full bg-yellow-normal self-center text-black text-2xl">
        Join Now
      </button>
    </form>
  );
};
