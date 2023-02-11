import { motion } from "framer-motion";

const ApiYT = ({ page, setPage, x, setX }) => {
  return (
    <motion.div
      className="card"
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <div className="card-title">YT</div>
      <div className="video">
        <iframe
          style={{ borderRadius: "20px", boxShadow: "0px 0px 20px #13226b" }}
          width="1000"
          height="450"
          src="https://www.youtube.com/embed/zqLEO5tIuYs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <iframe
          style={{ borderRadius: "20px", boxShadow: "0px 0px 20px #13226b" }}
          width="1000"
          height="450"
          src="https://www.youtube.com/embed/9zAf9t3vaN4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ApiYT;
