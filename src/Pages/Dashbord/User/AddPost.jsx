import { Helmet } from "react-helmet-async";

import AddPostForm from "../../../Form/AddPostForm";
import useAuth from "../../../Hook/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { imageUploade } from "../../../Api";

const AddPost = () => {
  <Helmet>
    <title>Dashboard | AddPost</title>
  </Helmet>;
const axiosSecure=useAxiosSecure()

  const { user } = useAuth();
const navigate=useNavigate()

  const { mutateAsync } = useMutation({
    mutationFn: async postData => {
      const { data } = await axiosSecure.post('/post', postData)
      return data
    },

    onSuccess: () => {
      console.log("Data save successfully")
      toast.success('Post added successfully')
      navigate('/dashboard/mypost')
    }
  })


  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const tag = form.tag.value;
    const post_title = form.title.value;
    const post_description = form.description.value;
    const author_image = form.image.files[0];
    
    const email = user?.email;
    const author_name = user.displayName;
    const  user_image= user.photoURL
    

    try {
      //
      const image_url = await imageUploade(author_image);

      // Get current timestamp
      const post_time = new Date().toISOString();

      const postData = {
        tag,
        post_title,
        post_description,
        author_name,email,
        author_image: image_url,
        post_time,user_image
      };
      console.log(postData);
      await mutateAsync(postData)
    } catch (err) {
      //
      console.log(err.message);
      toast.error(err.message)
    }
  };

  return (
    <div>
      <AddPostForm handelSubmit={handelSubmit}></AddPostForm>
    </div>
  );
};

export default AddPost;






