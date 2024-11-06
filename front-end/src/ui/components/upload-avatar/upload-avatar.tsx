import { Avatar } from "@/ui/design-system/avatar/avatar"
import { RiCamera2Fill } from "react-icons/ri"

export const UploadAvatar = () => {
    return (
        <div className="flex items-center gap-5">
            <label className="inline-block bg-primary hover:bg-primary-400 text-white rounded px-[18px] py-[15px] text-caption2 font-medium cursor-pointer animate">
                <div className="flex items-center gap-2">
                    <RiCamera2Fill />
                    <span>Choose a file</span>
                </div>
                <input type="file" className="hidden" />
            </label>
            <Avatar size="large" alt="Avatar" src="/assets" />
        </div>
    )
}