export default function Card({ title, description, image, link }) {
  return (
    <div className="border rounded-lg p-4 shadow-md w-72 hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="text-xl font-bold mt-3">
        {title}
      </h2>

      <p className="mt-2 text-gray-600">
        {description}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          View More
        </button>
      </a>
    </div>
  );
}