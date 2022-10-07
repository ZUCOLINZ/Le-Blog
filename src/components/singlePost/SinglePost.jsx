import "./singlePost.css";
import Singlepic from "../../assets/images/everst.jpg";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={Singlepic} className="singlePostImg" alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, vitae
          eligendi. Perferendis, molestiae velit. Ratione laborum obcaecati
          libero rerum maiores nisi. Numquam, facere, quidem ad expedita quos
          eligendi dolore explicabo asperiores consequatur sequi rerum,
          veritatis saepe ea. Sit laborum dolore hic dolorum quo voluptatibus
          assumenda totam ea repudiandae. Eius nesciunt architecto repellat
          voluptate iure, illum odit ipsum quidem, quia excepturi cum? Officiis,
          nobis molestiae natus consequuntur praesentium, obcaecati corporis
          dolorum molestias quo et alias possimus assumenda voluptas maiores
          dolor ab quisquam itaque modi repellendus laboriosam tempore quia hic
          suscipit. In veniam commodi quod error nobis, dicta voluptas
          asperiores. Officia eum odio officiis beatae! Sequi sed a laborum quas
          architecto? Facere officia tempore quae enim eligendi natus. Sed,
          deleniti. Repellendus iste nostrum debitis officiis architecto odio
          beatae tempora laborum. Porro, impedit!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
