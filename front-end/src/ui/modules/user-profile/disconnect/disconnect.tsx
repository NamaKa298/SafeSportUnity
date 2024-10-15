import { firebaseLogOutUser } from "@/api/authentication";
import { toast } from "react-toastify";

export const handleLogOutUser = async () => {
    const { error } = await firebaseLogOutUser();
    if (error) {
        toast.error(error.message);
        return;
    }
    toast.success("See you soon!");
};
