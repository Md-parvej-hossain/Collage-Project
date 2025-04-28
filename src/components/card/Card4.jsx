import img1 from '../../assets/img1.jpeg';
const Card4 = () => {
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
          <h2 className="card-title">Card Title</h2>
          <p>Price :</p>

          <div className="card-actions">
            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1__7LdBFI9aYxxv885B5bFWnNGACB1uEs&export=download"
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

export default Card4;
