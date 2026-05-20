/** @format */

import { Pen } from "lucide-react";
import { Task } from "@/types";
import { DropdownMenuCheckboxes } from "./DropsownMenuCheck";

export const statusOptions = [
	{ value: "todo", label: "To Do" },
	{ value: "doing", label: "Doing" },
	{ value: "done", label: "Done" },
];

interface TaskCardProps {
	task: Task;
	onEdit: (id: string) => void;
	onDragStart: (e: React.DragEvent, id: string) => void;
	onMove: (id: string, newStatus: Task["status"]) => void;
}

export default function TaskCard({
	task,
	onEdit,
	onDragStart,
	onMove,
}: TaskCardProps) {
	return (
		<div
			className='group  p-4 rounded-lg border border-zinc-50 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]  transition-all cursor-move relative active:cursor-grabbing'
			draggable
			id={task.id}
			onDragStart={(e) => onDragStart(e, task.id)}>
			<div className='flex justify-between items-start gap-3'>
				<p className='text-sm font-medium  leading-snug'>{task.title}</p>
				<button
					onClick={() => onEdit(task.id)}
					className='opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-zinc-600 p-1 -mr-2 -mt-2'>
					<Pen size={14} />
				</button>
			</div>
			<div className='mt-3 flex items-center justify-between pt-3 border-t border-zinc-50 border-dashed group-hover:border-zinc-100'>
				<DropdownMenuCheckboxes status={statusOptions} />
			</div>
		</div>
	);
}
