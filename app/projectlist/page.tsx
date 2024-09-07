const projects = [
    { alink:"./project/societyzen", image: "society.jpg", title: "Society Management System", subtitle: "SocietyZen"},
    { alink:"./project/agritech", image: "agri.svg", title: "Agriculture", subtitle: "AgriTech"},
    { alink:"", image: "Bhaskar.jpg", title: "School Management System", subtitle: "Bhaskar"},
    
  ];
  const projects1 = [
    {alink:"./project/pihealth", image: "pi.svg", title: "All Medical Solution", subtitle: "Pi-Health"},
    {alink:"./project/findmydoc", image: "doc.svg", title: "HealthCare", subtitle: "FindmyDoc"},
    {alink:"./project/rx", image: "rxpi.svg", title: "HealthCare", subtitle: "Rx.PI-Health"},
    
  ];
  
  const ProjectCard = ({ image, title, subtitle, alink }:any) => (
    <div className="flex-row items-center mt-8 mr-5">
      <div
        className="bg-cover h-[18rem] w-[17rem] customs:w-[16rem] lg:w-[20rem]  bg-center rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="w-[12rem] customs:w-[10rem] lg:w-[15rem]  ml-11 h-[9rem] shadow-custom text-center rounded-md bg-[#F4F7FF] mt-[-5rem]">
        <div className="pt-3 items-center justify-center h-[9rem] flex flex-col">
          <h3 className="text-[#02BDD5] font-bold">{title}</h3>
          <h1 className="text-customBlack text-xl font-semibold text-black">{subtitle}</h1>
          <a href={alink}>
          <button className="border-gray-300 border-2 rounded-md py-1 mt-4 px-4 bg">View Details</button>
          </a>
        </div>
      </div>
    </div>
  );
  
  const ProjectSection = () => (
    <div className="flex flex-wrap  justify-center ">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
  const ProjectSection1 = () => (
    <div className="flex flex-wrap justify-center">
      {projects1.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
  
const page = () => {
  return (
    <div className="mt-28 mb-28">
            <h1 className="text-3xl font-bold mb-6 text-center text-[#02BDD5] underline">Project List</h1>
        <ProjectSection />
        <ProjectSection1 />
    </div>
  )
}

export default page