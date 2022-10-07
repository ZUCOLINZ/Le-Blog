import "./post.css";
import Postpic from "../../assets/images/amazonbot.jpg";

const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src={Postpic} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, maxime
        enim quia ipsum eveniet debitis voluptatibus quibusdam similique ratione
        recusandae aliquid cum adipisci modi labore possimus? Mollitia ullam
        aspernatur ipsam?
      </p>
    </div>
  );
};

export default Post;
