import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArticleIcon from "@mui/icons-material/Article";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";

function Input() {
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);

  return (
    <div className="bg-white dark:bg-[#1D2226] md:rounded-md p-4 space-y-4 dark:border-none">
      <div className="flex items-center space-x-2">
        <Avatar
          src={session?.user?.image}
          className="!h-10 !w-10 cursor-pointer"
        />
        <motion.button
          whileTap={{ scale: 0.99 }}
          className="rounded-full border border-gray-100 dark:border-gray-700 py-2 px-6 opacity-80 hover:opacity-100 text-sm w-full text-left font-medium"
          onClick={() => {
            setModalOpen(true);
            setModalType("dropIn");
          }}>
          Start a post
        </motion.button>
      </div>
      <div className="flex items-center justify-around flex-wrap space-x-4">
        <button className="inputButton">
          <PhotoSizeSelectActualIcon className="text-blue-400" />
          <h4 className="opacity-80 hidden sm:block">Photo</h4>
        </button>
        <button className="inputButton">
          <VideoCameraBackIcon className="text-green-400" />
          <h4 className="opacity-80 hidden sm:block">Video</h4>
        </button>
        <button className="inputButton">
          <BusinessCenterIcon className="text-blue-300" />
          <h4 className="opacity-80 hidden sm:block">Job</h4>
        </button>
        <button className="inputButton">
          <ArticleIcon className="text-red-400" />
          <h4 className="opacity-80 hidden sm:block">Write Article</h4>
        </button>
      </div>
    </div>
  );
}

export default Input;
