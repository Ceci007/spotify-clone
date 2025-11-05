import { FaTrash } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/SupabaseClient";

type DeleteButtonProp = {
  songId: string;
  imagePath: string;
  audioPath: string;
};

export default function DeleteButton({
  songId,
  audioPath,
  imagePath,
}: DeleteButtonProp) {
  const queryClient = useQueryClient();

  const deleteSong = async () => {
    // Note: The code will proceed directly without a confirmation dialog.
    
    // 1. delete the image
    const { error: imgError } = await supabase.storage
      .from("cover-images")
      .remove([imagePath]);

    if (imgError) {
      console.error("ImageError: Failed to delete image. " + imgError.message); // Changed to console.error
      // You may want to add a user alert here if deletion fails, even without confirmation
      return;
    }

    // 2. delete the audio
    const { error: audioError } = await supabase.storage
      .from("songs")
      .remove([audioPath]);

    if (audioError) {
      console.error("AudioError: Failed to delete audio. " + audioError.message);
      return;
    }

    // 3. delete song from table
    const { error: deleteError } = await supabase
      .from("songs")
      .delete()
      .eq("id", songId);

    if (deleteError) {
      console.error("DeleteError: Failed to delete record. " + deleteError.message);
      return;
    }

    // 4. Invalidate queries to refresh the UI
    queryClient.invalidateQueries({ queryKey: ["userSongs"] });
    queryClient.invalidateQueries({ queryKey: ["allSongs"] });
  };
  
  return (
    <button
      // Call deleteSong directly on click
      onClick={() => deleteSong()} 
      className="text-secondary-text w-10 h-10 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hidden group-hover:flex items-center justify-center z-100"
    >
      <FaTrash />
    </button>
  );
}