const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center space-y-3 my-6">
      <div>
        <img
          src="https://www.jotform.com/uploads/guest_618a51e80828734f/form_files/_mainPWAIcon664b728393e99.png?nc=1"
          alt="company logo"
          class="max-w-[65px]"
        />
      </div>
      <h2 className="text-2xl font-semibold">KLM Restaurant</h2>
      <i>Delight in Every Bite </i>
    </div>
  );
};

export default Hero;
