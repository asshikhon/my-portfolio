const Education = () => {

  const sectionStyle = {
    background: "linear-gradient(180deg, #252525 5.9%, #000 100%)",
    color: "white",
    padding: "20px 0", // Adjust padding as needed
  };


  return (
    <section id="education" style={sectionStyle} className=' text-white '>
      <div className='container mx-auto pb-10 md:pb-20'>
        <h2 className='text-[40px] font-bold text-primary text-center'>Education</h2>
        <hr className="w-[240px] text-center block mx-auto mt-1 h-[2px] font-semibold text-white  mb-12" />
<div>
<div className='flex gap-6 flex-col md:flex-row md:justify-around items-center '>
          <div className='  text-center animate__animated animate__zoomInRight'>
            <h3 className='text-2xl mb-2 pt-4'>Bachelors Degree </h3> 
            <p> BHAWAL BADRE ALAM GOVT. COLLEGE, 2019 - 2024</p>
          </div>

          <div className='  text-center animate__animated animate__zoomInLeft'>
            <h3 className='text-2xl mb-2'>Web Development Course</h3>
            <p>Online, 2023 - 2024</p>
          </div>
        </div>
</div>
      </div>
    </section>
  );
};

export default Education;
