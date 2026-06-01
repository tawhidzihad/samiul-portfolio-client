"use client";

import { deletePortfolio } from "@/lib/apiFunctions";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi";

export default function PortfolioDeleteAlertDialog({ portfolio }) {
	const router = useRouter();

	const handleDelete = async () => {
		const data = await deletePortfolio(portfolio?._id);
		if (data.deletedCount) {
			toast.success(`${portfolio?.title} successfully deleted`);
			router.refresh();
		}
	};

	return (
		<AlertDialog>
			<Button className="rounded-xl border border-red-500/20 bg-red-500/10 hover:bg-red-500 py-3 text-red-400 hover:text-white font-medium transition-all w-full h-full">
				<FiTrash2 />
				Delete
			</Button>

			<AlertDialog.Backdrop>
				<AlertDialog.Container>
					<AlertDialog.Dialog className="sm:max-w-100">
						<AlertDialog.CloseTrigger />
						<AlertDialog.Header>
							<AlertDialog.Icon status="danger" />
							<AlertDialog.Heading>
								Delete portfolio permanently?
							</AlertDialog.Heading>
						</AlertDialog.Header>
						<AlertDialog.Body>
							<p>
								This will permanently delete{" "}
								<strong>{portfolio.title}</strong> and all of its data.
								This action cannot be undone.
							</p>
						</AlertDialog.Body>
						<AlertDialog.Footer>
							<Button slot="close" variant="tertiary">
								Cancel
							</Button>
							<Button
								slot="close"
								variant="danger"
								onClick={handleDelete}
							>
								Delete
							</Button>
						</AlertDialog.Footer>
					</AlertDialog.Dialog>
				</AlertDialog.Container>
			</AlertDialog.Backdrop>
		</AlertDialog>
	);
}
