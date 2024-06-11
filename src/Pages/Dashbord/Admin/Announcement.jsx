import { toast } from "react-toastify";
import AnnouncementForm from "../../../Form/AnnouncementForm";
import useAuth from "../../../Hook/useAuth";
import { useMutation } from "@tanstack/react-query";
import { axiosSecure } from "../../../Hook/useAxiosSecure";
import { imageUploade } from "../../../Api";

const Announcement = () => {

    const { user } = useAuth()
  // console.log(user)
  

  const { mutateAsync } = useMutation({
    mutationFn: async postData => {
      const { data } = await axiosSecure.post('/announcement', postData)
      return data
    },

    onSuccess: () => {
      console.log("Data save successfully")
      toast.success('Post added successfully')
      
    }
  })


  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
      const name = user?.displayName;
      const author_image = form.image.files[0];

    
    try {
      const image_url = await imageUploade(author_image);

      const postData = {
        title,description,name,
        author_image: image_url,
     
      };
      console.log(postData);
      await mutateAsync(postData)

    } catch (err){
      // 
      console.log(err.message);
      toast.error(err.message)
    }

  };

  return (
    <div>
      <AnnouncementForm handelSubmit={handelSubmit}></AnnouncementForm>
    </div>
  );
};

export default Announcement;
