import { firebaseLogOutUser } from "@/api/authentication";
import { Button } from "@/ui/design-system/button/button";
import { toast } from "react-toastify";

export const UserAccountContainer = () => {
    const handleLogOutUser = async () => {
        const { error } = await firebaseLogOutUser()
        if (error) {
            toast.error(error.message);
            return;
        }
        toast.success("See you soon !");
    }
    return (
        <div className="flex justify-center pt-20 pb-40">
            <Button action={handleLogOutUser} variant="danger">
                Disconnect
            </Button>
        </div>
    )
}