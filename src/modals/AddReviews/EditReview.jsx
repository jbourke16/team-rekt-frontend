import { useState, useEffect } from 'react'
import { Rating } from "@smastrom/react-rating"
import "@smastrom/react-rating/style.css";
import { useNavigate} from 'react-router-dom'
import { updateReview } from '../../services/reviews.js'
import { getGame } from '../../services/games.js';
import './ReviewModal.css'

function EditReview(props) {

let navigate = useNavigate();

//modal
const [modal, setModal] = useState(false);

const toggleModal = () => {
  setModal(!modal);
};

if (modal) {
  document.body.classList.add("active-modal");
} else {
  document.body.classList.remove("active-modal");
}

//review form

const [rating, setRating] = useState(0);
const [game, setGame] = useState([]);

useEffect(()=> {
  const fetchGame = async () =>{
    const oneGame = await getGame(props.game)
    setGame(oneGame)
  }
  fetchGame()
}, [])


const [review, setReview] = useState({
  userId: props.user._id,
  gameId: props.game,
  comment: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setReview({
    ...review,
    [name]: value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const fullReview = {
    ...review,
    rating
  }
  await updateReview(props.reviewId, fullReview);
  toggleModal()
  props.fetchUserReviews()
};
console.log(props.reviewId)


//star icon

const StarIcon = (<path d="M 332.890 15.750 C 332.829 24.413, 332.491 47.925, 332.140 68 C 331.542 102.078, 331.367 104.722, 329.500 107.845 C 325.782 114.063, 322.303 115, 302.926 115 C 287.143 115, 285.462 115.175, 281.886 117.184 C 279.342 118.614, 277.273 120.870, 275.894 123.719 C 273.862 127.916, 273.783 129.560, 273.644 170.285 C 273.509 209.770, 273.376 212.751, 271.576 216.377 C 268.398 222.780, 264.438 223.952, 245.899 223.978 C 229.597 224.001, 225.178 224.788, 221.121 228.389 C 216.729 232.287, 215.684 236.502, 215.018 253 C 214.315 270.449, 213.242 273.880, 207.780 276.142 C 205.100 277.251, 187.090 277.516, 109.363 277.589 L 14.226 277.679 9.363 280.089 C 5.659 281.926, 3.957 283.572, 2.221 287 L -0.058 291.500 0.221 337 C 0.496 381.780, 0.535 382.555, 2.681 386 C 6.617 392.316, 9.560 393.290, 27.145 394.096 C 36.756 394.537, 43.940 395.336, 45.672 396.158 C 50.953 398.664, 52.173 403.199, 52.707 422.315 C 53.253 441.855, 53.940 445.655, 57.533 449.031 C 59.928 451.281, 61.045 451.470, 75.294 452.041 C 92.140 452.716, 96.343 453.864, 99.813 458.737 C 102.897 463.069, 103.945 469.014, 104 482.500 C 104.073 500.407, 106.113 506.462, 113 509.210 C 114.375 509.758, 122.726 510.343, 131.558 510.510 C 148.524 510.830, 153.043 511.813, 157.707 516.195 C 162.021 520.247, 162.352 523.474, 162.215 560.205 C 162.094 592.709, 161.960 595.158, 160.101 598.803 C 156.399 606.059, 151.811 607.617, 130.402 608.893 C 111.080 610.043, 107.455 611.732, 105.069 620.696 C 104.349 623.400, 103.840 641.025, 103.638 670.272 C 103.326 715.230, 103.302 715.691, 101.067 719.667 C 97.170 726.600, 94.496 727.538, 79.500 727.227 C 67.665 726.981, 66.097 727.161, 62 729.229 C 58.849 730.819, 56.782 732.813, 55.103 735.880 C 52.236 741.121, 52.233 741.227, 53.458 795.750 L 54.317 834 111.086 834 L 167.856 834 168.367 828.750 C 168.648 825.863, 169.302 818.248, 169.819 811.829 C 171.347 792.873, 174.522 789.292, 191.753 787.086 C 220.724 783.378, 221.297 782.878, 223.050 759.808 C 224.602 739.385, 226.384 735.051, 234.085 732.977 C 236.222 732.402, 257.104 731.850, 283.230 731.680 C 326.380 731.398, 328.829 731.284, 332.044 729.406 C 338.631 725.559, 339.488 722.620, 339.597 703.500 C 339.694 686.289, 340.196 682.231, 342.707 678.351 C 345.632 673.831, 348.427 673.497, 383 673.544 C 418.980 673.592, 422.218 674.018, 427.609 679.409 C 431.763 683.563, 433.588 689.945, 435.454 706.846 C 437.125 721.982, 438.820 726.471, 444 729.472 C 447.368 731.423, 449.259 731.506, 494.113 731.660 C 539.014 731.814, 540.874 731.895, 544.758 733.876 C 551.183 737.154, 552.672 741.538, 553.363 759.207 C 554.312 783.489, 555.039 784.239, 578.454 785.068 C 592.446 785.563, 595.054 785.923, 598.825 787.877 C 605.269 791.215, 606.949 795.666, 606.985 809.500 C 607.001 815.550, 607.301 823.538, 607.652 827.250 L 608.289 834 665.016 834 L 721.743 834 722.482 786.635 C 723.318 733.102, 723.458 734.312, 715.919 730.074 C 712.642 728.233, 709.480 727.660, 698.612 726.936 C 678.003 725.565, 674.841 723.782, 672.993 712.495 C 672.453 709.198, 672.009 687.698, 672.006 664.718 C 672 619.330, 671.968 619.045, 666.373 613.814 C 661.895 609.627, 658.620 608.840, 642 607.961 C 617.805 606.681, 615.713 605.382, 613.875 590.500 C 612.167 576.667, 613.292 530.897, 615.490 524.748 C 618.554 516.181, 623.831 513.957, 646.674 511.609 C 660.585 510.179, 663.627 509.372, 667.365 506.122 C 670.689 503.231, 671.330 499.793, 671.958 481.500 C 672.669 460.791, 673.429 458.352, 680.264 454.865 C 683.713 453.106, 687.068 452.580, 698.562 451.997 C 721.880 450.814, 722.146 450.501, 723.117 423.109 C 723.867 401.935, 724.678 398.337, 729.260 395.838 C 730.603 395.106, 737.909 394.380, 747.500 394.026 C 767.620 393.282, 770.043 392.224, 774.885 382.062 C 776.940 377.751, 777 376.372, 776.985 333.562 C 776.976 309.243, 776.591 290.096, 776.126 290.831 C 775.525 291.778, 775.113 291.314, 774.694 289.220 C 773.857 285.035, 769.558 280.344, 765.217 278.878 C 762.346 277.909, 740.229 277.609, 668 277.562 L 574.500 277.500 569.810 275.190 C 566.175 273.399, 564.604 271.825, 562.827 268.190 C 560.789 264.022, 560.513 261.863, 560.339 248.787 C 560.030 225.399, 559.701 225.115, 531.705 223.995 C 511.862 223.201, 508.763 222.632, 505.689 219.218 C 502.690 215.889, 502.041 206.410, 502.020 165.651 C 501.998 122.717, 501.933 122.228, 495.627 117.730 C 492.694 115.638, 491.383 115.490, 474.500 115.341 C 454.615 115.166, 449.999 114.217, 446.544 109.594 C 444.573 106.956, 444.468 104.954, 443.609 53.429 L 442.718 0 387.859 0 L 333 0 332.890 15.750 M 0.460 335.500 C 0.460 360.250, 0.590 370.232, 0.749 357.682 C 0.908 345.132, 0.908 324.882, 0.749 312.682 C 0.590 300.482, 0.460 310.750, 0.460 335.500"/>)

const customStyles = {
  itemShapes: StarIcon,
  activeFillColor: '#EBF400',
  inactiveFillColor: '#35374B',
}

return (
  <>
    <button onClick={toggleModal} className="edit-modal-btn">
      Edit Review
    </button>

    {modal && (
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="add-modal-content">
          <h2> Edit Review </h2>
          <h3>{game.name}</h3>
          <form className="create-review" onSubmit={handleSubmit} action="" method="post">
            <Rating
              className="input-rating"
              style={{ maxWidth: 180 }}
              value={rating}
              onChange={setRating}
              name="rating"
              isRequired
              itemStyles={customStyles}
            />
            <textarea
              className="input-comment"
              rows={10}
              placeholder="Review"
              value={review.comment}
              name="comment"
              required
              onChange={handleChange}
            />
          </form>
          <button className="close-modal" onClick={handleSubmit} type="submit" value="Submit">
            Submit Review Edit
          </button>
        </div>
      </div>
    )}
  </>
);
}

export default EditReview;