const clients = [
  {
    name: "Olmypics NZ",
  },
  {
    name: "High Performance NZ",
  },
  {
    name: "Boxing NZ",
  },
  {
    name: "Athletics NZ",
  },
  {
    name: "Yachting NZ",
  },
  {
    name: "Echo Reports",
  },
  {
    name: "Xero",
  },
  {
    name: "Strategic Pay",
  },
  {
    name: "Masters",
  },
  {
    name: "Potentia",
  },
  {
    name: "RCP",
  },
  {
    name: "Kindello",
  },
  {
    name: "Chester",
  },
  {
    name: "Arria",
  },
  {
    name: "South",
  },
  {
    name: "Spaceworks",
  },
  {
    name: "Orchestra",
  },
];

const ClientCarousel = () => {
  return (
    <div className="client-content-container">
      <h2 className="client-content-text mb-20">Our clients</h2>
      <div className="client-list">
        {clients.map((client, index) => (
          <div key={index} className="client-item flex flex-row">
            {client.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;
