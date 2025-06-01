const Profile = () => {
  return (
    <div
      id="profile"
      className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-8 w-full space-y-4"
    >
      <h1 className="font-bold text-2xl md:text-2xl tracking-tight mb-0 text-black mt-6">
        Bio
      </h1>
      <div className="text-gray-600">
        <p>
          Howard Zhong is a research software engineer at the Center for High
          Throughput Computing (CHTC), working on &ldquo;Pelican&rdquo;, an
          open-source platform distributing PB-scale data. He holds an M.S. in
          Computer Science from UW-Madison and has 2+ years of experience
          building robust software systems — from enterprise microservices built
          on Java Spring Boot to open-source data federation. Howard enjoys
          untangling increasingly complex systems, viewing it as similar to
          climbing a mountain: the higher he climbs, the tougher the
          challenges—but the expanding views become increasingly rewarding,
          making the journey deeply satisfying.
        </p>
      </div>
    </div>
  );
};

export default Profile;
