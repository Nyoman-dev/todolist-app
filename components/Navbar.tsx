/** @format */
import { Kanban, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function Navbar() {
	const { theme, setTheme } = useTheme();

	const handleToggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<nav className='flex-none backdrop-blur-md px-6 py-4 flex items-center justify-between z-10'>
			<div className='flex justify-between items-center w-full'>
				<div className='flex items-center gap-3'>
					<div className='w-8 h-8  rounded-lg flex items-center justify-center  shadow-sm'>
						<Kanban size={18} />
					</div>
					<h1 className='text-lg font-semibold tracking-tight'>OrganizeIt</h1>
				</div>
				<Button onClick={handleToggleTheme} variant='outline' size='icon'>
					{theme === "light" ? (
						<Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90' />
					) : (
						<Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
					)}
				</Button>
			</div>
		</nav>
	);
}
