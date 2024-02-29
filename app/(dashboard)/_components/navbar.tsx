import NavbarRoutes from "@/components/navbar-routes";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
	return (
		<>
			<div className="p-4 border-b h-full flex items-center bg-white shadow-sm sticky top-0 z-50 flex-grow">
				<MobileSidebar />
				<NavbarRoutes />
			</div>
		</>
	);
};

export default Navbar;
