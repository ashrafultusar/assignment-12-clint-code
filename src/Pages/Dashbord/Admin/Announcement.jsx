import AnnouncementForm from "../../../Form/AnnouncementForm";
import useAuth from "../../../Hook/useAuth";

const Announcement = () => {

    const { user } = useAuth()
    console.log(user)

  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
      const name = user?.displayName;
      const image=user?.photoURL


  };

  return (
    <div>
      <AnnouncementForm handelSubmit={handelSubmit}></AnnouncementForm>
    </div>
  );
};

export default Announcement;
