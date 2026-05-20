/** @format */

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export function TaskDialog() {
	return (
		<Dialog>
			<form>
				<DialogTrigger asChild>
					<Button variant='outline'>
						<Plus className='h-4 w-4' />
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-sm'>
					<DialogHeader>
						<DialogTitle>Tugas Baru</DialogTitle>
						<DialogDescription></DialogDescription>
					</DialogHeader>
					<FieldGroup>
						<Field>
							<Label htmlFor='name-1'>Judul Tugas</Label>
							<Input id='name-1' name='name' defaultValue='Pedro Duarte' />
						</Field>
					</FieldGroup>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant='outline'>Cancel</Button>
						</DialogClose>
						<Button type='submit'>Save changes</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
}
