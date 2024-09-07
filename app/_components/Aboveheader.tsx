import React from "react";

const Aboveheader = () => {
	return (
		<div className="hidden md:block sm:hidden">
			<div className="bg-[#040609] h-14 ">
				<div className=" flex justify-end mr-20 ">
					<div className="flex gap-12 mt-4 ml-80">
						<div className="flex items-center gap-2">
							<img src="call.svg" alt="call icon" className="h-4 w-4" />
							<p className="text-white text-[14px] font-normal">
								+91 2717 453 330
							</p>
						</div>
						<div className="flex items-center gap-2">
							<img src="mail.svg" alt="mail icon" className="h-4 w-4" />
							<p className="text-white text-[14px] font-normal">
								contact@fuzzycloud.in
							</p>
						</div>
						<div className="flex items-center gap-2">
							<img src="maps.svg" alt="maps icon" className="h-4 w-4" />
							<p className="text-white text-[14px] font-normal">
								1001, Satyamev Elite, Ahmedabad
							</p>
						</div>
					</div>
				</div>
			</div>
			<hr className="border-t border-gray-700 " />
		</div>
	);
};

export default Aboveheader;
