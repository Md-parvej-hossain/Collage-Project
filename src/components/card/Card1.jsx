import img1 from '../../assets/path.jpg';
const Card1 = () => {
  return (
    <div>
      <div className="card bg-gray-200 shadow-sm group z-0">
        <figure className="px-2 pt-2">
          <img
            src={img1}
            alt="img"
            className="rounded-xl h-[250px] group-hover:scale-110 transition"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">পথের পাাঁচালী </h2>
          <p>বিভূতিভূষণ বন্দ্যোপাধ্যায় </p>

          <div className="card-actions">
            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1qLyWExiO57qNcnuaqkk19rUuCc7uerIS&export=download"
              className="btn btn-primary"
            >
              download Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
